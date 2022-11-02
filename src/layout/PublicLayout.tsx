import React, { ReactNode, FC, useEffect } from "react";
import Header from "../components/header";
import ScreenSizeContextProvider from "../context/screen-size/ScreenSizeContextProvider";
import ScreenSizeContext, {
  IScreenSizeContext,
} from "../context/screen-size/ScreenSizeContext";

interface IPublicLayoutProps {
  children: ReactNode;
}

const PublicLayout: FC<IPublicLayoutProps> = ({ children }) => {
  const screenSizeContext =
    React.useContext<IScreenSizeContext>(ScreenSizeContext);

  return (
    <ScreenSizeContextProvider>
      <Header />
      <main>{children}</main>
    </ScreenSizeContextProvider>
  );
};

export default PublicLayout;
