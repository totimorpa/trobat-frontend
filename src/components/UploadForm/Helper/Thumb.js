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
        borderRadius: 10,
        maxWidth: `${
          variant === "small" ? "100px" : matchWidthBigScreen ? "400px" : "70%"
        }`,
        minWidth: `${
          variant === "small" ? "100px" : matchWidthBigScreen ? "175px" : "75px"
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
