import React from "react";
import PropTypes from "prop-types";
import { Typography, Divider } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
export const PrizeTier = React.memo(props => {
  const { name, number, icon, value, description } = props;
  const theme = useTheme();
  const useStyles = makeStyles({
    headerText: {
      fontWeight: "bold"
    },
    number: {
      fontWeight: "bold",
      color: theme.palette.placeholder.main
    },
    dollars: {
      fontWeight: "bold"
    },
    contentContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    nameContainer: {
      display: "flex"
    },
    valueContainer: {
      display: "flex",
      alignItems: "center"
    },
    icon: {
      width: "32px",
      height: "32px"
    }
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        <div className={classes.nameContainer}>
          <Typography variant="h3" className={classes.headerText}>
            {name}
          </Typography>
          {number && number > 1 && (
            <Typography variant="h3" className={classes.number}>
              x{number}
            </Typography>
          )}
        </div>
        <div className={classes.valueContainer}>
          <img src={icon} className={classes.icon} />
          <Typography variant="h3" className={classes.dollars}>
            ${value}
          </Typography>
        </div>
      </div>
      <Typography variant="body1">{description}</Typography>
      <Divider />
    </div>
  );
});
PrizeTier.propTypes = {};
