import Box from "@mui/material/Box";

import "@/styles/PrizeCategories.scss";

const PrizeCategories2024 = () => {
  const prizeData = [
    {
      title: "Best Societal Impact Hack",
      description:
        "This Societal Impact challenge invites you to develop a hack that provides an innovative and practical solution that benefits society and/or promotes sustainable development. This can range from environmental to cultural.",
    },
    {
      title: "Best First-Time Hack",
      description:
        "This best first time hacker challenge is made to welcome new hackers (and those who work with beginners)! You are eligible for this category if at least half of your team is made of 1st/2nd year hackers.",
    },
    {
      title: "Best Design Hack",
      description:
        "This design challenge invites you to develop a hack with innovative and visually appealing user interfaces (UI) and user experiences (UX).",
    },
    {
      title: "Fan’s Choice Award Hack",
      description:
        "This fan’s choice award hack puts the power into the hands of your fellow hackers, mentors, audience, volunteers and organisers. Whether your project is a technological breakthrough, a stunning design or a simple solution, if it wins the hearts of the ‘fanss’, you take home the prize.",
    },
    {
      title: "Open Innovation Challenge Hack",
      description:
        "This open innovation challenge invites you for creativity and innovation. There are no boundaries to what you can create, as long as it’s tech-based.",
    },
  ];

  const g3ChallengeData = [
    {
      title: "User Authentication",
      description:
        "Implement a secure user authentication system for accessing the web application.",
    },
    {
      title: "Session Tracking",
      description:
        "Develop functionality to track user sessions, recording the start time when a user logs in and the end time when they log out or close the tab/browser.",
    },
    {
      title: "Location Tracking",
      description:
        "Utilize browser geolocation API or IP-based geolocation to determine the user's location accurately. Log this information along with the session data to the SQL server.",
    },
    {
      title: "SQL Database Integration",
      description:
        "Set up a SQL database to store user session and location data efficiently. Design appropriate tables to maintain this data.",
    },
    {
      title: "Real-time Updates",
      description:
        "Implement real-time updates to the dashboard to reflect the latest user session and location data as it is logged to the SQL server. Utilize WebSockets or server-sent events for real-time communication.",
    },
    {
      title: "Dashboard Visualization",
      description:
        "Design an interactive dashboard with a map view to visualize user location data. Use a mapping library like Leaflet.js or Google Maps API to display user locations dynamically on the map.",
    },
    {
      title: "User Interface (UI)",
      description:
        "Create a user-friendly UI for the dashboard, allowing administrators to view and analyze user session and location data easily. Include features for filtering, searching, and customizing the displayed data.",
    },
    {
      title: "Performance Optimization",
      description:
        "Optimize the performance of both the web application and the SQL server to handle a potentially large volume of user session and location data efficiently.",
    },
    {
      title: "Security Measures",
      description:
        "Implement security measures to protect user data, including encryption of sensitive information and preventing unauthorized access to the dashboard.",
    },
  ];

  return (
    <div className="prize-categories-container">
      <Box width="85%">
        <h1 className="prize-categories-heading">Prize Categories</h1>
        <Box>
          <h2>The awards for .devHacks 2024 were as follows:</h2>
          <ol>
            {prizeData.map((prize, index) => (
              <li key={index}>
                <h3>{prize.title}</h3>
                <p>{prize.description}</p>
              </li>
            ))}
            <li>
              <h3>G3 Hack Challenge:</h3>
              <div>
                <h4>
                  Title: User Session and Location Monitoring Dashboard with Map
                  View
                </h4>
                <p>
                  <span className="bold">Challenge Description: </span>
                  Create a web application that monitors user sessions and
                  locations in real-time, logging the data to a SQL server and
                  displaying it in an interactive dashboard with a map view.
                  When a user logs in to the web page, track their session
                  duration and location and visualize this data on a map within
                  the dashboard.
                </p>
                <div className="prize-categories g3-challenge">
                  <h4>Key Components:</h4>
                  <ul
                    style={{
                      listStyleType: "disc",
                    }}
                  >
                    {g3ChallengeData.map((challenge, index) => (
                      <li key={index}>
                        <h5>{challenge.title}</h5>
                        <p>{challenge.description}</p>
                      </li>
                    ))}
                  </ul>
                  <h4>Bonus Challenge: (Optional)</h4>
                  <ul
                    style={{
                      listStyleType: "disc",
                    }}
                  >
                    <li>
                      Implement user role-based access control to restrict
                      access to the dashboard based on user roles (e.g., admin,
                      manager).
                    </li>
                    <li>
                      Add support for historical data analysis, allowing
                      administrators to view past user sessions and location
                      data.
                    </li>
                    <li>
                      Implement alerts or notifications for unusual user
                      activity patterns or suspicious locations.
                    </li>
                    <li>
                      Deploy the application and dashboard to a cloud platform
                      for scalability and accessibility.
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ol>
        </Box>
      </Box>
    </div>
  );
};

export default PrizeCategories2024;
