import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

const IntroStep = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Box sx={{ mb: 10, mt: 5 }}>
          <Typography
            style={{ width: "100%" }}
            variant="h4"
            color="textSecondary"
            align="center"
          >
            Segueix els passos per pujar un objecte
          </Typography>
        </Box>
      </Grid>
    </React.Fragment>
  );
};
export default IntroStep;
