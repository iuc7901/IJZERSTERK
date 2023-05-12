import { Box, Button, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";

function Main() {
  const desktop = useMediaQuery("(min-width:1200px)");
  const laptop = useMediaQuery("(min-width:1024px) and (max-width:1199px)");
  const tablet = useMediaQuery("(min-width:768px) and (max-width:1023px)");
  const mobile = useMediaQuery("(min-width:0px) and (max-width:425px) ");

  return (
    <Box position={"relative"}>
      {desktop && <img src="/images/main-desktop.svg" width={"100%"} />}
      {laptop && <img src="/images/main-laptop.svg" width={"100%"} />}
      {tablet && (
        <img
          src="/images/main-tablet.svg"
          width={"100%"}
          //   height={700}
          //   style={{ objectFit: "cover" }}
        />
      )}
      {mobile && <img src="/images/main-mobile.svg" width={"100%"} />}
      <Box
        sx={{
          width: { sm: "70%" },
          position: "absolute",
          top: { xs: 20, sm: "30%" },
          left: 10,
          zIndex: 10,
          textAlign: { xs: "center", sm: "left" },
          color: "#07484A",
        }}
      >
        <Typography variant="h2">
          Exclusive Deals of Furniture Collection
        </Typography>
        <Typography variant="h6" mt={2}>
          Explore different categories. Find the best deals.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            px: 5,
            mt: 3,
            bgcolor: "#70908B",
            textTransform: "capitalize",
            ":hover": {
              bgcolor: "#70908B",
            },
          }}
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
}

export default Main;
