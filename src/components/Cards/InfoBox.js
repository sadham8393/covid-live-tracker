import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import CountUp from "react-countup";

function InfoBox({ title, cases, total, infoCls, ...props }) {
  return (
    <Card className={`infoBox ${infoCls}`}>
      <CardContent>
        <Typography className={`infoTitle ${infoCls}`} gutterBottom>
          {title}
        </Typography>
        <h2 className={`casesInfo ${infoCls}`}>
          {cases}
        </h2>
        <Typography className="totalInfo" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
