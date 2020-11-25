import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
export const WinPrizes = React.memo(props => {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      marginTop: "64px"
    },
    headerText: {
      color: theme.palette.primary.main,
      fontWeight: "bold",
      margin: "12px 19px"
    },
    subtext: {
      margin: "12px 19px"
    }
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.headerText} variant="h2">
        Qualify Today – $1100 in weekly PumpUp prizes.
      </Typography>
      <Typography variant="body1" className={classes.subtext}>
        Download the BikePump App to play PumpUp. Compete on the Leaderboard.
        Win prize money.
      </Typography>
    </div>
  );
});
WinPrizes.propTypes = {};
