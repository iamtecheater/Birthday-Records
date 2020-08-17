import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const Recored = ({ name, dob }) => (
  <TableRow>
    <TableCell>{name}</TableCell>
    <TableCell>{dob}</TableCell>
  </TableRow>
);

export default Recored;
