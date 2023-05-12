import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

function Benefits() {
  const benefits = [
    {
      src: "/images/payment-method.svg",
      title: "Payment Method",
      subtitle: "We offer flexible payment options, to make easier.",
      bg: "#EEEBFF",
    },
    {
      src: "/images/return-policy.svg",
      title: "Reuturn Policy",
      subtitle: "You can return a product within 30 days.",
      bg: "#FFF4E7",
    },
    {
      src: "/images/customer-support.svg",
      title: "Customer Support",
      subtitle: "Our customer support is 24/7.",
      bg: "#CAF3E5",
    },
  ];

  return (
    <Stack
      color="#07484A"
      bgcolor="#E0EFF6"
      py={5}
      px={{ xs: 1, sm: 3, md: 5 }}
    >
      <Typography variant="h4" mb={4} align="center">
        Benefits for your expediency
      </Typography>
      <Grid container spacing={{ xs: 3, sm: 0 }} py={3}>
        {benefits.map((each) => (
          <Grid item xs={12} sm={4}>
            <Stack spacing={2} alignItems="center">
              <Stack bgcolor={each.bg} borderRadius={3} p={2}>
                <img src={each.src} height={35} width={35} />
              </Stack>
              <Typography variant="h6" fontWeight="bold">
                {each.title}
              </Typography>
              <Typography variant="subtitle1" align="center">
                {each.subtitle}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export default Benefits;
