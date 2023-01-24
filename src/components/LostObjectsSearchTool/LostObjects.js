import {
  Grid,
  Typography,
  Modal,
  useMediaQuery,
  Divider,
  IconButton,
  Box,
  LinearProgress,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getLostObjects } from "../services/message.service";
import "../Cards.css";
import CloseIcon from "@mui/icons-material/Close";

const LostObjects = (props) => {
  const [open, setOpen] = useState(false);
  const [selectedObject, setSelectedObject] = useState({});
  const [isMounted, setIsMounted] = useState(true);

  const handleOpen = (objecte) => {
    setSelectedObject(objecte);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [message, setMessage] = useState([]);

  useEffect(() => {
    setIsMounted(false);
    const getMessage = async () => {
      const { data, error } = await getLostObjects();
      if (!isMounted) {
        return;
      }
      if (data) {
        setIsMounted(true);
        setMessage(data);
      }
      if (error) {
        setMessage(JSON.stringify(error, null, 2));
      }
    };
    getMessage();
    return () => {};
  }, [props.searchQuery]);

  console.log(message[0]);

  return (
    <>
      <Box
        sx={{
          m: 1,
          p: 2,
          mb: 3,
          alignItems: "center",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "grey.50",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          borderRadius: 4,
          boxShadow: 24,
          fontSize: "1rem",
          fontWeight: "700",
          width: "80%",
        }}
      >
        {isMounted && (
          <Box sx={{ mt: 2 }}>
            <Grid
              container
              spacing={{ xs: 0.5, md: 0.5 }}
              columns={{ xs: 6, sm: 12, md: 20 }}
            >
              {message.map((lostObject) => (
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
                        <h4 className="cards__item__text">
                          {lostObject.title}
                        </h4>
                      </div>
                    </div>
                  </li>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
        {!isMounted && <LinearProgress />}
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
            width: "85%",
            bgcolor: "background.paper",
            borderRadius: 4,
            boxShadow: 24,
            p: 3,
            pt: 1,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
            }}
          >
            <Typography variant="h5" sx={{ flexGrow: 1, pt: 1, pb: 1 }}>
              {selectedObject.title}
            </Typography>

            <IconButton size="large" onClick={handleClose} sx={{ flexGrow: 0 }}>
              <CloseIcon sx={{ color: "#FF0000" }}></CloseIcon>
            </IconButton>
          </Box>

          <Divider></Divider>
          <Grid container spacing={2} columns={16} sx={{ mt: 3 }}>
            <Grid item sm={8}>
              <Box>
                <img
                  src={selectedObject.picture}
                  alt="img not found"
                  style={{
                    borderRadius: 10,
                    maxWidth: `${
                      useMediaQuery("(min-width:900px)") ? "400px" : "80%"
                    }`,
                    minWidth: `${
                      useMediaQuery("(min-width:900px)") ? "175px" : "75px"
                    }}`,
                    maxHeight: 1000,
                  }}
                />
              </Box>
            </Grid>
            <Grid item sm={8}>
              <Typography gutterBottom>
                <b>{"Categoria: "}</b>
                {selectedObject.categories &&
                  selectedObject.categories.charAt(0).toUpperCase() +
                    selectedObject.categories.slice(1)}
              </Typography>
              <Typography gutterBottom>
                <b>Info detall:</b>
                <br />
                {selectedObject.text &&
                  selectedObject.text.charAt(0).toUpperCase() +
                    selectedObject.text.slice(1)}
              </Typography>
              <Typography gutterBottom>
                <b>{"Data trobat: "}</b>
                {[
                  new Date(selectedObject.dateFound).getDate(),
                  (new Date(selectedObject.dateFound).getMonth() + 1)
                    .toString()
                    .padStart(2, "0"),
                  new Date(selectedObject.dateFound).getFullYear(),
                ].join("-")}
              </Typography>
              <Typography gutterBottom>
                <b>{"Lloc: "}</b>
                {selectedObject.lloc &&
                  selectedObject.lloc.charAt(0).toUpperCase() +
                    selectedObject.lloc.slice(1)}
              </Typography>
              <Typography gutterBottom>
                <b>{"Telèfon contacte: "}</b>
                {selectedObject.telefon}
              </Typography>
              <Typography gutterBottom>
                <b>{"Lloc d'emmagatzematge: "}</b>
                {selectedObject.recollida &&
                  selectedObject.recollida.charAt(0).toUpperCase() +
                    selectedObject.recollida.slice(1)}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default LostObjects;
