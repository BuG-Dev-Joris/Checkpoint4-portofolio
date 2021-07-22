import React from "react";
import Form from "../components/Form.";
import ContactDescription from "../components/ContactDescription";
import CvDisplay from "../components/CvDisplay";


export default function Contact() {
    return (
        <div>
            <h1>Contact page</h1>
            <Form />
            <ContactDescription />
            <CvDisplay />
      </div>
    );
  }
