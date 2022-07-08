import "@/styles/DevChamps.scss";

function DevChamps() {
  return (
    <div className="devchamps-container">
      <div className="welcome-part">
        <h1 className="devchamps">&lt;.devchamps&gt;</h1>
        <h2 className="develop-with-us">develop with us</h2>
        <h3 className="intro-text">
          .DevChamps is a new, official two to three month project-based
          programming battle featuring a new challenge every season.
        </h3>
      </div>
      <div className="hall-of-fame">
        <h1 className="header-devchamps">&lt;.hall of fame&gt;</h1>
        <h2 className="under-header-devchamps">
          join it by winning in any .devchamps category!
        </h2>
        <div className="winners"></div>
      </div>
      <div className="faq">
        <h1 className="header-devchamps">&lt;F.A.Q&gt;</h1>
        <div className="questions">
          <div className="question-1"></div>
          <div className="question-2"></div>
          <div className="question-3"></div>
          <div className="question-4"></div>
        </div>
      </div>
    </div>
  );
}

export default DevChamps;
