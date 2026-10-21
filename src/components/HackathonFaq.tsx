import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";

const HackathonFaq = () => {
  const faqData = [
    {
      question: "When and where is .devHacks 2027?",
      answer:
        ".devHacks 2027 will take place from Friday, February 19 to Sunday, February 21, 2027 at the Engineering, Information and Technology Complex (EITC), University of Manitoba in Winnipeg, MB.",
    },
    {
      question: "Why is .devHacks expanding to 48 hours?",
      answer:
        "We are expanding from 24 hours to a full 48-hour hackathon to give participants the breathing room to build higher-quality projects, attend in-depth technical workshops, get meaningful rest, and connect with mentors and sponsors without feeling rushed.",
    },
    {
      question: "Is .devHacks free to attend?",
      answer:
        "Yes, 100% free! All meals, midnight snacks, drinks, hacking space, Wi-Fi, mentorship, workshops, and swag are completely covered thanks to our generous sponsors.",
    },
    {
      question: "Who is eligible to participate?",
      answer:
        ".devClub welcomes students of all backgrounds and experience levels—including high school, undergraduate, and graduate students. Whether you are an engineer, developer, UI/UX designer, business major, or just enthusiastic about technology, there is a place for you at .devHacks.",
    },
    {
      question: "How many people can be on a team?",
      answer:
        "Teams can have up to 5 members. You can participate solo, but working in a team is strongly encouraged to promote collaborative problem-solving and shared learning.",
    },
    {
      question: "What if I don't have a team yet?",
      answer:
        "No problem! You can pre-register individually. Closer to the event, we will host dedicated team-formation channels on our Discord server and conduct an in-person Team Matching & Meet and Greet before hacking starts.",
    },
    {
      question: "When will official registration open?",
      answer:
        "Official registration will open closer to the event date. Pre-register your email on this page to receive an immediate notification the moment registration and challenge tracks go live!",
    },
    {
      question: "What should I bring to .devHacks 2027?",
      answer:
        "Bring your student ID, laptop, chargers, any hardware/peripherals you plan to hack on, comfortable clothes, and personal toiletries. We're still awaiting confirmation from the venue on arranging a potential overnight sleeping spot on campus.",
    },
    {
      question: "How can our company get involved as a sponsor or mentor?",
      answer:
        "We'd love to partner with you! Check out our Sponsorship Package above or reach out directly to umdevclub@gmail.com to explore booth opportunities, sponsored challenge tracks, workshops, and recruitment perks.",
    },
  ];

  return (
    <Box width="85%" mb={8}>
      <Typography
        id="faq"
        variant="h3"
        mb={4}
        fontFamily='"IBM Plex Mono", monospace'
        fontWeight={500}
        textAlign="center"
        padding={2}
        border="2px solid #272729"
        borderRadius={1}
        letterSpacing="0.15em"
      >
        .FAQs
      </Typography>
      {faqData.map((faq, index) => (
        <Accordion
          key={index}
          disableGutters
          elevation={0}
          sx={{
            color: "white",
            background: "#5d5c5c",
            margin: "0 !important",
            "&:before": {
              display: "none",
            },
            "&.Mui-expanded": {
              margin: "0 !important",
            },
            borderBottom: "1px solid #272729",
          }}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  fill: "white",
                }}
              />
            }
            sx={{
              background: "#272729",
              color: "white",
              minHeight: "52px",
              "&.Mui-expanded": {
                minHeight: "52px",
              },
              "& .MuiAccordionSummary-content": {
                margin: "12px 0",
              },
              "& .MuiAccordionSummary-content.Mui-expanded": {
                margin: "12px 0",
              },
            }}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-content`}
          >
            <Typography fontFamily='"IBM Plex Mono", monospace'>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              background: "#4a4949",
              padding: "18px 24px",
            }}
          >
            <Typography
              fontFamily='"IBM Plex Mono", monospace'
              fontWeight={500}
            >
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default HackathonFaq;
