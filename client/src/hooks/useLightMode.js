import React, { useEffect, useState } from "react";

const useLightMode = () => {
  const [lightMode, setLightMode] = useState();

  useEffect(() => {
    //let isToggled = e.target.classList.contains("toggled");
    if (lightMode) {
      document.body.classList.add("light-mode");
      // document.getElementById("form").classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
      // document.getElementById("form").classList.remove("light-mode");
    }
  }, [lightMode]);

  const switchMode = (e) => {
    setLightMode(!lightMode);
  };
  return [lightMode, switchMode];
};

export default useLightMode;
