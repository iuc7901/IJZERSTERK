import { Box, Stack, Typography } from "@mui/material";
import { borderRadius } from "@mui/system";
import React from "react";

function Creation() {
  const creation = [
    "/images/creation-1.svg",
    "/images/creation-2.svg",
    "/images/creation-3.svg",
    "/images/creation-4.svg",
    "/images/creation-1.svg",
    "/images/creation-2.svg",
  ];
  return (
    <Stack
      spacing={{ xs: 2, sm: 3, md: 4 }}
      py={5}
      direction="row"
      color="white"
    >
      <Stack
        spacing={2}
        bgcolor="#70908B"
        borderRadius="0 8px 8px 0"
        py={{ xs: 2, sm: 5 }}
        px={{ xs: 1, md: 5 }}
      >
        <Typography variant="h4" fontWeight={"bold"}>
          Our <br /> Own Creation
        </Typography>
        <Typography variant="subtitle1">Designed in our studio</Typography>
        <Typography variant="subtitle2" fontWeight={"bold"}>
          More
        </Typography>
      </Stack>
      <Stack
        width="100%"
        direction={"row"}
        columnGap={{ xs: 2, md: 4 }}
        sx={{
          overflowX: "scroll",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {creation.map((each) => (
          <img src={each} height={300} style={{ borderRadius: 10 }} />
        ))}
      </Stack>
    </Stack>
  );
}

export default Creation;
