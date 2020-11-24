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
      backgroundColor: theme.palette.grey.main
    },
    fineprint: {},
    trophyImage: {
      height: "auto",
      width: "100%"
    },
    challengeText: {
      position: "absolute",
      left: "16px",
      top: "24px",
      fontWeight: "bold"
    }
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.challengeText}>
        PumpUp Challenge
      </Typography>
      <img src={coverIcons} className={classes.trophyImage} />
      <div>
        <PrizeTier
          name="Champion"
          icon={goldIcon}
          value={200}
          number={1}
          description={
            "The rider with the most hours at the end of the week will earn $200 and prove to be one of New York's top riders."
          }
        />
        <PrizeTier
          name="Sprinters"
          icon={silverIcon}
          value={100}
          number={9}
          description={"Be in the Top 10 at the end of the week and earn $100."}
        />
        <PrizeTier
          name="Lucky Ducks"
          icon={bronzeIcon}
          value={50}
          number={10}
          description={
            "10 lucky ducks will be randomly chosen every Sunday to win $50 each."
          }
        />
        <Typography variant="body2" className={classes.fineprint}>
          A minimum of 3h ride time is required to be eligible for a Lucky Duck
          prize.
        </Typography>
      </div>
    </div>
  );
});
PumpUpChallenge.propTypes = {};
