import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImg from "../assets/images/Banner.jpg";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>

      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> And Repeat
      </Typography>

      <Typography fontSize="22px" lineHeight="35px" marginBottom={4}>
        Check Out The Most Effective Exercises.
      </Typography>

      <Button
        variant="contained"
        color="error"
        href="#exercise"
        sx={{ backgroundColor: "#FF2625", padding: "15px" }}
      >
        Explore Exercise
      </Button>

      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
          opacity: "0.1",
          display: {
            lg: "block",
            xs: "none",
          },
        }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img src={HeroBannerImg} alt="Banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
