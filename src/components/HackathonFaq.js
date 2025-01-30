import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";

const HackathonFaq = () => {
  const faqData = [
    {
      question: "How many people can be on a team?",
      answer: "We have limited team size to 5 at most.",
    },
    {
      question: "Do I need to be on a team?",
      answer:
        "You aren’t required to be on a team but strongly encouraged to promote group-work experience.",
    },
    {
      question: "Does every member of the team need to be registered?",
      answer:
        "Yes, every member of the team should first register individually with the .devHacks registration form. You’ll receive a unique code which will be required in the team registration.",
    },
    {
      question: "What is the team registration form?",
      answer:
        "After you have registered individually, and if you have people to form the team with, we need one of the team members to fill this form to keep track of all the teams. Anyone participating solo should fill this form too. (The form will be emailed to you so you could edit it at any point if there are any changes to the team)",
    },
    {
      question:
        "What if I don’t have a team, should I still fill the team registration form?",
      answer:
        "No, you aren’t required to fill the form if you don’t yet have a team. If you haven’t already, please join our .devHacks discord server to connect with other students looking to form a team. We will also help with team-matching during Meet and Greet.",
    },
    {
      question: "What experience/skills do I need to participate?",
      answer:
        "There is no required set of skills or experience. .devClub welcomes people of all skill levels to our hackathon, including engineers, designers, developers or even people with good ideas.",
    },
    {
      question: "Can I work on the project after 10 pm on day 1, February 21?",
      answer:
        "Yes, you are welcome to work even after 10 pm on day 1. However, we encourage you to get some healthy sleep to re-fuel for the next day. Also, this is the latest when students should vacate the venue i.e., 10 pm.",
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
          sx={{
            color: "white",
            background: "#5d5c5c",
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
            }}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-content`}
          >
            <Typography fontFamily='"IBM Plex Mono", monospace'>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
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
