import graham from "@/resources/images/champions/graham.jpg";
import joshua from "@/resources/images/champions/joshua.jpg";
import brooklynn from "@/resources/images/champions/brooklynn.png";
import jacob from "@/resources/images/champions/jacob.jpg";
import { IChampion } from "./types";

const champions: IChampion[] = [
  {
    name: "Graham Downey",
    challenge: "Website Challenge",
    image: graham,
    bio: "Graham developed Alathra, a worldbuilding Minecraft server with a mix of geopolitics and light roleplay, focused on creating an interesting history from the events and actions of players within the land of Alathra.",
  },
  {
    name: "Joshua Smallwood",
    challenge: "Discord Bot Challenge",
    image: joshua,
    bio: "Joshua developed Join Sound Johnson, a Discord bot that allows you to set a YouTube link to a video that plays when you connect to a voice channel.",
  },
  {
    name: "Brooklynn Wood",
    challenge: "Generative Art Challenge (Best Art)",
    image: brooklynn,
    bio: "Brooklynn created a generative art piece utilizing golden spiral (based on the Fibonacci sequence) rendered using moving squares in the gold and blue color.",
  },
  {
    name: "Jacob Janzen",
    challenge: "Generative Art Challenge (Best Code)",
    image: jacob,
    bio: 'Jacob created a generative art piece named "Writhing Mass of Flesh" that uses cellular noise rendered with bubbly look to achieve a "flesh" looking animation in his art.',
  },
];

export default champions;
