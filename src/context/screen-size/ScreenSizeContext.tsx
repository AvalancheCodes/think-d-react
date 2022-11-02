import { createContext } from "react";

//Breakpoint enum
export enum Breakpoint {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export interface IScreenSizeContext {
  breakpoint: Breakpoint;
}

const ScreenSizeContext = createContext<IScreenSizeContext>(null!);

export default ScreenSizeContext;
