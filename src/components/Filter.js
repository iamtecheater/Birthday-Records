import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { nameFilter, ageFilter } from "../actions/filterAction";
import { connect } from "react-redux";

const Filter = ({ dispatch }) => {
  const [checked, setChecked] = useState(true);

  return (
    <div className="checkboxes">
      {checked ? console.log("ddd") : console.log("dxxxxxxxdd")}
      <Checkbox
        onClick={() => {
          setChecked(true);
          dispatch(nameFilter());
        }}
        checked={checked}
      />
      <label>Name</label>
      <Checkbox
        onClick={() => {
          setChecked(false);
          dispatch(ageFilter());
        }}
        checked={!checked}
      />
      <label>Age</label>
    </div>
  );
};

export default connect()(Filter);
