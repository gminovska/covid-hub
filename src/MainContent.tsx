import React from "react";
import { makeStyles, Theme, createStyles, Container } from "@material-ui/core";

import StatsCard from "./StatsCard";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      marginTop: "60px",
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);
const MainContent = () => {
  const classes = useStyles();
  return (
    <Container>
      <main className={classes.content}>
        <StatsCard />
      </main>
    </Container>
  );
};

export default MainContent;
