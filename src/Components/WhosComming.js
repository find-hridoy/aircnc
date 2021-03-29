import { Avatar, Button } from "@material-ui/core";
import React from "react";

function WhosComming({ handleNext }) {
  return (
    <div className="whosComing">
      <h4>Travelling for work?</h4>
      <div className="whosComing__content">
        <div className="content__text">
          <p>Say hello to your host</p>
          <p>Let Rowdra know a little about yourself and why you're coming.</p>
        </div>
        <div className="content__info">
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <h5>Rowdra</h5>
        </div>
      </div>
      <textarea
        name="message"
        rows="8"
        cols="46"
        placeholder="Hello Rowdra! Can't wait to spend 4 night is your home"
      ></textarea>
      <br />
      <Button onClick={handleNext}>Continue</Button>
    </div>
  );
}

export default WhosComming;
