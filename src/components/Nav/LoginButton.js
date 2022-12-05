import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

const LoginButton = (param) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button sx={param.sx} onClick={() => loginWithRedirect()}>
      Log In
    </Button>
  );
};

export default LoginButton;
