import { PaletteMode } from "@mui/material";
import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ICommonLayoutProps {
  children: ReactNode;
  mode: string;
  setMode: Dispatch<SetStateAction<PaletteMode>>;
}
