import React from "react";

import githubScreenShot from "@/resources/images/devhacks/github/github-ss.png";
import githubRepo from "@/resources/images/devhacks/github/github-repo.png";
import gitScmScreenShot from "@/resources/images/devhacks/github/git-scm.png";
import gitVersionCheckScreenShot from "@/resources/images/devhacks/github/git-version-check.png";
import gitNotRecognizedScreenShot from "@/resources/images/devhacks/github/git-not-recognized.png";
import gitBashScreenShot from "@/resources/images/devhacks/github/git-bash-screenshot.png";
import githubAccountCreateScreenShot from "@/resources/images/devhacks/github/github-account-create.png";
import gitUserNameConfirmScreenShot from "@/resources/images/devhacks/github/git-username-confirm.png";
import gitEmailConfirmScreenShot from "@/resources/images/devhacks/github/github-email-confirm.png";
import githubCliWebpageScreenShot from "@/resources/images/devhacks/github/github-cli-webpage.png";
import ghAuthLoginScreenShot from "@/resources/images/devhacks/github/gh-auth-login.png";

import gitVersionCheckMacScreenShot from "@/resources/images/devhacks/github/git-version-check-mac.png";
import gitNotRecognizedMacScreenShot from "@/resources/images/devhacks/github/git-not-recognized-mac.png";
import gitUserNameConfirmMacScreenShot from "@/resources/images/devhacks/github/git-user-name-confirm-mac.png";
import gitEmailConfirmMacScreenShot from "@/resources/images/devhacks/github/git-email-confirm-mac.png";
import githubCliWebpageMacScreenShot from "@/resources/images/devhacks/github/github-cli-webpage-mac.png";
import ghAuthLoginMacScreenShot from "@/resources/images/devhacks/github/gh-auth-login-mac.png";
import homebrewWebpageMacScreenShot from "@/resources/images/devhacks/github/homebrew-webpage-mac.png";
import gitInstallHomeBrewMacScreenShot from "@/resources/images/devhacks/github/git-install-homebrew-mac.png";

import { Code } from "@/components/UI";

export const windowsInstructions = [
  {
    id: "understand-git-and-github",
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
            provides hosting for software development, utilizing Git for version
            control.
          </>
        ),
        img: "",
      },
    ],
  },
  {
    id: "download-and-install-git",
    title: "Download and Install git",
    desc: [
      {
        text: () => (
          <>
            <p>
              Git sometimes comes preinstalled with some systems. To check
              whether or not your system contains Git, type the following in
              your terminal:
            </p>
            <Code text="git --version" />
            <img src={gitVersionCheckScreenShot} alt="screenshot" />
          </>
        ),
        img: null,
      },
      {
        text: () => (
          <>
            <p>
              If you don’t see a similar response and instead get something like
              this:{" "}
            </p>
            <img src={gitNotRecognizedScreenShot} alt="screenshot" />
            <p>
              Then download and install Git from{" "}
              <a
                href="https://git-scm.com/downloads"
                target="_blank"
                rel="noreferrer"
              >
                git-scm.com
              </a>
            </p>
            <img src={gitScmScreenShot} alt="screenshot" />
            <p>
              Follow the necessary installer guide until installation is
              complete. Then open your terminal and follow the previous step to
              verify that Git was installed successfully. <br />
              <strong>
                NOTE: Git bash should also be installed automatically when you
                install git.
              </strong>
            </p>
            <img src={gitBashScreenShot} alt="screenshot" />
          </>
        ),
      },
    ],
  },
  {
    id: "setting-up-a-github-account",
    title: "Setting up a GitHub Account",
    desc: [
      {
        text: () => (
          <>
            <p>
              Navigate over to{" "}
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                github.com
              </a>{" "}
              to create an account.{" "}
            </p>
            <img src={githubScreenShot} alt="Screenshot" />
            <p>
              You will be asked for your email, you can use either a personal or
              your school email. If you intend to keep using github, we would
              recommend that you use your personal email.
              <br />
              <strong>
                This will not affect your hackathon registration in any way.
              </strong>{" "}
              Then set up your username, password, and verify that you are a
              human and your account should be set up.
            </p>
          </>
        ),
        img: githubAccountCreateScreenShot,
      },
    ],
  },
  {
    id: "setting-up-username-and-email",
    title: "Setting up username and email",
    desc: [
      {
        text: () => (
          <>
            Open up a terminal. We would recommend you use git bash. You can
            open git bash by searching git bash on your windows search bar
          </>
        ),
        img: gitBashScreenShot,
      },
      {
        text: () => (
          <>
            <p>Set your username:</p>
            <Code text="git config –-global user.name “YOUR GITHUB USERNAME HERE”" />
            <p>
              You can verify whether or not your git username has been input
              correctly by typing this:
            </p>
            <Code text="git config user.name" />
          </>
        ),
        img: gitUserNameConfirmScreenShot,
      },
      {
        text: () => (
          <>
            <p>Set your username:</p>
            <Code text='git config –-global user.email "YourGithubEmail@email.com"' />
            <p>
              You can verify whether or not your git username has been input
              correctly by typing this:
            </p>
            <Code text="git config user.name" />
            <p>
              You should be able to see your Github email output in the
              terminal.
            </p>
          </>
        ),
        img: gitEmailConfirmScreenShot,
      },
    ],
  },
  {
    id: "connecting-github-account-to-local-git",
    title: "Connecting GitHub Account to Local Git",
    desc: [
      {
        text: () => (
          <>
            <p>
              For ease of use, we'll be using the Github CLI (Command Line
              Interface) for authenticating and connecting Git with Github.
              Download the Github CLI from here:{" "}
              <a
                href="https://cli.github.com/"
                target="_blank"
                rel="noreferrer"
              >
                cli.github.com
              </a>
            </p>
            <p>After it's downloaded, follow the prompts to install it.</p>
          </>
        ),
        img: githubCliWebpageScreenShot,
      },
      {
        text: () => (
          <>
            <p>
              After installation, open your terminal and type the following:
            </p>
            <Code text="gh auth login" />
            <p>
              And use your arrow keys and hit the Enter key to the options shown
              below: (GitHub.com, HTTPS, Yes, and Login with a web browser).
            </p>
          </>
        ),
        img: ghAuthLoginScreenShot,
      },
      {
        text: () => (
          <>
            <p>
              After you've logged in, you should see a message that says
              "Authentication complete. Press Enter to continue."{" "}
            </p>
            <p className="github-green-text" style={{ textAlign: "center" }}>
              Congratulations! You have successfully linked your github and git!
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "creating-a-repository",
    title: "Creating a Repository",
    desc: [
      {
        text: () => (
          <>
            On GitHub, click on the "+" sign in the top right corner and select
            "New repository."
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
    id: "connecting-repository-to-local-folder",
    title: "Connecting Repository to Local Folder",
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
            <Code
              commands={[
                "git init",
                "git remote add origin https://github.com/USERNAME/REPOSITORY_NAME.git",
                "git branch -M main",
                "git push -u origin main",
              ]}
            />
          </>
        ),
        img: "",
      },
    ],
  },
  {
    id: "basic-git-commands",
    title: "Basic Git Commands",
    desc: [
      {
        text: () => (
          <>
            <p>Add Changes:</p>
            <Code text="git add ." />
          </>
        ),
        img: "",
      },
      {
        text: () => (
          <>
            <p>Commit Changes:</p>
            <Code text='git commit -m "Your commit message"' />
          </>
        ),
        img: "",
      },
      {
        text: () => (
          <>
            <p>Push Changes to Github:</p>
            <Code text="git push -u origin master" />
            <p className="github-green-text" style={{ textAlign: "center" }}>
              Congratulations on making it this far!
            </p>
          </>
        ),
        img: "",
      },
    ],
  },
];

export const unixInstructions = [
  {
    id: "understand-git-and-github",
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
            provides hosting for software development, utilizing Git for version
            control.
          </>
        ),
        img: "",
      },
    ],
  },
  {
    id: "download-home-brew",
    title: "Download HomeBrew",
    desc: [
      {
        text: () => (
          <>
            <p>
              Homebrew is a package manager for macOS. It allows you to install
              software packages from the command line. To install Homebrew,
              navigate over to{" "}
              <a href="https://brew.sh/" target="_blank" rel="noreferrer">
                brew.sh
              </a>{" "}
              and follow the instructions on the website.
            </p>
          </>
        ),
        img: homebrewWebpageMacScreenShot,
      },
    ],
  },
  {
    id: "download-and-install-git",
    title: "Download and Install git",
    desc: [
      {
        text: () => (
          <>
            <p>
              Git sometimes comes preinstalled with some systems. To check
              whether or not your system contains Git, type the following in
              your terminal:
            </p>
            <Code text="git --version" />
            <img src={gitVersionCheckMacScreenShot} alt="screenshot" />
          </>
        ),
        img: null,
      },
      {
        text: () => (
          <>
            <p>
              If you don’t see a similar response and instead get something like
              this:{" "}
            </p>
            <img src={gitNotRecognizedMacScreenShot} alt="screenshot" />
            <p>
              Then download and install Git from{" "}
              <a
                href="https://git-scm.com/downloads"
                target="_blank"
                rel="noreferrer"
              >
                git-scm.com
              </a>
            </p>
            <img src={gitScmScreenShot} alt="screenshot" />
            <p>
              Follow the necessary installer guide until installation is
              complete. Then open your terminal and follow the previous step to
              verify that Git was installed successfully. <br />
            </p>
            <h3 style={{ textAlign: "center" }}>
              <strong>OR</strong>
            </h3>
            <p>
              Use homebrew to install git. Pull up your terminal and type in the
              following:
            </p>
            <Code text="brew install git" />
          </>
        ),
        img: gitInstallHomeBrewMacScreenShot,
      },
    ],
  },
  {
    id: "setting-up-a-github-account",
    title: "Setting up a GitHub Account",
    desc: [
      {
        text: () => (
          <>
            <p>
              Navigate over to{" "}
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                github.com
              </a>{" "}
              to create an account.{" "}
            </p>
            <img src={githubScreenShot} alt="Screenshot" />
            <p>
              You will be asked for your email, you can use either a personal or
              your school email. If you intend to keep using github, we would
              recommend that you use your personal email.
              <br />
              <strong>
                This will not affect your hackathon registration in any way.
              </strong>{" "}
              Then set up your username, password, and verify that you are a
              human and your account should be set up.
            </p>
          </>
        ),
        img: githubAccountCreateScreenShot,
      },
    ],
  },
  {
    id: "setting-up-username-and-email",
    title: "Setting up username and email",
    desc: [
      {
        text: () => (
          <>Open up a terminal. MacOS comes with a terminal preinstalled.</>
        ),
      },
      {
        text: () => (
          <>
            <p>Set your username:</p>
            <Code text="git config –-global user.name “YOUR GITHUB USERNAME HERE”" />
            <p>
              You can verify whether or not your git username has been input
              correctly by typing this:
            </p>
            <Code text="git config user.name" />
          </>
        ),
        img: gitUserNameConfirmMacScreenShot,
      },
      {
        text: () => (
          <>
            <p>Set your username:</p>
            <Code text='git config –-global user.email "YourGithubEmail@email.com"' />
            <p>
              You can verify whether or not your git username has been input
              correctly by typing this:
            </p>
            <Code text="git config user.name" />
            <p>
              You should be able to see your Github email output in the
              terminal.
            </p>
          </>
        ),
        img: gitEmailConfirmMacScreenShot,
      },
    ],
  },
  {
    id: "connecting-github-account-to-local-git",
    title: "Connecting GitHub Account to Local Git",
    desc: [
      {
        text: () => (
          <>
            <p>
              For ease of use, we'll be using the Github CLI (Command Line
              Interface) for authenticating and connecting Git with Github.
              Download the Github CLI from here:{" "}
              <a
                href="https://cli.github.com/"
                target="_blank"
                rel="noreferrer"
              >
                cli.github.com
              </a>
            </p>
            <p>After it's downloaded, follow the prompts to install it.</p>
          </>
        ),
        img: githubCliWebpageMacScreenShot,
      },
      {
        text: () => (
          <>
            <p>
              After installation, open your terminal and type the following:
            </p>
            <Code text="gh auth login" />
            <p>
              And use your arrow keys and hit the Enter key to the options shown
              below: (GitHub.com, HTTPS, Yes, and Login with a web browser).
            </p>
          </>
        ),
        img: ghAuthLoginMacScreenShot,
      },
      {
        text: () => (
          <>
            <p>
              After you've logged in, you should see a message that says
              "Authentication complete. Press Enter to continue."{" "}
            </p>
            <p className="github-green-text" style={{ textAlign: "center" }}>
              Congratulations! You have successfully linked your github and git!
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "creating-a-repository",
    title: "Creating a Repository",
    desc: [
      {
        text: () => (
          <>
            On GitHub, click on the "+" sign in the top right corner and select
            "New repository."
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
    id: "connecting-repository-to-local-folder",
    title: "Connecting Repository to Local Folder",
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
            <Code
              commands={[
                "git init",
                "git remote add origin https://github.com/USERNAME/REPOSITORY_NAME.git",
                "git branch -M main",
                "git push -u origin main",
              ]}
            />
          </>
        ),
        img: "",
      },
    ],
  },
  {
    id: "basic-git-commands",
    title: "Basic Git Commands",
    desc: [
      {
        text: () => (
          <>
            <p>Add Changes:</p>
            <Code text="git add ." />
          </>
        ),
        img: "",
      },
      {
        text: () => (
          <>
            <p>Commit Changes:</p>
            <Code text='git commit -m "Your commit message"' />
          </>
        ),
        img: "",
      },
      {
        text: () => (
          <>
            <p>Push Changes to Github:</p>
            <Code text="git push -u origin master" />
            <p className="github-green-text" style={{ textAlign: "center" }}>
              Congratulations on making it this far!
            </p>
          </>
        ),
        img: "",
      },
    ],
  },
];
