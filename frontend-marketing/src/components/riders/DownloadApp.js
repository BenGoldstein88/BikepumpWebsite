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
      fontWeight: "bold",
      margin: "12px 19px"
    },
    subtext: {
      margin: "12px 19px"
    },
    phoneImage: {
      width: "40%",
      height: "auto",
      marginTop: "-11%"
    },
    appStoreButton: {
      visibility: isInView ? "visible" : "hidden",
      margin: "60px 19px"
    },
    appStoreButtonFixed: {
      margin: "8px"
    },
    fixedButtonContainer: {
      position: "fixed",
      bottom: 0,
      visibility: isInView ? "hidden" : "visible",

      zIndex: 999998,
      borderTopLeftRadius: "15px",
      borderTopRightRadius: "15px",
      backgroundColor: theme.palette.active.variant,
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    noWrap: {
      whiteSpace: "nowrap"
    }
  });
  const classes = useStyles();
  const isBottom = element => {
    if (!element) return false;
    if (element.getBoundingClientRect().bottom < 0) return false;
    return element.getBoundingClientRect().bottom <= window.innerHeight;
  };

  const trackScrolling = () => {
    const wrappedElement = document.getElementById("downloadButton");
    if (isBottom(wrappedElement)) {
      console.log("SEEING THE BOTTOM");
      // document.removeEventListener("scroll", trackScrolling);
      setIsInView(true);
    } else {
      console.log("NONT SIG NTHE BOTTOM");
      setIsInView(false);
    }
  };
  return (
    <div className={classes.root}>
      <div className={classes.spacer}></div>
      <div className={classes.content}>
        <img src={iPhoneImage} className={classes.phoneImage} />
        <Typography variant="h2" className={classes.headerText}>
          Download the app – Play PumpUp Today
        </Typography>
        <Typography variant="body1" className={classes.subtext}>
          Earn more money with no extra effort.
        </Typography>
        <Typography
          variant="body1"
          className={`${classes.subtext} ${classes.noWrap}`}
        >
          Be cool. Stay safe.
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
