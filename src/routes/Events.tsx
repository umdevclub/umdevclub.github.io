import React, { useMemo, useState } from "react";
import { EVENTS } from "@/resources/data/events";
import type { Term } from "@/resources/data/types";
import "@/styles/Events.scss";

const TERMS: Term[] = ["Summer", "Fall", "Winter"];

function Events() {
  const [active, setActive] = useState<Term | "All">("All");
  const isAll = active === "All";

  const matches = (evTerms: Term[] | undefined, term: Term | "All") => {
    if (term === "All") return true;
    if (!evTerms || evTerms.length === 0) return true;
    return evTerms.includes(term as Term);
  };

  const filteredEvents = useMemo(() => {
    return EVENTS.filter((ev) =>
      matches(ev.term as Term[] | undefined, active)
    );
  }, [active]);

  const tagClass = (t: Term) => {
    const base = `term-tag term-${t.toLowerCase()}`;
    if (isAll) {
      return base;
    } else {
      if (t === active) {
        return base + " is-active";
      } else {
        return base + " is-muted";
      }
    }
  };

  const sectionClass = () => {
    let cls = "term-block animate-in ";
    if (isAll) {
      cls += "is-all";
    } else {
      cls += `is-${(active as Term).toLowerCase()}`;
    }
    return cls;
  };

  const headingText = () => {
    if (isAll) return "Events";
    return active as Term;
  };

  return (
    <div className="events-page container">
      <div className="filter-bar">
        {(["All", ...TERMS] as const).map((term) => {
          const isActive = active === term;

          let chipClass = "chip";
          if (isActive) {
            chipClass += " active";
          }

          return (
            <button
              key={term}
              className={chipClass}
              onClick={() => setActive(term)}
              type="button"
            >
              {term}
            </button>
          );
        })}
      </div>

      <section className={sectionClass()}>
        <header className="term-section">
          <h2 className="term-title">{headingText()}</h2>
        </header>

        <div className="events-grid">
          {filteredEvents.map((ev) => {
            const terms = (ev.term as Term[] | undefined) ?? [];

            let media: React.ReactNode;
            if (ev.images) {
              media = (
                <img
                  className="event-thumb"
                  src={String(ev.images)}
                  alt={ev.title}
                  loading="lazy"
                />
              );
            } else {
              media = <div className="event-thumb event-thumb--placeholder" />;
            }

            let termTags: React.ReactNode = null;
            if (terms.length > 0) {
              termTags = (
                <div className="term-tags" aria-label="Occurs in terms">
                  {terms.map((t) => (
                    <span key={t} className={tagClass(t)}>
                      {t}
                    </span>
                  ))}
                </div>
              );
            }

            let detailsBtn: React.ReactNode = null;
            if (ev.path) {
              detailsBtn = (
                <a className="btn" href={ev.path}>
                  Details
                </a>
              );
            }

            let badge: React.ReactNode = null;
            if (ev.recurring) {
              badge = <span className="event-badge">✔️</span>;
            }

            return (
              <article key={ev.id} className="event-card">
                {badge}
                {media}
                <h3 className="event-title">{ev.title}</h3>
                {termTags}
                <p className="event-blurb">{ev.description}</p>
                {detailsBtn}
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Events;
