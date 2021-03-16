import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import React from "react";

function AccordionCount(props) {
  const { title, age, countValue, handleCount } = props;
  return (
    <div>
      <div className="count__section">
        <div className="count__title">
          <h3>{title}</h3>
          <p>{age}</p>
        </div>
        <div className="count__count">
          <IconButton
            aria-label="remove"
            className=""
            onClick={() => handleCount(false)}
          >
            <RemoveIcon />
          </IconButton>
          <input type="text" value={countValue} disabled />
          <IconButton
            aria-label="add"
            className=""
            onClick={() => handleCount(true)}
          >
            <AddIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default AccordionCount;
