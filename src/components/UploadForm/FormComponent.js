import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Box,
} from "@material-ui/core";

import IntroStep from "./Forms/IntroStep";
import InfoStep from "./Forms/InfoStep";
import LlocStep from "./Forms/LlocStep";
import ImageStep from "./Forms/ImageStep";
import DateStep from "./Forms/DateStep";
import DetailInfoStep from "./Forms/DetailInfoStep";
import ResumStep from "./Forms/ResumStep";
import InfoRecollidaStep from "./Forms/InfoRecollidaStep";

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
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const [formData, setFormData] = React.useState({});

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
  };

  const handleDateChange = (date) => {
    setFormData((prevState) => ({
      ...prevState,
      date,
    }));
  };

  const handleSubmit = () => {};

  const handleNext = () => {
    if (activeStep < 7) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel></StepLabel>
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
