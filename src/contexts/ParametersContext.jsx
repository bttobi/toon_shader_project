import { createContext, useState } from "react";

export const ParametersContext = createContext();

export const ParametersProvider = ({ children }) => {
  const [type, setType] = useState("");
  const [rotateSpeedX, setRotateSpeedX] = useState(0);
  const [rotateSpeedY, setRotateSpeedY] = useState(0);
  const [rotateSpeedZ, setRotateSpeedZ] = useState(0);
  const [enableToon, setEnableToon] = useState(false);
  const [materialColor, setMaterialColor] = useState("");
  const [materialTexture, setMaterialTexture] = useState("");
  const [spotLightColor, setSpotLightColor] = useState("");
  const [spotLightIntensity, setSpotLightIntensity] = useState(0);
  const [spotLightX, setSpotLightX] = useState(0);
  const [spotLightY, setSpotLightY] = useState(0);
  const [spotLightZ, setSpotLightZ] = useState(0);
  const [enableFog, setEnableFog] = useState(false);
  const [fogColor, setFogColor] = useState("");
  const [enableTransparency, setEnableTransparency] = useState(false);
  const [transparencyOpacity, setTransparencyOpacity] = useState(0);

  const setShape = (
    shape,
    rotateX,
    rotateY,
    rotateZ,
    toon,
    mcolor,
    mtexture,
    scolor,
    sintensity,
    sX,
    sY,
    sZ,
    fog,
    fcolor,
    transparency,
    topacity
  ) => {
    setType(shape);
    setRotateSpeedX(rotateX);
    setRotateSpeedY(rotateY);
    setRotateSpeedZ(rotateZ);
    setEnableToon(toon);
    setMaterialColor(mcolor);
    setMaterialTexture(mtexture);
    setSpotLightColor(scolor);
    setSpotLightIntensity(sintensity);
    setSpotLightX(sX);
    setSpotLightY(sY);
    setSpotLightZ(sZ);
    setEnableFog(fog);
    setFogColor(fcolor);
    setEnableTransparency(transparency);
    setTransparencyOpacity(topacity);
  };

  return (
    <ParametersContext.Provider
      value={{
        type,
        rotateSpeedX,
        rotateSpeedY,
        rotateSpeedZ,
        enableToon,
        materialColor,
        materialTexture,
        spotLightColor,
        spotLightIntensity,
        spotLightX,
        spotLightY,
        spotLightZ,
        enableFog,
        fogColor,
        enableTransparency,
        transparencyOpacity,
        setShape,
      }}
    >
      {children}
    </ParametersContext.Provider>
  );
};
