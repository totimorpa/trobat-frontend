import React, { useEffect } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Box,
  StepButton,
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

function getSteps() {
  return [
    "",
    "Foto",
    "Info",
    "Info Detall",
    "Data",
    "Lloc",
    "Recollida",
    "Resum",
  ];
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
      return <IntroStep />;
    case 1:
      return <ImageStep formData={formData} onChange={handleChangeImage} />;
    case 2:
      return <InfoStep formData={formData} onChange={handleChange} />;
    case 3:
      return <DetailInfoStep formData={formData} onChange={handleChange} />;
    case 4:
      return <DateStep formData={formData} onChange={handleDateChange} />;
    case 5:
      return <LlocStep formData={formData} onChange={handleChange} />;
    case 6:
      return <InfoRecollidaStep formData={formData} onChange={handleChange} />;
    case 7:
      return <ResumStep formData={formData} />;
    default:
      return <div>Not found</div>;
  }
}
const FormComponent = () => {
  const { user, isAuthenticated } = useAuth0();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({
    0: true,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });
  const [message, setMessage] = React.useState([]);

  const steps = getSteps();

  const [formData, setFormData] = React.useState({});

  useEffect(() => {
    if (
      formData.hasOwnProperty("title") &&
      formData.hasOwnProperty("categories")
    ) {
      setCompleted((prevState) => ({
        ...prevState,
        2: true,
      }));
    }
    if (formData.hasOwnProperty("detailInfo")) {
      setCompleted((prevState) => ({
        ...prevState,
        3: true,
      }));
    }
    if (formData.hasOwnProperty("lloc")) {
      setCompleted((prevState) => ({
        ...prevState,
        5: true,
      }));
    }
    if (
      formData.hasOwnProperty("telefon") &&
      formData.hasOwnProperty("recollida")
    ) {
      setCompleted((prevState) => ({
        ...prevState,
        6: true,
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
      1: true,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevState) => ({
      ...prevState,
      date,
    }));
    setCompleted((prevState) => ({
      ...prevState,
      4: true,
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
    const getMessage = async () => {
      const { data, error } = await postLostObject(user, formData);
      if (data) {
        setMessage(data);
      }
      if (error) {
        setMessage(JSON.stringify(error, null, 2));
      }
    };
    getMessage();

    console.log(message);
  };

  const handleNext = () => {
    if (activeStep < 7) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      if (allStepsCompleted(completed)) {
        handleSubmit();
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <Stepper nonLinear activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label} completed={completed[steps.indexOf(label)]}>
            <StepButton
              onClick={() => setActiveStep(steps.indexOf(label))}
            ></StepButton>
          </Step>
        ))}
      </Stepper>

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
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Enrere
          </Button>

          <Button variant="contained" color="primary" onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Pejar" : "Següent"}
          </Button>
        </Box>
        {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
      </div>
    </div>
  );
};

export default FormComponent;
