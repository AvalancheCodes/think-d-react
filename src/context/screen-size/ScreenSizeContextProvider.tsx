import React, { FC, useEffect } from "react";
import ScreenSizeContext, {
  IScreenSizeContext,
  Breakpoint,
} from "./ScreenSizeContext";

interface IScreenSizeContextProviderProps {
  children: React.ReactNode;
}
const ScreenSizeContextProvider: FC<IScreenSizeContextProviderProps> = ({
  children,
}) => {
  const [screenSize, setScreenSize] = React.useState<IScreenSizeContext>({
    breakpoint: Breakpoint.xs,
  });

  let contextValue: IScreenSizeContext = {
    breakpoint: screenSize.breakpoint,
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let breakpoint: Breakpoint;
      if (width < 576) {
        breakpoint = Breakpoint.xs;
      } else if (width < 768) {
        breakpoint = Breakpoint.sm;
      } else if (width < 992) {
        breakpoint = Breakpoint.md;
      } else if (width < 1200) {
        breakpoint = Breakpoint.lg;
      } else {
        breakpoint = Breakpoint.xl;
      }
      setScreenSize({ breakpoint });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ScreenSizeContext.Provider value={contextValue}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export default ScreenSizeContextProvider;
