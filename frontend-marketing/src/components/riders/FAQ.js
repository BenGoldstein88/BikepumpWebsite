import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
export const FAQ = React.memo(props => {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      backgroundColor: theme.palette.dark.main
    },
    expansionPanel: {
      color: "white",
      backgroundColor: theme.palette.dark.main
    },
    expansionText: {
      color: theme.palette.placeholder.main
    },
    headerText: {
      color: "white"
    }
  });
  const classes = useStyles();

  const faqs = [
    {
      question: "Will I earn more than $100 per month after launch?",
      answer: "Maybe."
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
      <Typography variant="h3" className={classes.headerText}>
        F.A.Q.
      </Typography>
      {faqs.map(faq => {
        return (
          <ExpansionPanel className={classes.expansionPanel}>
            <ExpansionPanelSummary>
              <Typography variant="body1" className={classes.expansionText}>
                {faq.question}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography variant="body1" className={classes.expansionText}>
                {faq.answer}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        );
      })}
    </div>
  );
});
FAQ.propTypes = {};
