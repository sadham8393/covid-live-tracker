import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const CovidInfoTable = ({ tableData }) => {
  return (
    <Paper className="tableRoot">
      <TableContainer className="tableRoot">
        <Table
          classes={{
            stickyHeader: "table",
          }}
          stickyHeader
          aria-label="covid info table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">
                Country
              </TableCell>
              <TableCell align="right">Active</TableCell>
              <TableCell align="right">Recovered</TableCell>
              <TableCell align="right">Death</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((data) => (
              <TableRow key={data.country}>
                <TableCell align="center">{data.country}</TableCell>
                <TableCell align="right" className="totalCase">
                  {data.active}
                </TableCell>
                <TableCell align="right" className="recoveredCase">
                  {data.recovered}
                </TableCell>
                <TableCell align="right" className="deathCase">
                  {data.deaths}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default CovidInfoTable;
