import { ArrowForward } from "@mui/icons-material";
import { Avatar, Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";

function Products() {
  const chairs = [
    {
      src: "/images/chair-1.svg",
      name: "Armchair",
      type: "Light single chair",
      price: "$145",
      bg: "#CAF3E5",
    },
    {
      src: "/images/chair-2.svg",
      name: "Premium Sofa",
      type: "Light single chair",
      price: "$145",
      bg: "#E0EFF6",
    },
    {
      src: "/images/chair-3.svg",
      name: "Minimal Sofa",
      type: "Light single chair",
      price: "$145",
      bg: "#EEEBFF",
    },
    {
      src: "/images/chair-4.svg",
      name: "Dining Chair",
      type: "Light single chair",
      price: "$145",
      bg: "#FFF4E7",
    },
  ];
  return (
    <Box>
      <Typography variant="h4" color="#07484A" align="center">
        Popular Products
      </Typography>
      <Box position="relative">
        <Avatar
          variant="square"
          src="/images/half-chair.svg"
          sx={{
            height: { xs: 450, sm: 500, md: 600 },
            width: { xs: 200, sm: 250, md: 300 },
          }}
        />
        {/* <img
          src="/images/half-chair.svg"
          height={450}
          style={{ height: { xs: 450, sm: 500, md: 600 } }}
        /> */}
        <Stack
          direction="row"
          spacing={2}
          sx={{
            position: "absolute",
            top: { xs: "5%", sm: "10%" },
            left: { xs: 40, sm: 60, md: 80 },
            width: "calc(100% - 80px)",
            overflowX: "scroll",
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {chairs.map((each) => (
            <Stack
              justifyContent="center"
              bgcolor={each.bg}
              borderRadius={3}
              width={300}
              height={350}
            >
              <Stack alignItems="center">
                <img src={each.src} height={200} width={200} />
              </Stack>
              <Stack spacing={1} px={3} mt={2}>
                <Typography color="#70908B">{each.name}</Typography>
                <Typography variant="caption" color="#70908B">
                  {each.type}
                </Typography>
                <Typography color="#70908B">{each.price}</Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
        <Stack
          alignItems="center"
          spacing={5}
          width="100%"
          sx={{
            position: { sm: "absolute" },
            top: { sm: "85%", md: "75%" },
          }}
        >
          <Divider width="95%" sx={{ bgcolor: "#07484A", height: 3 }} />
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
            sx={{
              width: 250,
              bgcolor: "#70908B",
              textTransform: "capitalize",
              ":hover": {
                bgcolor: "#70908B",
              },
            }}
          >
            Explore all items
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default Products;
