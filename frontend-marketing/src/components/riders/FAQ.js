import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
export const FAQ = React.memo(props => {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      backgroundColor: theme.palette.dark.main,
      paddingTop: "100px"
    },
    accordion: {
      color: "white",
      backgroundColor: theme.palette.dark.main
    },
    expansionText: {
      color: theme.palette.placeholder.main
    },
    headerText: {
      color: "white",
      fontWeight: "bold",
      marginLeft: "19px"
    },
    addIcon: {
      display: "block",
      color: "white"
    },
    removeIcon: {
      display: "none",
      color: "white"
    }
  });
  const classes = useStyles();

  const faqs = [
    {
      question: "Why should I play PumpUp?",
      answer:
        "PumpUp is your path to join our February Launch Team and make extra money along the way. We’ll have a limited supply of February pumps for New York’s top riders.If you think that’s you, play PumpUp to share your stats and qualify early.The PumpUp Leaderboard lets you measure your Pump Time against other riders.Your stats help us choose New York’s best BikePump riders for our Launch Team in February. Don’t worry – if you don’t make the Launch Team, stay in touch – we’ll have more BikePumps later in 2021. PumpUp contest prizes end January 31, 2021."
    },
    {
      question: "Do I make it to the Launch Team if I win a PumpUp challenge?",
      answer: "No guarantees, my dude."
    },
    {
      question: "Do I change my daily routine?",
      answer: "Only if you want to."
    },
    {
      question: "How do I get paid?",
      answer: "With money."
    },
    {
      question: "What if I don’t make the Launch Team?",
      answer: "Tough it out, my dude."
    }
  ];
  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.headerText}>
        F.A.Q.
      </Typography>
      {faqs.map(faq => {
        return (
          <Accordion className={classes.accordion} expand>
            <AccordionSummary
              expandIcon={
                <span className={"accordionIcon"}>
                  <AddIcon className={`${classes.addIcon} addIcon`} />
                  <RemoveIcon className={`${classes.removeIcon} removeIcon`} />
                </span>
              }
            >
              <Typography variant="body1" className={classes.expansionText}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" className={classes.expansionText}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
});
FAQ.propTypes = {};
