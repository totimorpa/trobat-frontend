import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const LogoutButton = (param) => {
  const { logout } = useAuth0();

  return (
    <Button
      sx={param.sx}
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Out
      <LogoutIcon sx={{ m: 1 }} />
    </Button>
  );
};

export default LogoutButton;
