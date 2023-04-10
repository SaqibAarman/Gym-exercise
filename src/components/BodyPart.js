import React from "react";
import { Stack, Typography } from "@mui/material";

import Icon from "../assets/icons/Gym.png";
import Chest from "../assets/icons/Chest.png";
import Back from "../assets/icons/Back1.png";
import Cardio from "../assets/icons/Cardio.png";
import LowerArms from "../assets/icons/Arm.png";
import LowerLegs from "../assets/icons/Leg.png";
import UpperArms from "../assets/icons/upper2.png";
import UpperLegs from "../assets/icons/upper leg.png";
import Neck from "../assets/icons/neck.png";
import Waist from "../assets/icons/waist.png";
import Shoulder from "../assets/icons/shoulder.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #FF2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);

        window.scrollTo({
          top: 1800,
          left: 100,
          behavior: "smooth",
        });
      }}
    >
      <img
        src={
          item === "chest"
            ? Chest
            : item === "back"
            ? Back
            : item === "cardio"
            ? Cardio
            : item === "lower arms"
            ? LowerArms
            : item === "lower legs"
            ? LowerLegs
            : item === "upper arms"
            ? UpperArms
            : item === "upper legs"
            ? UpperLegs
            : item === "neck"
            ? Neck
            : item === "waist"
            ? Waist
            : item === "shoulders"
            ? Shoulder
            : Icon
        }
        alt="Icon"
        style={{ width: "75px", height: "75px" }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
