import React from "react";
import {
  Typography,
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Card,
  CardHeader,
} from "@material-ui/core";
import { FormattedNumber } from "react-intl";
import StatsSkeleton from "./StatsSkeleton";

interface StatsCardProps {
  title: React.ReactNode | string;
  totalNumber: number | false;
  newNumber: number | false;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainTitle: {
      fontSize: theme.typography.h6.fontSize,
      marginBottom: theme.spacing(3),
    },
    subtitle: {
      fontWeight: 700,
      marginBottom: theme.spacing(2),
      color: theme.palette.primary.main,
    },

    statsBlock: {
      textAlign: "center",
    },
    mainNumber: {
      fontSize: theme.typography.h6.fontSize,
      fontWeight: 700,
    },
  })
);

const StatsCard = (props: StatsCardProps) => {
  const { title, totalNumber, newNumber } = props;
  console.log(props);
  const classes = useStyles();
  return (
    <Grid item xs={12} sm className={classes.statsBlock}>
      <Card raised>
        <CardHeader
          title={<Typography className={classes.subtitle}>{title}</Typography>}
        ></CardHeader>

        <Typography component="section">
          {newNumber && totalNumber ? (
            <>
              <Typography paragraph className={classes.mainNumber}>
                <FormattedNumber value={totalNumber} />
              </Typography>
              <Typography paragraph color="textSecondary">
                [ +
                <FormattedNumber value={newNumber} />]
              </Typography>
            </>
          ) : (
            <StatsSkeleton />
          )}
        </Typography>
      </Card>
    </Grid>
  );
};

export default StatsCard;
