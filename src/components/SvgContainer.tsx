import React, { ReactNode, FC, useEffect } from "react";
import ScreenSizeContext, {
  IScreenSizeContext,
} from "../context/screen-size/ScreenSizeContext";

interface ISvgContainerProps {
  svg?: string;
  showSvg?: boolean;
  dimensions?: {
    width: number;
    height: number;
  };
  // children: ReactNode;
}

const defaultDimensions = {
  width: 500,
  height: 500,
};

const SvgContainer: FC<ISvgContainerProps> = ({ svg }) => {
  const [svgContainerDimensions, setSvgContainerDimensions] = React.useState(
    defaultDimensions as { width: number; height: number }
  );
  const [showSvg, setShowSvg] = React.useState(false);

  // Breakpoint context
  const breakpointContext =
    React.useContext<IScreenSizeContext>(ScreenSizeContext);

  useEffect(() => {
    const ww = window.innerWidth;
    if (
      breakpointContext.breakpoint === "xs" ||
      breakpointContext.breakpoint === "sm"
    ) {
      setSvgContainerDimensions({ width: ww, height: ww });
      setShowSvg(false);
    } else {
      setSvgContainerDimensions(defaultDimensions);
      setShowSvg(true);
    }
  }, [breakpointContext]);

  return (
    <div
      className="svg-container"
      style={{
        width: svgContainerDimensions?.width,
        height: svgContainerDimensions?.height,
      }}
    >
      {showSvg && <img src={svg} alt="logo" />}
    </div>
  );
};

export default SvgContainer;
