import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import bikeImage from "../../assets/rider-ledwheel-mobile.jpg";
import bikeVideo from "../../assets/rider-ledwheel-mobile.mp4";
import VideoLooper from "react-video-looper";

export const PaysToRide = React.memo(props => {
  const [isInView, setIsInView] = React.useState(false);
  React.useEffect(() => {
    document.addEventListener("scroll", trackScrolling);
  }, []);
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      backgroundColor: theme.palette.active.variant
    },
    headerText: {
      fontWeight: "bold",
      color: theme.palette.primary.main
    },
    image: {
      width: "100%",
      height: "auto",
      maxWidth: "800px",
      backgroundColor: "transparent"
    },
    video: {
      width: "100%",
      height: "auto",
      maxWidth: "800px"
    },
    videoLooper: {
      backgroundColor: "transparent"
    }
  });
  const classes = useStyles();

  const isTop = element => {
    return element.getBoundingClientRect().top <= window.innerHeight;
  };
  const trackScrolling = () => {
    const wrappedElement = document.getElementById("videoWrapper");
    if (isTop(wrappedElement)) {
      console.log("SEEING THE TOP");
      document.removeEventListener("scroll", trackScrolling);
      setIsInView(true);
    }
  };
  return (
    <div id={"videoWrapper"} className={classes.root}>
      <Typography variant="h2" className={classes.headerText}>
        The LED wheel that pays you while you ride.
      </Typography>
      <Typography variant="body1">Subtext goes here :)</Typography>
      {!isInView && <img className={classes.image} src={bikeImage} />}
      {isInView && (
        <VideoLooper
          className={classes.videoLooper}
          src={bikeVideo}
          start={5.0}
          end={6.8}
        />
      )}
    </div>
  );
});
PaysToRide.propTypes = {};
