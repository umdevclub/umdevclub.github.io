import React from "react";

import githubScreenShot from "@/resources/images/devhacks/github/github-ss.png";
import githubRepo from "@/resources/images/devhacks/github/github-repo.png";
import gitScmScreenShot from "@/resources/images/devhacks/github/git-scm.png";

const GithubWindows = () => {
  const data = [
    {
      title: "Understanding Git and Github",
      desc: [
        {
          text: () => (
            <>
              <strong>Git:</strong> Git is a distributed version control system
              that tracks changes in source code during software development.
            </>
          ),
          img: "",
        },
        {
          text: () => (
            <>
              <strong>GitHub:</strong> GitHub is a web-based platform that
              provides hosting for software development, utilizing Git for
              version control.
            </>
          ),
          img: "",
        },
      ],
    },
    {
      title: "Installation:",
      desc: [
        {
          text: () => (
            <>
              Download and install Git from{" "}
              <a href="https://git-scm.com" target="_blank" rel="noreferrer">
                git-scm.com
              </a>
              .
            </>
          ),
          img: gitScmScreenShot,
        },
        {
          text: () => (
            <>
              Create a GitHub account at{" "}
              <a href="https://github.com" target="_blank" rel="noreferrer">
                github.com
              </a>
              .
            </>
          ),
          img: githubScreenShot,
        },
        {
          text: () => <></>,
          img: "",
        },
      ],
    },
    {
      title: "Setting up username and email:",
      desc: [
        {
          text: () => (
            <>
              Open up a terminal. You can do this by hitting the spotlight key
              combination (COMMAND + SPACE)
            </>
          ),
          img: "",
        },
        {
          text: () => (
            <>
              <p>Set your username:</p>
              <div className="code">
                <code>git config --global user.name "Your Name"</code>
              </div>
            </>
          ),
          img: "",
        },
        {
          text: () => (
            <>
              <p>
                Set your email (Note: Set it exactly as your github email
                address):
              </p>
              <div className="code">
                <code>
                  git config --global user.email "your.githubemail@example.com"
                </code>
              </div>
            </>
          ),
          img: "",
        },
      ],
    },
    {
      title: "Connecting GitHub Account to Local Git:",
      desc: [
        {
          text: () => (
            <>
              <p>
                After creating your GitHub account, authenticate your local Git
                with GitHub:
              </p>
              <div className="code">
                <code>git config --global credential.helper cache</code>
              </div>
            </>
          ),
          img: "",
        },
      ],
    },
    {
      title: "Creating a Repository:",
      desc: [
        {
          text: () => (
            <>
              On GitHub, click on the "+" sign in the top right corner and
              select "New repository."
            </>
          ),
          img: githubRepo,
        },
        {
          text: () => <>Follow the prompts to create a new repository.</>,
          img: "",
        },
      ],
    },
    {
      title: "Connecting Repository to Local Folder:",
      desc: [
        {
          text: () => (
            <>
              In your terminal, navigate to the local folder where you want to
              initialize Git.
            </>
          ),
          img: "",
        },
        {
          text: () => (
            <>
              <p>Run the following commands:</p>
              <div className="code">
                <code>git remote add origin &lt;repository_url&gt;</code>
              </div>
            </>
          ),
          img: "",
        },
      ],
    },
    {
      title: "Basic Git Commands:",
      desc: [
        {
          text: () => (
            <>
              <p>Add Changes:</p>
              <div className="code">
                <code>git add .</code>
              </div>
            </>
          ),
          img: "",
        },
        {
          text: () => (
            <>
              <p>Commit Changes:</p>
              <div className="code">
                <code>git commit -m "Your commit message"</code>
              </div>
            </>
          ),
          img: "",
        },
        {
          text: () => (
            <>
              <p>Push Changes to Github:</p>
              <div className="code">
                <code>git push -u origin master</code>
              </div>
            </>
          ),
          img: "",
        },
      ],
    },
  ];
  return (
    <div>
      <h1>Beginner's Guide to Git and Github</h1>
      <ol>
        {data.map((item, idx) => (
          <li key={idx}>
            <h3>{item.title}</h3>
            <ul
              style={{
                listStyleType: "disc",
              }}
            >
              {item.desc.map((el, index) => {
                return (
                  <li key={index}>
                    <p>{el.text()}</p>
                    {el.img ? (
                      <img src={el.img} alt="" style={{ width: "80%" }} />
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default GithubWindows;
