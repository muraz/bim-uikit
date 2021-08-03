import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 160 26" {...props}>
      <image width="100%" height="38" href="/images/bim/logo.png" style={{marginTop: "-20"}}/>
    </Svg>
  );
};


export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
