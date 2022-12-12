import React from "react";
import { useMediaQuery } from "@mui/material/";
import { CircularProgress } from "@mui/material";

const Thumb = (props) => {
  const { file, src, variant = "normal" } = props;

  const matchWidthBigScreen = useMediaQuery("(min-width:900px)");
  if (!file || !src) {
    return null;
  }
  console.log(src.readyState);

  if (src.readyState < 2) {
    return <CircularProgress size={24} />;

    //    <p>Loading ... </p>;
  }

  return (
    <img
      src={src.result}
      alt={file.name}
      style={{
        maxWidth: `${
          variant === "small" ? "50px" : matchWidthBigScreen ? "200px" : "90px"
        }`,
        minWidth: `${
          variant === "small" ? "50px" : matchWidthBigScreen ? "175px" : "75px"
        }}`,
        padding: `${variant === "small" ? "1px" : "2px"}`,
        backgroundColor: "gray",
        marginLeft: `${variant === "small" ? "0px" : "20px"}`,
        maxHeight: 1000,
      }}
    />
  );
};

export default Thumb;
