import Box from "@mui/material/Box";
import { Grid, Typography, Modal } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLostObjects } from "../services/message.service";
import CardItem from "../UI/CardItem";
import "../Cards.css";

const LostObjects = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
    <>
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
              <li className="cards__item">
                <div className="cards__item__link" onClick={handleOpen}>
                  <figure
                    className={
                      lostObject.categories
                        ? "cards__item__pic-wrap"
                        : "cards__item__pic-wrap1"
                    }
                    data-category={lostObject.categories}
                  >
                    <img
                      className="cards__item__img"
                      alt=""
                      src={lostObject.picture}
                    />
                  </figure>
                  <div className="cards__item__info">
                    <h6 className="cards__item__text">{lostObject.title}</h6>
                  </div>
                </div>
              </li>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            bgcolor: "background.paper",
            borderRadius: 4,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h4" sx={{ m: "auto" }}>
            info de l'objecte
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default LostObjects;
