import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
export const Hero = React.memo(props => {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      width: "100%"
    },
    text: {
      color: theme.palette.teal.main,
      fontWeight: "bold"
    }
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.text} variant="h2">
        Delivery Riders,
      </Typography>
      <Typography className={classes.text} variant="h2">
        earn more money
      </Typography>
      <Typography className={classes.text} variant="h2">
        with no extra effort.
      </Typography>
    </div>
  );
});
Hero.propTypes = {};
