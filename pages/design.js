import { Stack } from "@mui/material";
import React from "react";
import Benefits from "../src/components/page-components/design/benefits";
import Category from "../src/components/page-components/design/category";
import Creation from "../src/components/page-components/design/creation";
import Footer from "../src/components/page-components/design/footer";
import Navbar from "../src/components/page-components/design/navbar";
import Newsletter from "../src/components/page-components/design/newsletter";
import Products from "../src/components/page-components/design/products";
import Testimonials from "../src/components/page-components/design/testimonials";
import Main from "../src/components/page-components/main";

function Design() {
  return (
    <Stack>
      <Navbar />
      <Main />
      <Category />
      <Products />
      <Creation />
      <Benefits />
      <Testimonials />
      <Newsletter />
      <Footer />
    </Stack>
  );
}

export default Design;
