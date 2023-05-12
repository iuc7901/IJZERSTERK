import { AccountCircle, Menu, Search, ShoppingCart } from "@mui/icons-material";
import { Hidden, IconButton, Stack, Icon, Tabs, Tab } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useState } from "react";

function Navbar() {
  const CustomIcon = styled(Icon)(({ theme }) => ({
    color: "#07484A",
  }));

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
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.only("xs"));
  const bigscreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const desktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Stack
      width="100%"
      bgcolor="#F0F0F0"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      height={{ xs: 50, sm: 60 }}
      px={{ xs: 1, sm: 2 }}
    >
      <Hidden smUp>
        <IconButton>
          <CustomIcon>
            <Menu />
          </CustomIcon>
        </IconButton>
      </Hidden>
      <Hidden smUp>
        <img src="/images/inwood.svg" />
      </Hidden>

      <Hidden smDown>
        <img src="/images/inwood.svg" />
      </Hidden>
      <Hidden smDown>
        <Hidden lgUp>
          <IconButton>
            <CustomIcon>
              <Menu />
            </CustomIcon>
          </IconButton>
        </Hidden>
        <Hidden lgDown>
          <AntTabs value={value} onChange={handleChange}>
            <AntTab label="Home" />
            <AntTab label="Products" />
            <AntTab label="Categorie" />
            <AntTab label="About" />
            <AntTab label="Contact Us" />
          </AntTabs>
        </Hidden>
      </Hidden>

      <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 3 }}>
        <CustomIcon>
          <Search />
        </CustomIcon>
        <CustomIcon>
          <ShoppingCart />
        </CustomIcon>
        <CustomIcon>
          <AccountCircle />
        </CustomIcon>
      </Stack>
    </Stack>
  );
}

export default Navbar;
