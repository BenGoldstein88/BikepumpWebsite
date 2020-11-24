import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
export const Footer = React.memo(props => {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      backgroundColor: theme.palette.dark.main,
      height: "50px",
      width: "100%"
      //   position: "absolute",
      //   bottom: "0"
    },
    link: {
      color: "white"
    },
    activeLink: {
      textDecoration: "underline"
    }
  });
  const classes = useStyles();

  const location = useLocation();

  const isRiders = location.pathname.includes("/riders");
  const isAdvertisers = location.pathname.includes("/advertisers");
  return (
    <div className={classes.root}>
      <Typography
        className={`${classes.link} ${isAdvertisers ? classes.activeLink : ""}`}
      >
        <Link to={"/advertisers"}>Advertisers</Link>
      </Typography>
      <Typography
        className={`${classes.link} ${isRiders ? classes.activeLink : ""}`}
      >
        <Link to={"/riders"}>Riders</Link>
      </Typography>
    </div>
  );
});
Footer.propTypes = {};
