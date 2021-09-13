import React from "react";

import {
  Container,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from "@material-ui/core";



const Tables = ({ dataCP, dataCPR, province }) => {
  if (!dataCP.summary) {
    return "Loading...";
  }

  let tableHead = [
    "Province",
    "Cases",
    "Testing",
    "Active Cases",
    "Total Cases",
    "Total Vaccines",
    "Total Deaths",
  ];

  let tableHeadH = [
    "Health Region",
    "Cases",
    "Deaths",
    "Total Cases",
    "Total Deaths",
  ];

  return (
    <Container>
      <TableContainer component={Paper}>
        {province ? (
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {tableHeadH.map((item, index) => (
                  <TableCell key={index}>{item}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {dataCPR.map((item, index) => (
                <TableRow>
                  <TableCell>{item.health_region}</TableCell>
                  <TableCell>{item.cases}</TableCell>
                  <TableCell>{item.deaths}</TableCell>
                  <TableCell>{item.cumulative_cases}</TableCell>
                  <TableCell>{item.cumulative_deaths}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {tableHead.map((item, index) => (
                  <TableCell key={index}><b>{item}</b></TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {dataCP.summary.map((item, index) => (
                <TableRow>
                  <TableCell>{item.province}</TableCell>
                  <TableCell>{item.cases}</TableCell>
                  <TableCell>{item.testing}</TableCell>
                  <TableCell>{item.active_cases}</TableCell>
                  <TableCell>{item.cumulative_cases}</TableCell>
                  <TableCell>{item.cumulative_dvaccine}</TableCell>
                  <TableCell>{item.cumulative_deaths}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </Container>
  );
};

export default Tables;
