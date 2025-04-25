import "@/styles/DevChamps.scss";

import ChampionsList from "@/components/championsList";
import championsData from "@/resources/data/champions";

export default function DevChamps() {
  return (
    <div className="devchamps-container">
      <div className="welcome-part">
        <h1 className="devchamps">&lt;.devChamps&gt;</h1>
        <h2 className="develop-with-us">develop with us</h2>
        <h3 className="intro-text">
          .DevChamps is a new, official two to three month project-based
          programming battle featuring a new challenge every season.
        </h3>
      </div>
      <div className="hall-of-fame">
        <h1 className="header-devchamps">&lt;.hall of fame&gt;</h1>
        <h2 className="under-header-devchamps">
          join it by winning in any .devChamps category!
        </h2>
        <div className="winners">
          <ChampionsList peopleData={championsData} />
        </div>
      </div>
      <div className="faq">
        <h1 className="header-devchamps">&lt;F.A.Q&gt;</h1>
        <div className="questions">
          <div className="question-1">
            <h1 className="question">am i eligible to join?</h1>
            <h2 className="answer">
              All University of Manitoba students are eligible to join from any
              year, program, and faculty. The contest will favor undergraduate
              students for winning prizes. Join by submitting your entry to our
              form before the challenge deadline.
            </h2>
          </div>
          <div className="question-2">
            <h1 className="question">will I work alone or in a team?</h1>
            <h2 className="answer">
              You are expected to work on the project solo, meaning you must be
              the only contributor. You are free to research and ask advice from
              others within the duration of the project.
            </h2>
          </div>
          <div className="question-3">
            <h1 className="question">where do I submit my entry?</h1>
            <h2 className="answer">
              We will be opening a form a few weeks into the contest where you
              can submit a link of the repository containing your project and a
              link to your live site if applicable.
            </h2>
          </div>
          <div className="question-4">
            <h1 className="question">can I make changes after submission?</h1>
            <h2 className="answer">
              Of course you can! Only the last submission will be considered and
              evaluated. Previous submissions will be ignored while evaluating
              the project.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
