import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Language,
  Twitter,
} from "@mui/icons-material/";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import React from "react";

function Footer() {
  const CustomTypography = styled(Typography)(({ theme }) => ({
    color: "#07484A",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  }));

  const footer = [
    {
      title: "My Account",
      link1: "Sign in",
      link2: "Register",
      link3: "Order Status",
    },
    {
      title: "Help",
      link1: "Shopping",
      link2: "Returns",
      link3: "Sizing",
    },
    {
      title: "Shop",
      link1: "All Products",
      link2: "Bedroom",
      link3: " Dinning Room",
    },
    {
      title: "Legal Stuff",
      link1: "Shipping & Delivery",
      link2: " Terms & Conditions",
      link3: " Privacy & Policy",
    },
  ];

  const footerIcons = [
    {
      icon: <Facebook />,
    },
    {
      icon: <Instagram />,
    },
    {
      icon: <LinkedIn />,
    },
    {
      icon: <Language />,
    },
    {
      icon: <Twitter />,
    },
  ];
  return (
    <Grid
      container
      bgcolor="#F3F6F5"
      color="#07484A"
      py={5}
      px={{ xs: 3, md: 5, lg: 7 }}
    >
      <Grid item sm={12} md={4}>
        <Stack spacing={1} alignItems="flex-start" color="#07484A">
          <img src="/images/inwood.svg" height={50} />
          <Stack direction="row" alignItems="flex-start" rowSpacing={2}>
            {footerIcons.map((each) => (
              <IconButton disableRipple size="large" sx={{ color: "#07484A" }}>
                {each.icon}
              </IconButton>
            ))}
          </Stack>
          <Typography fontWeight="bold">Address</Typography>
          <Typography variant="subtitle2">
            +123 654 987 877 <br />
            The Bronx,
            <br /> NY 14568, USA
          </Typography>
        </Stack>
      </Grid>
      <Grid item sm={12} md={8} mt={{ xs: 10, md: 0 }}>
        <Grid container rowSpacing={10} columnSpacing={2}>
          {footer.map((each) => (
            <Grid item xs={6} md={3}>
              <Stack spacing={1}>
                <Typography variant="h6" fontWeight="bold">
                  {each.title}
                </Typography>
                <CustomTypography component={Link} href={"/"}>
                  {each.link1}
                </CustomTypography>
                <CustomTypography component={Link} href={"/"}>
                  {each.link2}
                </CustomTypography>
                <CustomTypography component={Link} href={"/"}>
                  {each.link3}
                </CustomTypography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item sm={12} mt={5}>
        <Typography sx={{ textAlign: { xs: "center", sm: "left" } }}>
          Copyright ©2020 INWOOD. All Rights Reserved
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Footer;
