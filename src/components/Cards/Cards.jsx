import React from "react";
import { Card, Typography, CardContent, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Cards.module.css";
import Carda from "./Carda/Carda";

const Cards = ({ data, isCanada }) => {
  // console.log(data);
  if (isCanada) {
    const { summary } = data;
    var { cases, cumulative_cases, cumulative_deaths, active_cases, date } =
      summary[0];
    // console.log(summary[0])
    if (!cumulative_cases) {
      return "Loading...";
    }
  } else {
    var { confirmed, deaths, lastUpdate } = data;
    if (!confirmed) {
      return "Loading...";
    }
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {isCanada ? (
          <>
            <Carda
              cardData={cases}
              date={date}
              title="cases"
              text="Number of daily new cases of COVID-19"
              size={3}
            />

            <Carda
              cardData={cumulative_cases}
              date={date}
              title="total_cases"
              text="Number of total cases of COVID-19"
              size={3}
            />

            <Carda
              cardData={cumulative_deaths}
              date={date}
              title="total_deaths"
              text="Number of total deaths caused by COVID-19"
              size={3}
            />
          </>
        ) : (
          <>
            <Carda
              cardData={confirmed.value}
              date={new Date(lastUpdate).toDateString()}
              title="infected"
              text="Number of total cases of COVID-19"
              size={4}
            />

            <Carda
              cardData={deaths.value}
              date={new Date(lastUpdate).toDateString()}
              title="total_deaths"
              text="Number of deaths caused by COVID-19"
              size={4}
            />
          </>
        )}
      </Grid>
    </div>
  );
};

export default Cards;
