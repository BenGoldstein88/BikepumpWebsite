import React from "react";
import PropTypes from "prop-types";
import { PrizeTier } from "./PrizeTier";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import bronzeIcon from "../../assets/weekly-bonus-bronze.svg";
import silverIcon from "../../assets/weekly-bonus-silver.svg";
import goldIcon from "../../assets/weekly-bonus-gold.svg";
import coverIcons from "../../assets/weekly-bonus-cover.svg";
export const PumpUpChallenge = React.memo(props => {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      backgroundColor: theme.palette.grey.main,
      margin: "0 8px"
    },
    fineprint: {},
    trophyImage: {
      height: "auto",
      width: "100%"
    },
    challengeText: {
      position: "absolute",
      left: "16px",
      top: "32px",
      fontWeight: "bold"
    },
    challengeSubtext: {
      position: "absolute",
      left: "16px",
      top: "60px",
      color: theme.palette.body.main
    }
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.challengeText}>
        PumpUp Challenge
      </Typography>
      <Typography variant="body1" className={classes.challengeSubtext}>
        Challenge subtext goes here
      </Typography>
      <img src={coverIcons} className={classes.trophyImage} />
      <div>
        <PrizeTier
          name="Champion"
          icon={goldIcon}
          value={200}
          number={1}
          description={"1st Place rider of the week. There can be only one."}
        />
        <PrizeTier
          name="Sprinters"
          icon={silverIcon}
          value={100}
          number={5}
          description={"The 5 runners-up get $100 each."}
        />
        <PrizeTier
          name="Lucky Ducks"
          icon={bronzeIcon}
          value={50}
          number={10}
          description={
            "10 randomly chosen riders who pumped at least 10 hours."
          }
          noDivider
        />
        {/* <Typography variant="body2" className={classes.fineprint}>
          A minimum of 3h ride time is required to be eligible for a Lucky Duck
          prize.
        </Typography> */}
      </div>
    </div>
  );
});
PumpUpChallenge.propTypes = {};
