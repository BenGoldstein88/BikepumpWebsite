import React from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  CircularProgress,
  Avatar
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
export const PumpUpWinners = React.memo(props => {
  const [rows, setRows] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(false);
  React.useEffect(() => {
    const loadData = async () => {
      setIsFetching(true);
      const response = await fetch(
        "https://test-bikepump-public.s3.amazonaws.com/marketingSite/leaderboard/leaderboards/20201123-mktg-leaderboard.json"
      );
      const json = await response.json();
      console.log("HERE IS RESPONSE", json);
      setRows(json.leaderboard || []);
      setIsFetching(false);
    };
    loadData();
  }, []);
  const theme = useTheme();
  const useStyles = makeStyles({
    table: {
      backgroundColor: theme.palette.dark.main
    },
    tableCell: {
      color: "white"
    },
    imageContainer: {
      display: "flex",
      //   justifyContent: "center",
      alignItems: "center"
    }
  });
  const classes = useStyles();
  return (
    <div>
      <Table className={classes.table}>
        <TableBody>
          {!isFetching &&
            rows.map(row => {
              return (
                <TableRow>
                  <TableCell className={classes.tableCell}>
                    {row.ranking}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    <span className={classes.imageContainer}>
                      <Avatar src={row.imageUrl} />
                      {row.leaderboardName}
                    </span>
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    {row.pumpSeconds}
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                    <img src={row.rewardBadgeUrl} />
                  </TableCell>
                </TableRow>
              );
            })}
          {isFetching && <CircularProgress />}
        </TableBody>
      </Table>
    </div>
  );
});
PumpUpWinners.propTypes = {};
