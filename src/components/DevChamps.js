import "@/styles/DevChamps.css"
import devchampsHeading from '@/resources/images/devchamps/devchamps-heading.png';
import devchampsBackground from '@/resources/images/devchamps/devchamps-bg.jpg';

import Faq from "react-faq-component";

const data = {
    rows: [
        {
            title: "What is .DevChamps?",
            content: `<em> .DevChamps </em> is a new, official two to three month project-based programming battle featuring a new challenge every season.<br/>
            Here is a list of ongoing and previous .DevChamps challenges:<br/>
            - Challenge # 1: Make a Beautiful Website`,
        },
        {
            title: "Who are eligible? How do I join?",
            content:
                "All University of Manitoba students are eligible to join from any year, program, and faculty. The contest will favor undergraduate students for winning prizes. Join by submitting your entry to our form before the challenge deadline.",
        },
        {
            title: "Will I work alone or with a team?",
            content: `You are expected to work on the project solo, meaning you must be the only contributor. You are free to research and ask advice from others within the duration of the project.`,
        },
        {
            title: "Where do I submit my entry?",
            content: `We will be opening a form a few weeks into the contest where you can submit a link of the repository containing your project and a link to your live site if applicable.`,
        },
        {
            title: "Can I make changes and resubmit my entry?",
            content: `Sure, you can! Only the latest submission will be assessed.`,
        },
        {
            title: "How are the entries going to be judged?",
            content: `For <em> Challenge # 1: Make a Beautiful Website </em>, entries will be judged based on the following criteria:<br/>
            <br/>
            - <em> Creativity </em> [10 points] It's can be the little details, or it can be the big picture which will make your site stand out. Own your idea and bring to life in a daring and ingenious way. Components and codebases that are constructed from ground zero will be rewarded extra.<br/>
            <br/>
            - <em> Code Quality </em> [10 points] Is your code understandable, consistent, and executed well? Are any applicable logics written efficiently, yet still be clear and robust. Be the judge before we are.<br/>
            <br/>
            - <em> User-friendliness </em> [10 points] A beautiful site is easy and enjoyable to use anywhere. Good design, incorporating UI/UX principles, and making a responsive site will give you the edge, and so does ensuring that your pages take a reasonable amount of time to load.`,
        },
        {
            title: "What are the prizes?",
            content: `Prizes to be won will be announced soon.`,
        },
        {
            title: "What is the deadline of the current challenge?",
            content: `For <em> Challenge # 1: Make a Beautiful Website </em>, the last day of submission will be on <em> September 12, 2021 </em>.`,
        },
    ],
};

const styles = {
    bgColor: 'rgba(255, 255, 255, 0.9)',
    rowContentPaddingTop: '10px',
    rowContentPaddingBottom: '10px',
    rowContentPaddingLeft: '10px',
    rowContentPaddingRight: '10px',
    // titleTextColor: "blue",
    // rowTitleColor: "blue",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

function DevChamps() {
    return <>
        <div className="devchamps-background" style={{ backgroundImage: `url(${devchampsBackground})` }}></div>
        <div className="devchamps-container">
            <img src={devchampsHeading} className="devchamps-heading" alt=".devChamps header"/>
            <div className="faq-container">
                <Faq
                    
                    data={data}
                    styles={styles}
                    config={config}
                />
            </div>
            <p className="hof-coming-soon">Hall of Fame Coming Soon</p>
        </div>
    </>;
}

export default DevChamps;