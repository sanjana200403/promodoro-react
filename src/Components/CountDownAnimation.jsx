import React from "react";
import { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { SettingsContext } from "../Context/SettingContext";

const CountdownAnimation = ({ key, timer, animate, children }) => {
  const {  stopAnimate} = useContext(SettingsContext);

  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={timer * 60}
    //   colors={[
    //     ["#FE6F6B", 0.33],
    //     ["#FE6F6B", 0.33],
    //     ["#FE6F6B", 0.33],
    //   ]}
      colors="#A30000"
      strokeWidth={6}
      size={220}
      trailColor="#151932"
      onComplete={() => {
        stopAnimate();
      }}
    >
      {children}
    </CountdownCircleTimer>
  );
};

export default CountdownAnimation;
