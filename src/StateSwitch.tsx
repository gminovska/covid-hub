import React from "react";
import StatsSkeleton from "./StatsSkeleton";

interface IStateSwitch {
  ok: boolean;
  error: any;
  isValidating: boolean;
  children: any;
}
const StateSwitch = (props: IStateSwitch) => {
  const { isValidating, ok, error, children } = props;
  return isValidating ? (
    <StatsSkeleton />
  ) : error ? (
    <div>There was an error</div>
  ) : (
    children
  );
};

export default StateSwitch;
