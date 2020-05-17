import React from "react";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SearchAppBar from "../src/header";

export default function Index() {
  return (
    <>
      <SearchAppBar />
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
      </Box>
    </>
  );
}
