import { Box } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { memo, useMemo, ReactNode } from "react";

import "@/styles/PrizeCategories.scss";
import { HackathonTheme } from "@/types/types";

type ThemeDetail = {
  header?: string;
  content?: string[];
};

type ListNode =
  | { type: "text"; line: string }
  | { type: "list"; items: ListItem[] };

type ListItem = {
  content: string;
  children: ListItem[];
};

const ThemeDetails = memo(function ThemeDetails({
  details,
}: {
  details: ThemeDetail[];
}) {
  return (
    <>
      {details.map((detail, idx) => {
        const hasHeader = Boolean(detail.header);
        const items = detail.content ?? [];

        return (
          <div
            className="prize-categories"
            key={(detail.header ?? "detail") + idx}
          >
            {hasHeader && <h3>{detail.header}</h3>}

            {items.length > 0 && (
              <ul style={{ listStyleType: "disc" }}>
                {items.map((item, i) => (
                  <li key={i}>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </>
  );
});

function renderInline(line: string): ReactNode {
  const labelUrlMatch = line.match(/^(.*?):\s*(https?:\/\/\S+)\s*$/);
  if (labelUrlMatch) {
    const label = labelUrlMatch[1].trim();
    const url = labelUrlMatch[2].trim();
    return (
      <a href={url} target="_blank" rel="noreferrer">
        {renderBold(label)}
      </a>
    );
  }

  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = line.split(urlRegex);

  return (
    <>
      {parts.map((part, idx) => {
        const isUrl = part.startsWith("http://") || part.startsWith("https://");
        if (isUrl) {
          return (
            <a key={idx} href={part} target="_blank" rel="noreferrer">
              {part}
            </a>
          );
        }
        return <span key={idx}>{renderBold(part)}</span>;
      })}
    </>
  );
}

/** Renders **bold** inside plain text */
function renderBold(text: string): ReactNode {
  const boldRegex = /\*\*(.*?)\*\*/g;
  const parts = text.split(boldRegex);

  return (
    <>
      {parts.map((part, idx) =>
        idx % 2 === 1 ? <strong key={idx}>{part}</strong> : part
      )}
    </>
  );
}

/**
 * Parses body into nodes:
 * - text lines
 * - nested bullet lists based on indentation
 *
 * Bullets supported:
 * - "- item"
 * - "* item"
 * - "• item"
 */
function parseBody(body: string): ListNode[] {
  const lines = body.replace(/\r\n/g, "\n").split("\n");

  const nodes: ListNode[] = [];
  let i = 0;

  const isBullet = (line: string) => /^\s*[-*•]\s+/.test(line);

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === "") {
      nodes.push({ type: "text", line: "" });
      i++;
      continue;
    }

    if (isBullet(line)) {
      const { items, nextIndex } = parseListBlock(lines, i);
      nodes.push({ type: "list", items });
      i = nextIndex;
      continue;
    }

    nodes.push({ type: "text", line });
    i++;
  }

  return nodes;
}

function parseListBlock(
  lines: string[],
  startIndex: number
): { items: ListItem[]; nextIndex: number } {
  const items: ListItem[] = [];

  const stack: { indent: number; arr: ListItem[] }[] = [];

  const getIndent = (line: string) => {
    const match = line.match(/^(\s*)/);
    return match ? match[1].length : 0;
  };

  const stripBullet = (line: string) => line.replace(/^\s*[-*•]\s+/, "");

  let i = startIndex;

  while (i < lines.length) {
    const line = lines[i];

    // stop list block on blank line or non-bullet line
    if (line.trim() === "" || !/^\s*[-*•]\s+/.test(line)) break;

    const indent = getIndent(line);
    const content = stripBullet(line).trim();

    const newItem: ListItem = { content, children: [] };

    if (stack.length === 0) {
      items.push(newItem);
      stack.push({ indent, arr: items });
      i++;
      continue;
    }

    if (indent > stack[stack.length - 1].indent) {
      // child of last item in current top array
      const parentArr = stack[stack.length - 1].arr;
      const parent = parentArr[parentArr.length - 1];
      parent.children.push(newItem);
      stack.push({ indent, arr: parent.children });
    } else {
      while (stack.length > 0 && indent < stack[stack.length - 1].indent) {
        stack.pop();
      }

      const target = stack.length
        ? stack[stack.length - 1]
        : { indent: 0, arr: items };
      target.arr.push(newItem);

      if (stack.length) stack[stack.length - 1].indent = indent;
      else stack.push({ indent, arr: items });
    }

    i++;
  }

  return { items, nextIndex: i };
}

function renderList(items: ListItem[], keyPrefix: string): ReactNode {
  return (
    <ul style={{ listStyleType: "disc" }}>
      {items.map((item, idx) => (
        <li key={`${keyPrefix}-${idx}`}>
          <p className="prize-categories-body-line">
            {renderInline(item.content)}
          </p>
          {item.children.length > 0 &&
            renderList(item.children, `${keyPrefix}-${idx}`)}
        </li>
      ))}
    </ul>
  );
}

function HackathonThemes() {
  const { data } = useLoaderData() as HackathonTheme;

  const themeList = useMemo(
    () =>
      data.map((theme, index) => {
        const nodes = theme.body ? parseBody(theme.body) : [];

        return (
          <li key={theme.title + index}>
            <h2>{theme.title}</h2>

            {/* description */}
            {typeof theme.description === "string"
              ? theme.description && <p>{theme.description}</p>
              : theme.description?.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}

            {/* body */}
            {theme.body && (
              <div className="prize-categories-body">
                {nodes.map((node, idx) => {
                  if (node.type === "text") {
                    if (node.line.trim() === "") {
                      return (
                        <div key={idx} className="prize-categories-spacer" />
                      );
                    }
                    return (
                      <p key={idx} className="prize-categories-body-line">
                        {renderInline(node.line)}
                      </p>
                    );
                  }

                  return (
                    <div key={idx} className="prize-categories-body-line">
                      {renderList(node.items, `list-${index}-${idx}`)}
                    </div>
                  );
                })}
              </div>
            )}

            {/* details */}
            {theme.details && theme.details.length > 0 && (
              <ThemeDetails details={theme.details} />
            )}
          </li>
        );
      }),
    [data]
  );

  return (
    <div className="prize-categories-container">
      <Box width="85%">
        <h1 className="prize-categories-heading">Prize Categories</h1>
        <Box>
          <ol>{themeList}</ol>
        </Box>
      </Box>
    </div>
  );
}

export default HackathonThemes;
