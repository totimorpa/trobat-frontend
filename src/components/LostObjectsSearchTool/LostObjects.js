import Box from "@mui/material/Box";
import { Grid, Typography, Modal, useMediaQuery, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import { getLostObjects } from "../services/message.service";
import "../Cards.css";

const LostObjects = () => {
  const [open, setOpen] = useState(false);
  const [selectedObject, setSelectedObject] = useState({});

  const handleOpen = (objecte) => {
    setSelectedObject(objecte);
    setOpen(true);
  };
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
                <div
                  className="cards__item__link"
                  onClick={() => handleOpen(lostObject)}
                >
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
                    <h4 className="cards__item__text">{lostObject.title}</h4>
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
        disableAutoFocus={true}
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
          <Typography gutterBottom variant="h5">
            {selectedObject.title}
          </Typography>
          <Divider></Divider>
          <Grid container spacing={2} columns={16} sx={{ m: 3 }}>
            <Grid item sm={8}>
              <Box>
                <img
                  src={selectedObject.picture}
                  alt="img not found"
                  style={{
                    borderRadius: 10,
                    maxWidth: `${
                      useMediaQuery("(min-width:900px)") ? "400px" : "70%"
                    }`,
                    minWidth: `${
                      useMediaQuery("(min-width:900px)") ? "175px" : "75px"
                    }}`,
                    padding: `${"2px"}`,
                    backgroundColor: "gray",
                    marginLeft: `${"20px"}`,
                    maxHeight: 1000,
                  }}
                />
              </Box>
            </Grid>
            <Grid item sm={8}>
              <Typography gutterBottom>
                <b>{"Categoria: "}</b>
                {selectedObject.categories}
              </Typography>
              <Typography gutterBottom>
                <b>Info detall:</b>
                <br />
                {selectedObject.text}
              </Typography>
              <Typography gutterBottom>
                <b>{"Data trobat: "}</b>
                {selectedObject.dateFound}
              </Typography>
              <Typography gutterBottom>
                <b>{"Lloc: "}</b>
                {selectedObject.lloc}
              </Typography>
              <Typography gutterBottom>
                <b>{"Telèfon contacte: "}</b>
                {selectedObject.telefon}
              </Typography>
              <Typography gutterBottom>
                <b>{"Lloc d'emmagatzematge: "}</b>
                {selectedObject.recollida}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        {/* <Box
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
          info de l'objecte:
          <br />
          <pre style={{ whiteSpace: "pre-wrap" }}>
            {JSON.stringify(selectedObject, null, 2)}
          </pre>
        </Box> */}
      </Modal>
    </>
  );
};

export default LostObjects;
