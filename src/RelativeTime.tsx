import React from "react";
import TimeAgo, { TimeAgoProps } from "timeago-react";
import * as timeago from "timeago.js";
import sr from "timeago.js/lib/lang/sr";
timeago.register("sr", sr);

export const config = { amp: true };
const RelativeTime = (props: TimeAgoProps) => {
  return <TimeAgo {...props} />;
};

export default RelativeTime;
