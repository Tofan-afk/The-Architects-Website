import React from "react";
import "../SASS/contacts.scss";

export default function Contacts() {
  return <Data />;
}

function Data() {
  return (
    <div className="data">
      <div className="info">
        <h1>
          <span>CONTACT</span>
          <span>Informations</span>
        </h1>
        <h1>
          <span>Company Name</span>
          <span>1234 Sample Street Austin Texas 76401</span>
        </h1>

        <h1>
          <span>512.333.2222</span>
        </h1>

        <h1>
          <span></span>
          <span>sampleemail@gmail.com</span>
        </h1>
      </div>
      <div className="maps">
        <img src="./maps.jpg" />
      </div>
    </div>
  );
}
