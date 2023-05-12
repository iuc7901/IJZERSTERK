import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

function CustomTabs({ value, handleChange, orientation }) {
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

  const [value, setValue] = useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AntTabs value={value} onChange={handleChange}>
      <AntTab label="" />
    </AntTabs>
  );
}

export default CustomTabs;
