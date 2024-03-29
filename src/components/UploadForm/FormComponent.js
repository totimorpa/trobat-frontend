import { useEffect, useState } from "react";
import {
  Stepper,
  Step,
  Button,
  Typography,
  Box,
  StepButton,
  Modal,
  CircularProgress,
} from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import IntroStep from "./Forms/IntroStep";
import InfoStep from "./Forms/InfoStep";
import LlocStep from "./Forms/LlocStep";
import ImageStep from "./Forms/ImageStep";
import DateStep from "./Forms/DateStep";
import DetailInfoStep from "./Forms/DetailInfoStep";
import ResumStep from "./Forms/ResumStep";
import InfoRecollidaStep from "./Forms/InfoRecollidaStep";
import { postLostObject } from "../services/message.service";
import { useNavigate } from "react-router-dom";
import uploadFileToBlob from "../services/uploadfileToBlob";

const sasToken = process.env.REACT_APP_STORAGESASTOKEN;
const storageAccountName = process.env.REACT_APP_STORAGERESOURCENAME;

function getSteps() {
  return ["Foto", "Info", "Info Detall", "Data", "Lloc", "Recollida", "Resum"];
}

function getStepContent(
  step,
  formData,
  handleChange,
  handleChangeImage,
  handleDateChange
) {
  switch (step) {
    case 0:
      return <ImageStep formData={formData} onChange={handleChangeImage} />;
    case 1:
      return <InfoStep formData={formData} onChange={handleChange} />;
    case 2:
      return <DetailInfoStep formData={formData} onChange={handleChange} />;
    case 3:
      return <DateStep formData={formData} onChange={handleDateChange} />;
    case 4:
      return <LlocStep formData={formData} onChange={handleChange} />;
    case 5:
      return <InfoRecollidaStep formData={formData} onChange={handleChange} />;
    case 6:
      return <ResumStep formData={formData} />;
    default:
      return <IntroStep />;
  }
}
const FormComponent = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();
  const [activeStep, setActiveStep] = useState(-1);
  const [completed, setCompleted] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });
  const [message, setMessage] = useState([]);
  const [uploading, setUploading] = useState(false);

  const steps = getSteps();

  const [formData, setFormData] = useState({});

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    navigate("/", { replace: true });
  };

  useEffect(() => {
    if (
      formData.hasOwnProperty("title") &&
      formData.hasOwnProperty("categories")
    ) {
      setCompleted((prevState) => ({
        ...prevState,
        1: true,
      }));
    }
    if (formData.hasOwnProperty("detailInfo")) {
      setCompleted((prevState) => ({
        ...prevState,
        2: true,
      }));
    }
    if (formData.hasOwnProperty("lloc")) {
      setCompleted((prevState) => ({
        ...prevState,
        4: true,
      }));
    }
    if (
      formData.hasOwnProperty("telefon") &&
      formData.hasOwnProperty("recollida")
    ) {
      setCompleted((prevState) => ({
        ...prevState,
        5: true,
      }));
    }
  }, [activeStep]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleChangeImage = (file) => {
    setFormData((prevState) => ({
      ...prevState,
      image: {
        file,
      },
    }));
    setCompleted((prevState) => ({
      ...prevState,
      0: true,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevState) => ({
      ...prevState,
      date,
    }));
    setCompleted((prevState) => ({
      ...prevState,
      3: true,
    }));
  };

  const allStepsCompleted = (completed) => {
    for (let value of Object.values(completed)) {
      if (!value) {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = () => {
    setUploading(true);

    const uploadObject = async () => {
      const blobURL = await uploadFileToBlob(formData.image.file);

      console.log(blobURL);

      const { data, error } = await postLostObject(user, formData, blobURL);
      if (data) {
        setMessage(data);
        setUploading(false);
      }
      if (error) {
        setMessage(JSON.stringify(error, null, 2));
      }
    };
    // console.log(formData);
    // console.log(message);
    handleOpen();
    uploadObject();
  };

  const handleNext = () => {
    if (activeStep < 6) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      if (allStepsCompleted(completed)) {
        handleSubmit();
      } else {
        alert("Si us plau, omple tots els camps");
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      {activeStep >= 0 && (
        <Stepper nonLinear activeStep={activeStep} alternativeLabel>
          {steps.slice().map((label) => (
            <Step key={label} completed={completed[steps.indexOf(label)]}>
              <StepButton
                onClick={() => setActiveStep(steps.indexOf(label))}
              ></StepButton>
            </Step>
          ))}
        </Stepper>
      )}

      <div>
        <Typography>
          {getStepContent(
            activeStep,
            formData,
            handleChange,
            handleChangeImage,
            handleDateChange
          )}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          {activeStep >= 0 && <Button onClick={handleBack}>Enrere</Button>}

          <Button variant="contained" color="primary" onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Penjar" : "Següent"}
          </Button>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            {!uploading && (
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
                  Gràcies per penjar un objecte, el propietari segur que n'està
                  agraït! 🙏🏽 🫶🏼
                </Typography>
              </Box>
            )}
            {uploading && (
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <CircularProgress />
              </Box>
            )}
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default FormComponent;
