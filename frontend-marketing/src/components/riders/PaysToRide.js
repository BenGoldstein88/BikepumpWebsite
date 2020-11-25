import React from "react";
import PropTypes from "prop-types";
import { Typography, Fade } from "@material-ui/core";
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
      backgroundColor: theme.palette.active.variant,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "50px",
      borderTopLeftRadius: "16px",
      borderTopRightRadius: "16px"
    },
    headerText: {
      fontWeight: "bold",
      color: theme.palette.primary.main,
      margin: "12px 19px"
    },
    subtext: {
      margin: "12px 19px"
    },

    image: {
      width: "100%",
      height: "auto",
      // maxWidth: "800px",
      backgroundColor: "transparent"
      // height: "650px",
    },
    video: {
      width: "100%",
      height: "auto"
      // maxWidth: "800px"
    },
    videoLooper: {
      backgroundColor: "transparent",
      maxWidth: "800px",
      width: "100%"
      // height: "650px"
      // height: "auto"
    }
  });
  const classes = useStyles();

  const isTop = element => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return rect.top + rect.height <= window.innerHeight;
  };
  const trackScrolling = () => {
    const wrappedElement = document.getElementById("videoWrapper");
    if (isTop(wrappedElement)) {
      console.log("****************SEEING THE TOP");
      document.removeEventListener("scroll", trackScrolling);
      console.log("VIDEO PLAYER IS IN VIEW");
      setIsInView(true);
      document.getElementById("videoPlayer").play();
    }
  };

  const handleLoad = () => {
    console.log("LOADED THE DATA", document.getElementById("videoPlayer"));

    // document.getElementById("videoPlayer").play();
  };
  return (
    <div id={"videoWrapper"} className={classes.root}>
      <Typography variant="h2" className={classes.headerText}>
        The LED wheel that pays you while you ride.
      </Typography>
      <Typography variant="body1" className={classes.subtext}>
        Do what you do – ride for the apps and restaurants.
      </Typography>
      <Typography variant="body1" className={classes.subtext}>
        Get your BikePump wheel and earn extra money each week.{" "}
      </Typography>
      {/* {!isInView && <img className={classes.image} src={bikeImage} />} */}
      {/* {isInView && ( */}
      {/* <Fade in={isInView}> */}
      <video
        id={"videoPlayer"}
        className={classes.video}
        src={bikeVideo}
        onLoadedData={handleLoad}
        muted="muted"
        loop
      />
      {/* </Fade> */}
      {/*  )} */}
      {/* {isInView && (
        <VideoLooper
          className={classes.videoLooper}
          src={bikeVideo}
          start={5.0}
          end={6.8}
          autoplay={false}
        />
      )} */}
    </div>
  );
});
PaysToRide.propTypes = {};
