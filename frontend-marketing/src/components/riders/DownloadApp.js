import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import iPhoneImage from "../../assets/iPhones.png";
export const DownloadApp = React.memo(props => {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    spacer: {
      backgroundColor: "white",
      height: "150px"
    },
    content: {
      backgroundColor: theme.palette.active.variant,
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center"
    },
    headerText: {
      color: theme.palette.primary.dark,
      fontWeight: "bold"
    },
    phoneImage: {
      width: "40%",
      height: "auto",
      marginTop: "-100px"
    }
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.spacer}></div>
      <div className={classes.content}>
        <img src={iPhoneImage} className={classes.phoneImage} />
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
