import { ArrowForward } from "@mui/icons-material";
import {
  Grid,
  Stack,
  Typography,
  Box,
  Divider,
  Button,
  Hidden,
} from "@mui/material";
import React from "react";

function Testimonials() {
  return (
    <Stack
      spacing={2}
      py={7}
      color="#07484A"
      alignItems="center"
      px={{ xs: 2, sm: 3, md: 5 }}
    >
      <Typography variant="h4">Testimonials</Typography>
      <Typography variant="subtitle1">Over 15,000 happy customers.</Typography>
      <Grid container spacing={{ xs: 2, md: 0 }} py={3}>
        <Grid item xs={12} sm={8} md={4}>
          <Box width="100%" height={300}>
            <img
              src="/images/girl.svg"
              width="100%"
              height="100%"
              style={{ objectFit: "cover", borderRadius: 10 }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={8}>
          <Stack width={{ md: "80%" }} mt={{ md: 5 }} pl={{ md: 2 }}>
            <Typography variant="subtitle2">
              “My experience with Mark is a complete sucess, from customer
              service, wide range of products, clean store, purchasing
              experience, the newsletter.Thank you.”
            </Typography>
            <Typography fontWeight="bold" mt={3}>
              Leona Paul
            </Typography>
            <Typography variant="subtitle1">CEO of Floatcom</Typography>
          </Stack>
        </Grid>
      </Grid>
      <Box display="flex" alignItems="center" width="100%">
        <Divider
          sx={{
            bgcolor: "#07484A",
            height: 3,
            width: { xs: "100%", sm: "80%" },
          }}
        />
        <Hidden smDown>
          <Button
            disableRipple
            endIcon={<ArrowForward />}
            sx={{
              ml: { sm: 1, md: 3, lg: 7 },
              textTransform: "capitalize",
              color: "#07484A",
            }}
          >
            See all review
          </Button>
        </Hidden>
      </Box>
    </Stack>
  );
}

export default Testimonials;
