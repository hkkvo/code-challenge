import React, { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ICommonLayoutProps } from "../../types/component";
import { Container } from "@mui/material";

const CommonLayout: FC<ICommonLayoutProps> = ({
  children,
  mode,
  setMode,
}: ICommonLayoutProps) => {
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
          <Button
            color="inherit"
            sx={{ textTransform: "capitalize" }}
            onClick={changeMode}
          >
            <Typography>{mode} Mode</Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
    </Box>
  );
};

export default CommonLayout;
