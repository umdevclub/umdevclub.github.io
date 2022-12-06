import "@/styles/Contact.scss";
import backgroundVideo from "@/resources/videos/wavy_video_background.mp4";

import React from "react";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Form() {
  const [submissionInProgress, setSubmissionInProgress] = React.useState(false);
  const [successfulSubmission, setSuccessfulSubmission] = React.useState(false);
  const [nameInput, setNameInput] = React.useState("");
  const [nameInputError, setNameInputError] = React.useState("");
  const [emailInput, setEmailInput] = React.useState("");
  const [emailInputError, setEmailInputError] = React.useState("");
  const [messageInput, setMessageInput] = React.useState("");
  const [messageInputError, setMessageInputError] = React.useState("");

  const onSubmit = () => {
    let isValid = validateForm();
    function onSubmissionError(message) {
      alert(`Failed to submit form: ${message}`);
      setSuccessfulSubmission(false);
    }
    function onSubmissionSuccess() {
      setNameInput("");
      setEmailInput("");
      setMessageInput("");
      setSuccessfulSubmission(true);
    }

    if (isValid) {
      setSubmissionInProgress(true);
      submitFrom(nameInput, emailInput, messageInput)
        .then((response) => {
          setSubmissionInProgress(false);
          if (response.status === 200 || response.status === 201) {
            onSubmissionSuccess();
          } else {
            onSubmissionError(response.message);
          }
        })
        .catch((error) => {
          setSubmissionInProgress(false);
          onSubmissionError(error.message);
        });
    }
  };

  const submitFrom = (name, email, message) => {
    const submitText = `Name: ${name}; Message: ${message};`;

    const formData = new URLSearchParams();
    formData.append("email", emailInput);
    formData.append("text", submitText);

    fetch(
      "https://send.pageclip.co/lPzFMSl9X7IOxQqDP4s7iv3Ow6GalMYv/contact-form",
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
        method: "post",
        redirect: "follow",
      }
    );
  };

  const validateName = () => {
    if (nameInput.length < 1) {
      setNameInputError("Name is required");
      return false;
    }
    setNameInputError("");
    return true;
  };

  const validateEmail = () => {
    if (emailInput.length < 1) {
      setEmailInputError("Email is required");
      return false;
    } else if (/\S+@\S+\.\S+/.test(emailInput) === false) {
      setEmailInputError("Email is invalid");
      return false;
    }
    setEmailInputError("");
    return true;
  };

  const validateMessage = () => {
    if (messageInput.length < 1) {
      setMessageInputError("Message is required");
      return false;
    }
    setMessageInputError("");
    return true;
  };

  const validateForm = () => {
    let isValid = true;

    isValid = isValid && validateName();
    isValid = isValid && validateEmail();
    isValid = isValid && validateMessage();

    return isValid;
  };

  return (
    <div className="contact-form">
      <Typography variant="h4" component="h2">
        Feedback Form
      </Typography>
      <TextField
        label="Name"
        id="name-input"
        className="text-field"
        variant="standard"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
        onBlur={validateName}
        helperText={nameInputError || " "}
        error={nameInputError.length > 0}
      />
      <br />
      <TextField
        label="Email"
        id="email-input"
        className="text-field"
        variant="standard"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
        onBlur={validateEmail}
        helperText={emailInputError || " "}
        error={emailInputError.length > 0}
      />
      <br />
      <TextField
        label="Message"
        id="message-input"
        className="text-field"
        variant="standard"
        multiline
        rows={4}
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
        onBlur={validateMessage}
        helperText={messageInputError || " "}
        error={messageInputError.length > 0}
      />
      <br />
      {successfulSubmission ? (
        <Typography variant="h6" component="h3" color="green">
          Message sent successfully!
        </Typography>
      ) : null}
      <Button
        variant="contained"
        size="large"
        onClick={onSubmit}
        disabled={submissionInProgress}
      >
        Send
      </Button>
    </div>
  );
}

function Contact() {
  return (
    <>
      <div className="contact-page-container">
        <Form />
      </div>
      <div>
        <video
          className="home-video"
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
        >
          <source type="video/mp4" src={backgroundVideo} />
        </video>
      </div>
    </>
  );
}

export default Contact;
