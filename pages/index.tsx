import React from "react";
import dynamic from "next/dynamic";

const Dashboard = dynamic(() => import("../src/Dashboard"), { ssr: false }); // because it uses navigator object

export default function Index() {
  return (
    <>
      <Dashboard />
    </>
  );
}
