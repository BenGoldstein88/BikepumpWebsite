import React from "react";
import PropTypes from "prop-types";
import { Typography, Divider } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
export const PrizeTier = React.memo(props => {
  const { name, number, icon, value, description, noDivider } = props;
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      padding: "24px 16px 0 16px"
    },
    headerText: {
      fontWeight: "bold",
      marginLeft: "8px"
    },
    number: {
      fontWeight: "bold",
      color: theme.palette.placeholder.main,
      marginLeft: "8px"
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
      display: "flex",
      alignItems: "center"
    },
    valueContainer: {
      display: "flex",
      alignItems: "center"
    },
    icon: {
      width: "32px",
      height: "32px"
    },
    divider: {},
    subtext: {
      marginTop: "12px",
      marginBottom: "24px",
      color: theme.palette.body.main
    }
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        <div className={classes.nameContainer}>
          <img src={icon} className={classes.icon} />

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
          <Typography variant="h3" className={classes.dollars}>
            ${value}
          </Typography>
        </div>
      </div>
      <Typography variant="body1" className={classes.subtext}>
        {description}
      </Typography>
      {!noDivider && <Divider className={classes.divider} />}
    </div>
  );
});
PrizeTier.propTypes = {};
