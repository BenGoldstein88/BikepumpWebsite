import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
export const WinPrizes = React.memo(props => {
  const theme = useTheme();
  const useStyles = makeStyles({
    headerText: {
      color: theme.palette.primary.main,
      fontWeight: "bold"
    }
  });
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.headerText} variant="h2">
        Earn your wheel. Win $1600 in prizes each week
      </Typography>
      <Typography variant="body1">Even more subtext</Typography>
    </div>
  );
});
WinPrizes.propTypes = {};
