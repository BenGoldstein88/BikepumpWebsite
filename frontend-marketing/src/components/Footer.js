import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
export const Footer = React.memo(props => {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      backgroundColor: theme.palette.dark.main,
      height: "50px",
      width: "100%"
    }
  });
  const classes = useStyles();
  return <div className={classes.root}>Footer</div>;
});
Footer.propTypes = {};
