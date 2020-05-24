import React from "react";
import { makeStyles, Theme, createStyles, Container } from "@material-ui/core";
import CountryCard from "./CountryCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      marginTop: "60px",
      padding: theme.spacing(3),
    },
  })
);
const MainContent = (props) => {
  const classes = useStyles();
  return (
    <Container>
      <main className={classes.content}>
        <CountryCard lang={props.lang} />
      </main>
    </Container>
  );
};

export default MainContent;
