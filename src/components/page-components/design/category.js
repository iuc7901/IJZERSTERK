import {
  Box,
  Button,
  Grid,
  InputBase,
  Stack,
  Tabs,
  Tab,
  Typography,
  Avatar,
  Hidden,
  IconButton,
} from "@mui/material";
import { Search, ArrowForward, Menu } from "@mui/icons-material/";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";

function Category() {
  const desktop = useMediaQuery("(min-width:1200px)");

  const AntTabs = styled(Tabs)({
    "& .MuiTabs-indicator": {
      backgroundColor: "#07484A",
    },
  });

  const AntTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: "none",
      color: "#07484A",
      "&.Mui-selected": {
        color: "#07484A",
      },
    })
  );

  const [value, setValue] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const category = [
    {
      name: "Bed Room",
      src: "/images/category-1.svg",
    },
    {
      name: " Dinning Room",
      src: "/images/category-2.svg",
    },
    {
      name: " Meeting Room",
      src: "/images/category-3.svg",
    },
    {
      name: "Workspace",
      src: "/images/category-4.svg",
    },
    {
      name: "Living Room ",
      src: "/images/category-5.svg",
    },
    {
      name: " Room Kitchen",
      src: "/images/category-6.svg",
    },
  ];

  return (
    <Box py={4} px={{ xs: 1, sm: 5 }}>
      <Typography variant="h4" color="#07484A" align="center" mb={4}>
        Explore by Category
      </Typography>
      <Grid container spacing={{ xs: 4, lg: 0 }}>
        <Grid item xs={12} lg={3}>
          <Stack
            width="100%"
            direction={{ xs: "row", sm: "column" }}
            spacing={2}
            justifyContent={{ xs: "space-between" }}
            alignItems={{ xs: "center", md: "flex-start" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: 40,
                background: "#F0F0F0",
                borderRadius: 2,
              }}
            >
              <Search sx={{ color: "#6E757E", mx: 1 }} />
              <InputBase placeholder="Search" />
            </Box>

            <Hidden smUp>
              <IconButton>
                <Menu sx={{ color: "#07484A" }} />
              </IconButton>
            </Hidden>

            <Hidden smDown>
              <Box>
                <AntTabs
                  value={value}
                  onChange={handleChange}
                  orientation={desktop ? "vertical" : "horizontal"}
                >
                  <AntTab label="Bedroom" />
                  <AntTab label="Dinnig Room" />
                  <AntTab label="Meeting Room" />
                  <AntTab label="Work Space" />
                  <AntTab label="Living Room" />
                  <AntTab label="Room Kitchen" />
                  <AntTab label="Living Space" />
                </AntTabs>
              </Box>
            </Hidden>

            <Hidden smDown>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
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
                All Categories
              </Button>
            </Hidden>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={9}>
          <Grid container spacing={2} sx={{ width: "100%" }}>
            {category.map((each) => (
              <Grid item xs={12} sm={6}>
                <Box position="relative">
                  {/* <img src={each.src} /> */}
                  <Avatar
                    variant="square"
                    src={each.src}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    sx={{
                      height: 200,
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: 3,
                    }}
                  />
                  {isHovered && (
                    <Stack
                      alignItems="center"
                      justifyContent="center"
                      spacing={3}
                      width="100%"
                      height="100%"
                      sx={{
                        background: "#173D4FB2",
                        borderRadius: 3,
                        position: "absolute",
                        //zIndex: 10,
                        top: 0,
                      }}
                    >
                      <Typography variant="h4" color="white">
                        {each.name}
                      </Typography>
                      <Button
                        variant="contained"
                        disableElevation
                        sx={{
                          textTransform: "capitalize",
                          px: 4,
                          background: "#E0EFF6",
                          color: "#07484A",
                          "&:hover": {
                            background: "#E0EFF6",
                            color: "#07484A",
                          },
                        }}
                      >
                        Explore
                      </Button>
                    </Stack>
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Category;
