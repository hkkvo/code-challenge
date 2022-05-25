import { NextPage } from "next";
import { ComponentType, ReactElement, ReactNode } from "react";
import { ICommonLayoutProps } from "./component";

export type Page<P = {}> = NextPage<P> & {
  // You can disable whichever you don't need
  getLayout?: (page: ReactElement) => ReactNode;
  layout?: ICommonLayoutProps;
};
