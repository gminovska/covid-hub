import React from "react";
import { Layout } from "antd";
import { createUseStyles } from "react-jss";
const { Content } = Layout;

const useStyles = createUseStyles({
  content: {
    minHeight: "calc(100vh - 134px)",
  },
});
const TheContent = () => {
  const styles = useStyles();
  return <Content className={styles.content}></Content>;
};

export default TheContent;
