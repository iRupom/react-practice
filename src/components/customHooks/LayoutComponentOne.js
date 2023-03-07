import { useEffect, useState } from "react";
import useWindowWidth from "./useWindowWidth";

export default function LayoutComponentOne() {
  const onSmallScreen = useWindowWidth(760);

  return (
    <div>
      <h1>
        You are browsing on {onSmallScreen ? "small screen" : "large screen"}
      </h1>
    </div>
  );
}
