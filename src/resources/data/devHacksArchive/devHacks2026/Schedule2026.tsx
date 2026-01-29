import "@/styles/Devhacks2026Schedule.scss";

// ✅ Update this path to wherever you put the bg image in your project:
import scheduleBg2026 from "@/resources/images/devhacks/2026/schedule_bg_2026.png";

type ScheduleItem = {
  time: string;
  title: string;
  location?: string;
  variant?: "normal" | "alt";
};

type DaySchedule = {
  dayLabel: string; // e.g. "DAY 1"
  dateLabel: string; // e.g. "20TH FEB"
  items: ScheduleItem[];
};

const day1: DaySchedule = {
  dayLabel: "DAY 1",
  dateLabel: "20TH FEB",
  items: [
    { time: "9:30 - 10:00", title: "Opening Ceremony", location: "E3-270" },
    { time: "10:00 - 13:00", title: "Career Fair", location: "EITC Atrium" },
    {
      time: "12:00 - 13:00",
      title: "Lunch",
      location: "EITC Atrium",
      variant: "alt",
    },
    { time: "13:00", title: "Hackathon Starts", location: "" },
    { time: "13:00 - 14:00", title: "Workshop #1", location: "" },
    { time: "14:15 - 15:15", title: "Workshop #2", location: "" },
    { time: "15:30 - 16:30", title: "Workshop #3", location: "" },
    { time: "16:45 - 17:45", title: "Workshop #4", location: "" },
    {
      time: "18:00 - 19:00",
      title: "Dinner",
      location: "EITC Atrium",
      variant: "alt",
    },
    { time: "21:00", title: "Off-site Development", location: "Go Home!" },
  ],
};

const day2: DaySchedule = {
  dayLabel: "DAY 2",
  dateLabel: "21ST FEB",
  items: [
    { time: "8:30 - 9:30", title: "Light Breakfast", location: "E3-270" },
    {
      time: "11:30 - 12:30",
      title: "Lunch",
      location: "EITC Atrium",
      variant: "alt",
    },
    { time: "13:00 - 13:45", title: "Hackathon Closes", location: "" },
    {
      time: "14:00 - 17:00",
      title: "Judging",
      location: "EITC Atrium / E2-RM1 - 4",
    },
    {
      time: "17:00 - 18:00",
      title: "Dinner",
      location: "EITC Atrium",
      variant: "alt",
    },
    {
      time: "18:30 - 19:30",
      title: "Award / Closing Ceremony",
      location: "E3-270",
    },
  ],
};

function ScheduleDayCard({ data }: { data: DaySchedule }) {
  return (
    <section className="schedule-2026-card">
      <div className="schedule-2026-table">
        {/* header row like the poster */}
        <div className="schedule-2026-row schedule-2026-row--header">
          <div className="cell time">TIME</div>
          <div className="cell title">
            {data.dayLabel}
            <span className="date">{data.dateLabel}</span>
          </div>
          <div className="cell location">LOCATION</div>
        </div>

        {data.items.map((item, idx) => {
          const isAlt = item.variant === "alt";
          return (
            <div
              key={`${item.time}-${item.title}-${idx}`}
              className={`schedule-2026-row ${
                isAlt ? "schedule-2026-row--alt" : ""
              }`}
            >
              <div className="cell time">{item.time}</div>
              <div className="cell title">{item.title}</div>
              <div className="cell location">{item.location ?? ""}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function Schedule2026() {
  return (
    <div
      className="schedule-2026"
      style={{ ["--bg" as any]: `url(${scheduleBg2026})` }}
    >
      <div className="schedule-2026-overlay" />

      <div className="schedule-2026-inner">
        <h1 className="schedule-2026-title">
          <span className="top">EVENT</span>
          <span className="bottom">SCHEDULE</span>
        </h1>

        <div className="schedule-2026-grid">
          <ScheduleDayCard data={day1} />
          <ScheduleDayCard data={day2} />
        </div>
      </div>
    </div>
  );
}
