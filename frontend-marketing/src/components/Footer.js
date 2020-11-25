import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import bikepumpIcon from "../assets/bikepump-icon.svg";
export const Footer = React.memo(props => {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      backgroundColor: theme.palette.footer.main,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: "72px",
      paddingTop: "64px"
      //   position: "absolute",
      //   bottom: "0"
    },
    link: {
      color: "white",
      margin: "8px 0"
    },
    activeLink: {
      //   textDecoration: "underline"
      borderBottom: `1px solid ${theme.palette.body.main}`,
      paddingBottom: "4px"
    },
    icon: {
      marginBottom: "8px"
    }
  });
  const classes = useStyles();

  const location = useLocation();

  const isRiders = location.pathname.includes("/riders");
  const isAdvertisers = location.pathname.includes("/advertisers");
  return (
    <div className={classes.root}>
      <img src={bikepumpIcon} className={classes.icon} />
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
