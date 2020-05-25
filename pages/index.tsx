import React from "react";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";
import parser from "accept-language-parser";
import { IntlProvider } from "react-intl";
// import Header from "../src/MainHeader";
import MainContent from "../src/MainContent";
import { Layout, Card, Button } from "antd";
import enUS from "../translations/en-US.json";
import sr from "../translations/sr-latn-RS.json";
import de from "../translations/de-DE.json";
import "../src/styles/index.less";
import TheHeader from "../src/TheHeader";
import TheContent from "../src/TheContent";
import TheFooter from "../src/TheFooter";
const { Footer, Content } = Layout;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const userLanguage = parser.pick(
    ["en", "sr", "de"],
    context.req.headers["accept-language"]
  );

  return {
    props: {
      lang: userLanguage || "en-US",
    }, // will be passed to the page component as props
  };
};

const message = {
  ["en"]: enUS,
  ["sr"]: sr,
  ["de"]: de,
};

export default function Index(props) {
  console.log(props);
  return (
    <IntlProvider
      locale={props.lang}
      defaultLocale="en-US"
      messages={message[props.lang]}
    >
      <Layout>
        <TheHeader />
        <TheContent />
        <TheFooter />
      </Layout>
    </IntlProvider>
  );
}
