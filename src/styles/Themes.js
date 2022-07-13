// images
import DesktopLightImage from "../assets/images/bg-desktop-light.jpg";
import DesktopDarkImage from "../assets/images/bg-desktop-dark.jpg";
import MobileLightImage from "../assets/images/bg-mobile-light.jpg";
import MobileDarkImage from "../assets/images/bg-mobile-dark.jpg";

export const darkTheme = {
  desktopBg: DesktopDarkImage,
  mobileBg: MobileDarkImage,

  text: "hsl(236, 33%, 92%)",
  hoverText: "hsl(234, 39%, 85%)",
  subText: "hsl(234, 11%, 52%)",
  background: "hsl(235, 21%, 11%)",
  formBackground: "hsl(237, 14%, 26%)",
  accent: "hsl(220, 98%, 61%)",
  gradient: "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
};

export const lightTheme = {
  desktopBg: DesktopLightImage,
  mobileBg: MobileLightImage,

  text: "hsl(236, 9%, 61%)",
  hoverText: "hsl(235, 19%, 35%)",
  subText: "hsl(233, 11%, 84%)",
  background: "hsl(236, 33%, 92%)",
  formBackground: "hsl(0, 0%, 98%)",
  accent: "hsl(220, 98%, 61%)",
  gradient: "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
};
