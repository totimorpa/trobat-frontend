import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getLostObjects } from "../services/message.service";
import CardItem from "../UI/CardItem";

const LostObjects = () => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const getMessage = async () => {
      const { data, error } = await getLostObjects();
      if (!isMounted) {
        return;
      }
      if (data) {
        setMessage(data);
      }
      if (error) {
        setMessage(JSON.stringify(error, null, 2));
      }
    };
    getMessage();
    return () => {
      isMounted = false;
    };
  }, []);

  console.log(message[0]);

  return (
    <Box
      sx={{
        m: 1,
        p: 2,
        alignItems: "center",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "grey.50",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        borderRadius: 2,
        fontSize: "1rem",
        fontWeight: "700",
        width: "80%",
      }}
    >
      <Grid
        container
        spacing={{ xs: 0.5, md: 0.5 }}
        columns={{ xs: 6, sm: 16, md: 20 }}
      >
        {[...message, ...message, ...message].map((lostObject) => (
          <Grid key={lostObject.id} item xs={3} sm={4} md={4}>
            <CardItem
              key={lostObject.id}
              text={lostObject.title}
              src={lostObject.picture}
              label={lostObject.categories}
            ></CardItem>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LostObjects;
