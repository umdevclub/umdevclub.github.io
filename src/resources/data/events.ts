import type { EventData } from "./types";
import workshop from "@/resources/images/events/workshop.jpg";
import devgames from "@/resources/images/events/devgames.jpg";
import battlesnake from "@/resources/images/events/battlesnakes.jpg";
import generalmeeting from "@/resources/images/events/generalMeeting.jpg";
import devhacks from "@/resources/images/events/devhacks.jpg";
import AWTY from "@/resources/images/events/AWTY.png";
import rendevouz from "@/resources/images/events/Rendezvous .jpg";
import examCram from "@/resources/images/events/ExamCram.jpg";
import devchamps from "@/resources/images/events/devchamps.jpeg";
import labtours from "@/resources/images/events/Labtours.jpg";
import codingKickoff from "@/resources/images/events/Coding Kickoff.png";

export { TERMS_ORDER } from "./types";

export const EVENTS: EventData[] = [
  {
    id: "general-meeting",
    title: "General Meeting",
    description:
      "Each term kicks off with a general meeting where we update students on .devClub's vision, goals, and planned events.",
    term: ["Summer", "Fall", "Winter"],
    images: generalmeeting,
    recurring: true,
  },
  {
    id: "are-we-there-yet",
    title: "Are We There Yet?",
    description:
      "Summer means a .devClub leisure trip: a chance to decompress after exams. We've gone to Gimli, Kenora, and, most recently, Pinawa.",
    term: ["Summer"],
    images: AWTY,
    recurring: true,
  },
  {
    id: "coding-kickoff",
    title: "Coding Kickoff",
    description:
      "Kickstart your coding journey with a hands-on workshop! Learn the basics, set up your environment, and explore tech career paths while meeting fellow students.",
    term: ["Fall"],
    images: codingKickoff,
    recurring: true,
  },
  {
    id: "workshops",
    title: "Workshops",
    description:
      ".devClub runs workshops every semester on all kinds of cool topics! We've played around with GitHub, built games in Unity, designed in Figma, hosted résumés online, and plenty more!",
    term: ["Fall", "Winter"],
    images: workshop,
    recurring: true,
  },

  {
    id: "rendezvous",
    title: "renDEVous",
    description:
      "Every month we host renDEVous, a fun hangout where you can game, present cool projects, or just kick back with the squad.",
    term: ["Summer", "Fall", "Winter"],
    images: rendevouz,
    recurring: true,
  },
  {
    id: "devgames",
    title: ".devGames",
    description:
      "Our new game development workshop series runs every month, offering students a chance to learn the fundamentals of game design and development step by step. ",
    term: ["Fall"],
    images: devgames,
    recurring: true,
  },

  {
    id: "exam-crams",
    title: "Exam Crams",
    description:
      "Need a boost before finals? Our Fall Exam Crams offer guided study support for first and second year courses so you can prep smarter, not harder.",
    term: ["Fall"],
    images: examCram,
    recurring: true,
  },

  {
    id: "devhacks",
    title: ".devHacks",
    description:
      ".devHacks is an annual hackathon hosted by .devClub for students to showcase their creativity and endurance over a period of 24 hours of fun filled development!",
    term: ["Winter"],
    images: devhacks,
    path: "/devhacks",
    recurring: true,
  },
  {
    id: "labtours",
    title: "Lab Tours",
    description:
      "Take a peek inside CS labs, meet profs, and see cool research in action!",
    term: ["Fall"],
    images: labtours,
  },
  {
    id: "devchamps",
    title: ".devChamps ",
    description:
      ".devChamps is a two to three month project-based programming battle featuring a new challenge every season.",
    term: ["Fall", "Winter"],
    images: devchamps,
    path: "/devchamps",
  },

  {
    id: "battlesnake",
    title: "Battle Snake",
    description:
      "Code your own snake, outsmart your friends, and see who slithers to the top!",
    term: ["Fall"],
    images: battlesnake,
  },
];
