import React, { useState } from "react";
import {
  Card,
  Typography,
  CardContent,
  Grid,
  CardActions,
} from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import clsx from "clsx";

import styles from "./Carda.module.css";

const Carda = ({ cardData, date, title, text, size }) => {

    var isDeaths = false;
    var isInfected = false;

  if(title=='total_deaths'){
    isDeaths = true;
  }else{
    isInfected=true;
  }

  if (!cardData) {
    return "Loading...";
  }



  return (
    <>
      <Grid
        item
        component={Card}
        xs={12}
        md={size}
        className={clsx(styles.card, {
          [styles.infected]: isInfected,
          [styles.deaths]: isDeaths,

        })}
      >
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {title.toUpperCase()}
          </Typography>
          <Typography variant="h5">
            <CountUp start={0} end={cardData} duration={2} separator="," />
          </Typography>
          <Typography color="textSecondary">{date}</Typography>
          <Typography variant="body2">{text}</Typography>
        </CardContent>
      </Grid>
    </>
  );
};

export default Carda;
