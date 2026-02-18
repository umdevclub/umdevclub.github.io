import "@/styles/Devhacks2026Schedule.scss";

import day1Poster from "@/resources/images/devhacks/2026/Day1Schedule.png";
import day2Poster from "@/resources/images/devhacks/2026/Day2Schedule.png";
import scheduleBg from "@/resources/images/devhacks/2026/schedule_bg_2026.png";
import transparentBG from "@/resources/images/devhacks/2026/transparent_bg.png";

export default function Schedule2026() {
  return (
    <div
      className="schedule-images-wrapper"
      style={{ backgroundImage: `url(${scheduleBg})` }}
    >
      <div className="schedule-dark-overlay" />
      <div
        className="schedule-grain-overlay"
        style={{ backgroundImage: `url(${transparentBG})` }}
      />

      <div className="schedule-content">
        <img src={day1Poster} alt="DevHacks 2026 Day 1 Schedule" />
        <img src={day2Poster} alt="DevHacks 2026 Day 2 Schedule" />
      </div>
    </div>
  );
}
