import React from "react";
import { Layout } from "antd";
import { createUseStyles } from "react-jss";
const { Footer } = Layout;
const useStyles = createUseStyles({
  footer: {
    textAlign: "center",
  },
});
const TheFooter = () => {
  const styles = useStyles();
  return <Footer className={styles.footer}>Made by Gordana &copy; 2020</Footer>;
};

export default TheFooter;
