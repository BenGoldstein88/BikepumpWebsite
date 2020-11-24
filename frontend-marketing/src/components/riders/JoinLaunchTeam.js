import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import bodymovin from "lottie-web";
import animationFile from "../../assets/rider-bike-mobile.json";
export const JoinLaunchTeam = React.memo(props => {
  const theme = useTheme();
  const useStyles = makeStyles({
    lottie: {
      //   height: "300px"
      position: "relative",
      minHeight: "400px",
      width: "100%"
    }
  });
  const classes = useStyles();

  React.useEffect(() => {
    bodymovin.setQuality("low");
    var animation = bodymovin.loadAnimation({
      container: document.getElementById("lottie"), // Required
      animationData: animationFile, // Required
      renderer: "canvas", // Required
      loop: true, // Optional
      //   autoplay: true, // Optional
      name: "Hello World" // Name for future reference. Optional.
    });
    // animation.play();
    console.log("##", bodymovin, animation);
  }, []);
  return (
    <div>
      <Typography variant="h2" className={classes.headerText}>
        Join our launch team in February 2021
      </Typography>
      <Typography variant="body1" className={classes.headerText}>
        More subtext :)
      </Typography>
      <div id="lottie" className={classes.lottie}></div>
    </div>
  );
});
JoinLaunchTeam.propTypes = {};
