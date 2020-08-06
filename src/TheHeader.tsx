import React from "react";
import { Layout } from "antd";
import { createUseStyles } from "react-jss";
const { Header } = Layout;

const useStyles = createUseStyles({
  header: {
    display: "flex",
    alignItems: "center",
    padding: "0 24px",
  },
  logo: {
    maxHeight: 40,
    marginRight: 5,
  },
  appTitle: {
    marginTop: 10,
  },
});
const TheHeader = () => {
  const classes = useStyles();
  return (
    <Header className={classes.header}>
      <img
        className={classes.logo}
        src="CovidHubLogo.png"
        alt="CovidHub logo"
      />
      <h1 className={classes.appTitle}>CovidHub</h1>
    </Header>
  );
};

export default TheHeader;
