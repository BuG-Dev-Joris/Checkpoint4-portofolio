import React from "react";
// import CVimage from "../images/CV/CapRepar.jpg";
import AutoReparNotices from "../images/repar/ReparNotices.jpg";
 
export default function CvDisplay() {
    return (
        <div className="md:mt-28">
            <h1>CV</h1>
            <img alt="CVVisualisation" src={AutoReparNotices}></img>
        </div>
    )
}