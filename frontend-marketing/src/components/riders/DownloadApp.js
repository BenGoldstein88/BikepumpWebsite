import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
export const DownloadApp = React.memo(props => {
  const theme = useTheme();
  const useStyles = makeStyles({
    spacer: {
      backgroundColor: "white",
      height: "250px"
    },
    content: {
      backgroundColor: theme.palette.active.variant
    }
  });
  const classes = useStyles();
  return (
    <div>
      <div className={classes.spacer}></div>
      <div className={classes.content}>
        <img />
        <Typography variant="h2" className={classes.headerText}>
          Download the app, start earning.
        </Typography>
        <Typography variat="body1">
          Download app, set location permission, and ride your usual routes and
          schedule.
        </Typography>
        <Button variant="contained">Download on the App Store</Button>
      </div>
    </div>
  );
});
DownloadApp.propTypes = {};
