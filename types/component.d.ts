import { PaletteMode } from "@mui/material";
import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ILayoutProps {
  children: ReactNode;
  mode: string;
  setMode: Dispatch<SetStateAction<PaletteMode>>;
}

export interface ICountry {
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subRegion: string;
  capital: string;
  topLevelDomain: string[];
  currencies: string[];
  languages: string[];
  borderCountries: string[];
  flags: { png: string; svg: string };
}
