"use client";

import { BlurFilter } from "pixi.js";
import { Stage, Container, Sprite, Text, useTick } from "@pixi/react";
import { useMemo, useState } from "react";
import { useApp } from "@pixi/react";

export default function MyComponent() {
  const [key, setKey] = useState("");

  const handleDownKey = (e) => {
    setKey(e.key);
  };
  const handleUpKey = () => {
    setKey("");
  };
  return (
    <Stage
      width={1000}
      options={{ backgroundColor: 0x000000 }}
      renderOnComponentChange={true}
      onKeyDown={handleDownKey}
      onKeyUp={handleUpKey}
      tabIndex={0}
    >
      <Bunny letra={key} />
    </Stage>
  );
}

function Bunny({letra}) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useTick((delta) => {
    if (letra == "d") {
      setX(x + 1 * delta);
    }
    if (letra == "a") {
      console.log(letra)
      setX(x - 1 * delta);
    }
    if (letra == "w") {
      setY(y - 1 * delta)
    }
    if (letra == "s") {
      setY(y + 1 * delta)
    }
  });
  return (
    <Sprite
      image="https://pixijs.io/pixi-react/img/bunny.png"
      x={x}
      y={y}
      anchor={{ x: 0.5, y: 0.5 }}
      
    />
  );
}
