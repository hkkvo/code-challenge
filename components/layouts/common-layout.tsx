import React, { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ILayoutProps } from "../../types/component";
import { Container } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
const CommonLayout: FC<ILayoutProps> = ({
  children,
  mode,
  setMode,
}: ILayoutProps) => {
  const changeMode = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Where in the world ?
          </Typography>

          <IconButton>
            {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          <Button
            color="inherit"
            sx={{ textTransform: "capitalize" }}
            onClick={changeMode}
          >
            <Typography>{mode} Mode</Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ marginTop: "24px" }}>{children}</Box>
    </Box>
  );
};

export default CommonLayout;
