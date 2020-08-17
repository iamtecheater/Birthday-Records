import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Recored from "./Recored";
import { connect } from "react-redux";


const RecordTable = ({ filter }) => {
  const people = [
    {
      name: "Brandon Hunter",
      dob: "29/07/1980",
    },
    {
      name: "Mark Hunter",
      dob: "12/02/1985",
    },
    {
      name: "David Hunter",
      dob: "17/08/1961",
    },
    {
      name: "Shailesh Rama",
      dob: "08/08/1986",
    },
    {
      name: "Dean Martin",
      dob: "07/02/1917",
    },
    {
      name: "Adam Levine",
      dob: "17/03/1979",
    },
    {
      name: "Stephen King",
      dob: "21/09/1947",
    },
    {
      name: "Chris Pratt",
      dob: "21/06/1979",
    },
  ];

  function dateToNum(date) {
    // Convert date "26/06/2016" to 20160626
    date = date.split("/");
    return Number(date[2] + date[1] + date[0]);
  }

  const sortByAge = () => {
    people.sort(function (a, b) {
      return dateToNum(a.dob) - dateToNum(b.dob);
    });
  };

  const sortByName = () => {
    people.sort(function (a, b) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      return 1;
    });
  };

  return (
    <Paper className="width">
      {filter === "name" ? sortByName() : sortByAge()}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="table-header">Name</TableCell>
            <TableCell className="table-header">Date of Birth</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {people.map((person, index) => (
            <Recored key={index} {...person} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

const mapStateToProps = (state) => ({
  filter: state,
});

export default connect(mapStateToProps)(RecordTable);
