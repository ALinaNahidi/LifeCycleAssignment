import { Box, CardMedia } from "@mui/material";
import React from "react";
import * as images from "../../utils/constants";
import "./style.css";


interface ImageByAgeProps {
  gender?: string;
  age: number;
}

const getByAge = (age: number, gender: any) => {
  if (age <= 12) {
    if (gender) {
      if (gender === "male") return images.childMale;
      return images.childFemale;
    }
  } else if (age > 12 && age <= 21) {
    if (gender) {
      if (gender === "male") return images.teenMale;
      return images.teenFemale;
    }
  } else if (age > 21 && age <= 50) {
    if (gender) {
      if (gender === "male") return images.MiddleAgeMale;
      return images.MiddleAgeFemale;
    }
  } else {
    if (gender) {
      if (gender === "male") return images.OldAgeMale;
      return images.OldAgeFemale;
    }
  }
};

export default function ImageByAge(props: ImageByAgeProps) {
  const { age, gender = "male" } = props;

  return (
    <CardMedia
      className="image"
      component="img"
      sx={{ width: "300px", height: "300px" }}
      src={require("../../assets/images/" + getByAge(age, gender))}
    />
  );
}
