import {
  Avatar,
  Button,
  Grid,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

function Newsletter() {
  const CustomTextField = styled(InputBase)(({ theme }) => ({
    "&.MuiInputBase-root": {
      borderBottom: `1px solid black`,
      [theme.breakpoints.up("lg")]: {
        borderBottom: "0px",
      },
    },
  }));

  return (
    <Grid container>
      <Grid item sm={12} md={6}>
        {/* <img src="/images/newsletter.svg" width="100%" /> */}
        <Avatar
          variant="square"
          src="/images/newsletter.svg"
          sx={{ width: "100%", height: "100%" }}
        />
      </Grid>
      <Grid item sm={12} md={6} sx={{ width: "100%" }}>
        <Stack
          justifyContent="center"
          alignItems={{ xs: "center", sm: "flex-start" }}
          height="100%"
          color="#07484A"
          bgcolor="#E0F6F1"
          py={5}
          px={{ xs: 3, sm: 5 }}
        >
          <Typography
            variant="h4"
            sx={{ textAlign: { xs: "center", sm: "left" } }}
          >
            Join Our
            <br />
            <strong>Newsletter</strong>
          </Typography>
          <Typography align="center" my={2}>
            Receive exclusive deals, discounts and many offers.
          </Typography>
          <CustomTextField fullWidth placeholder="Enter your email" mt={2} />
          <Button
            variant="contained"
            sx={{
              mt: 3,
              width: 250,
              bgcolor: "#70908B",
              textTransform: "capitalize",
              ":hover": {
                bgcolor: "#70908B",
              },
            }}
          >
            Subscribe
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Newsletter;
