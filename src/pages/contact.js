import { Button, Grid, AlertTitle, Alert, Container } from "@mui/material";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [missingFields, setMissingFields] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    //Checks to send email
    if (missingFields) return;
    emailjs
      .sendForm(
        "service_98b9c4t",
        "template_pb98cop",
        form.current,
        "jSU9FxtPXd2reRFEh"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.replace("/success");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  function CheckBoolean() {
    if (name === "" || email === "" || question === "") {
      setMissingFields(true);
    } else {
      setMissingFields(false);
    }
  }
  return (
    <div>
        <Navbar/>
        <div className="flex justify-center pt-16 pb-36">
            <div>
            <h1
                className="font-[Raleway] uppercase subtitle
                tracking-widest text-[30px] text-center pt-2 pb-7"
            >
                Contact me
            </h1>
            <form ref={form} onSubmit={sendEmail}>
                <div>
                <div>
                    <input
                    onChange={(e) => setName(e.target.value)}
                    className="contactInput"
                    type="text"
                    placeholder="Your name"
                    name="name"
                    ></input>
                </div>
                <div>
                    <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="contactInput"
                    type="email"
                    placeholder="Your email"
                    name="user_email"
                    ></input>
                </div>
                <div>
                    <textarea
                    onChange={(e) => setQuestion(e.target.value)}
                    className="contactInput"
                    id="questionBox"
                    placeholder="Your message"
                    name="message"
                    rows="5"
                    ></textarea>
                </div>
                <div>
                    {/* Conditional rendering only if client missingFields */}
                    {missingFields && (
                    <Alert sx={{ width: "100%", textAlign: "left" }} severity="error">
                        <AlertTitle>Error</AlertTitle>
                        This is an error alert — <strong>Missing fields!</strong>
                    </Alert>
                    )}
                    <button
                        className="contactButton font-[Raleway] uppercase 
                        tracking-[0.3em] text-[12px] w-[400px]"
                        type="submit"
                        value="Send"
                        onClick={CheckBoolean}
                    >
                    Send Message
                    </button>
                </div>
                </div>
            </form>
        </div>
        </div>
        <Footer/>
    </div>
  );
};