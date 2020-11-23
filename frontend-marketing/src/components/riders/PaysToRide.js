import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import bikeImage from "../../assets/rider-ledwheel-mobile.jpg";
import bikeVideo from "../../assets/rider-ledwheel-mobile.mp4";

export const PaysToRide = React.memo(props => {
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
      maxWidth: "800px"
    }
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.headerText}>
        The LED wheel that pays you while you ride.
      </Typography>
      <Typography variant="body1">Subtext goes here :)</Typography>
      <img className={classes.image} src={bikeImage} />
    </div>
  );
});
PaysToRide.propTypes = {};
