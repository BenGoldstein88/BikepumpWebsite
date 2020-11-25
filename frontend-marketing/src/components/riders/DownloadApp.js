import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import iPhoneImage from "../../assets/iPhones.png";
import appStoreButton from "../../assets/Download-Wide.svg";
export const DownloadApp = React.memo(props => {
  const [isInView, setIsInView] = React.useState(false);
  React.useEffect(() => {
    document.addEventListener("scroll", trackScrolling);
  }, []);
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
      marginTop: "-11%"
    },
    appStoreButton: {
      visibility: isInView ? "hidden" : "visible"
    },
    appStoreButtonFixed: {
      margin: "8px"
    },
    fixedButtonContainer: {
      position: "fixed",
      bottom: 0,
      visibility: isInView ? "visible" : "hidden",
      zIndex: 999999999,
      borderTopLeftRadius: "15px",
      borderTopRightRadius: "15px",
      backgroundColor: theme.palette.active.variant,
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  });
  const classes = useStyles();
  const isBottom = element => {
    console.log("ELEMENT RECT", element.getBoundingClientRect());
    console.log("WINDOW HEIGHT", window.innerHeight);
    return element.getBoundingClientRect().bottom + 20 <= window.innerHeight;
  };
  const trackScrolling = () => {
    const wrappedElement = document.getElementById("downloadButton");
    if (isBottom(wrappedElement)) {
      console.log("SEEING THE BOTTOM");
      // document.removeEventListener("scroll", trackScrolling);
      setIsInView(true);
    } else {
      setIsInView(false);
    }
  };
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
        <img
          id="downloadButton"
          className={classes.appStoreButton}
          src={appStoreButton}
        />
        <div className={classes.fixedButtonContainer}>
          <img className={classes.appStoreButtonFixed} src={appStoreButton} />
        </div>
      </div>
    </div>
  );
});
DownloadApp.propTypes = {};
