import React from "react";
import Form from "../components/Form.";
import ContactDescription from "../components/ContactDescription";
import CvDisplay from "../components/CvDisplay";

export default function Contact() {
	return (
		<div className="flex">
			<Form />
			<ContactDescription className="" />
			<CvDisplay className="" />
		</div>
	);
}
