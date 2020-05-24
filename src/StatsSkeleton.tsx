import React from "react";
import { Skeleton } from "@material-ui/lab";

const StatsSkeleton = () => {
  return (
    <>
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
    </>
  );
};

export default StatsSkeleton;
