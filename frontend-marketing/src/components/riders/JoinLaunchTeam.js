import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import bodymovin from "lottie-web";
import animationFile from "../../assets/rider-bike-mobile.json";
export const JoinLaunchTeam = React.memo(props => {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "70px"
    },
    lottie: {
      //   height: "300px"
      position: "relative",
      width: "100%"
    },
    headerText: {
      color: theme.palette.primary.dark,
      fontWeight: "bold",
      margin: "12px 19px"
    },
    subtext: {
      margin: "12px 19px"
    }
  });
  const classes = useStyles();

  React.useEffect(() => {
    var animation = bodymovin.loadAnimation({
      container: document.getElementById("lottie"), // Required
      animationData: animationFile, // Required
      renderer: "svg", // Required
      loop: true, // Optional
      //   autoplay: true, // Optional
      name: "Hello World", // Name for future reference. Optional.
      rendererSettings: {
        scaleMode: "scale"
        // clearCanvas: false,
        // progressiveLoad: false, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.
        // hideOnTransparent: true //Boolean, only svg renderer, hides elements when opacity reaches 0 (defaults to true)
      }
    });
    // animation.play();
    console.log("##", bodymovin, animation);
  }, []);
  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.headerText}>
        To get your wheel join the Launch Team.
      </Typography>
      <Typography variant="body1" className={classes.subtext}>
        We created PumpUp to help us find New York’s best riders.
      </Typography>
      <Typography variant="body1" className={classes.subtext}>
        Play PumpUp to measure your ride time and qualify for the February
        Launch Team.
      </Typography>
      <div id="lottie" className={classes.lottie}></div>
    </div>
  );
});
JoinLaunchTeam.propTypes = {};
