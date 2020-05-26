import React from "react";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";
import parser from "accept-language-parser";
import App from "../src/App";
import "../src/styles/index.less";
export const getServerSideProps: GetServerSideProps = async (context) => {
  const userLanguage = parser.pick(
    ["en", "sr", "de"],
    context.req.headers["accept-language"]
  );

  return {
    props: {
      lang: userLanguage || "en",
    }, // will be passed to the page component as props
  };
};

export default function Index(props) {
  return <App {...props} />;
}
