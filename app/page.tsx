"use client";

import Map from "@/components/Map/Map";
import Popover from "@/components/Popover/Popover";
import { data } from "@/data/data";
import { useState } from "react";

export default function Home() {
  const [cityData, setCityData] = useState([{ place: "", date: "" }]);

  const onMouseOver = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.tagName === "path") {
      const parent = target.parentNode as HTMLElement;
      const id = parent.getAttribute("id");
      if (id && id in data) {
        setCityData(data[id as keyof typeof data]);
      }
    }

    const info = document.getElementById("custom-popover");
    if (
      event &&
      info &&
      event.target &&
      (event.target as HTMLElement).tagName === "path"
    ) {
      info.style.display = "block";
    }
  };

  const onMouseMove = (event: MouseEvent) => {
    const info = document.getElementById("custom-popover");
    if (info) {
      info.style.top = event.pageY + 25 + "px";
      info.style.left = event.pageX + "px";
    }
  };

  const onMouseLeave = (event: MouseEvent) => {
    const info = document.getElementById("custom-popover");
    if (info) {
      info.style.display = "none";
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full h-full max-w-4xl max-h-96">
        <div id="custom-popover" className="absolute z-50 hidden">
          <Popover data={cityData} />
        </div>
        <Map
          handleMouseOver={onMouseOver}
          handleMouseMove={onMouseMove}
          handleMouseLeave={onMouseLeave}
        />
      </div>
    </div>
  );
}
