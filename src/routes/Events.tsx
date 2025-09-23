import React, { useMemo, useState } from "react";
import { EVENTS } from "@/resources/data/events";
import type { Term } from "@/resources/data/types";
import "@/styles/Events.scss";

const TERMS: Term[] = ["Summer", "Fall", "Winter"];

function Events() {
  const [active, setActive] = useState<Term | "All" | "Upcoming">("Upcoming");
  const isAll = active === "All";

  const matches = (evTerms: Term[] | undefined, term: Term | "All") => {
    if (term === "All") {
      return true;
    }
    if (!evTerms || evTerms.length === 0) {
      return true;
    }
    return evTerms.includes(term as Term);
  };

  // Build filtered events
  const filteredEvents = useMemo(() => {
    if (active === "Upcoming") {
      const expanded = EVENTS.flatMap((ev) => {
        // Titles
        let titles: string[];
        if (Array.isArray(ev.upcomingTitle)) {
          titles = ev.upcomingTitle;
        } else if (ev.upcomingTitle) {
          titles = [ev.upcomingTitle];
        } else {
          titles = [ev.title];
        }

        // Descriptions
        let descriptions: string[];
        if (Array.isArray(ev.upcomingDescription)) {
          descriptions = ev.upcomingDescription;
        } else if (ev.upcomingDescription) {
          descriptions = [ev.upcomingDescription];
        } else {
          descriptions = [ev.description];
        }

        // Images
        let images: string[];
        if (Array.isArray(ev.upcomingImage)) {
          images = ev.upcomingImage;
        } else if (ev.upcomingImage) {
          images = [ev.upcomingImage];
        } else {
          images = [ev.image];
        }

        // Dates
        let dates: string[];
        if (Array.isArray(ev.date)) {
          dates = ev.date;
        } else if (ev.date) {
          dates = [ev.date];
        } else {
          dates = [];
        }

        // Locations
        let locations: string[];
        if (Array.isArray(ev.location)) {
          locations = ev.location;
        } else if (ev.location) {
          locations = [ev.location];
        } else {
          locations = [];
        }

        // RSVPs
        let rsvps: string[];
        if (Array.isArray(ev.rsvp)) {
          rsvps = ev.rsvp;
        } else if (ev.rsvp) {
          rsvps = [ev.rsvp];
        } else {
          rsvps = [];
        }

        const maxLen = Math.max(
          titles.length,
          descriptions.length,
          images.length,
          dates.length,
          locations.length,
          rsvps.length
        );

        return Array.from({ length: maxLen }).map((_, i) => {
          let title = titles[i] || titles[0];
          let description = descriptions[i] || descriptions[0];
          let image = images[i] || images[0];
          let date: string | undefined = dates[i];
          let location: string | undefined = locations[i];
          let rsvp: string | undefined = rsvps[i];

          return {
            ...ev,
            title,
            description,
            image,
            date,
            location,
            rsvp,
          };
        });
      });

      const now = new Date();
      const upcomingOnly = expanded.filter((ev) => {
        if (!ev.date) return false;
        return new Date(ev.date) > now;
      });

      return upcomingOnly.sort((a, b) => {
        if (a.date && b.date) {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        }
        return 0;
      });
    }

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
    if (active === "Upcoming") {
      return "Upcoming Events";
    }
    if (isAll) {
      return "Events";
    }
    return active as Term;
  };

  return (
    <div className="events-page container">
      <div className="filter-bar">
        {(["Upcoming", "All", ...TERMS] as const).map((term) => {
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
          {filteredEvents.map((ev, idx) => {
            const terms = (ev.term as Term[] | undefined) ?? [];

            let media: React.ReactNode;
            if (ev.image) {
              media = (
                <img
                  className="event-thumb"
                  src={String(ev.image)}
                  alt={String(ev.title)}
                  loading="lazy"
                />
              );
            } else {
              media = <div className="event-thumb event-thumb--placeholder" />;
            }

            return (
              <article key={`${ev.id}-${idx}`} className="event-card">
                {active !== "Upcoming" && ev.recurring && (
                  <span className="event-badge">✔️</span>
                )}
                {media}

                <h3 className="event-title">{ev.title}</h3>

                {active !== "Upcoming" && terms.length > 0 && (
                  <div className="term-tags" aria-label="Occurs in terms">
                    {terms.map((t) => (
                      <span key={t} className={tagClass(t)}>
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {active === "Upcoming" &&
                  ev.date &&
                  typeof ev.date === "string" && (
                    <div className="event-meta">
                      <p>
                        📍 {ev.location ? ev.location : "TBA"} <br />
                        🗓 {new Date(ev.date).toLocaleDateString()}{" "}
                        {new Date(ev.date).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                      {ev.rsvp && typeof ev.rsvp === "string" && (
                        <a
                          href={ev.rsvp}
                          target="_blank"
                          rel="noopener"
                          className="btn"
                        >
                          RSVP
                        </a>
                      )}
                    </div>
                  )}

                <p className="event-blurb">{ev.description}</p>

                {active !== "Upcoming" && ev.path && (
                  <a className="btn" href={ev.path}>
                    Details
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Events;
