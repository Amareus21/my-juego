"use client";

import { BlurFilter } from "pixi.js";
import {
  Stage,
  Container,
  AnimatedSprite,
  Sprite,
  Text,
  useTick,
} from "@pixi/react";
import { useEffect, useMemo, useState } from "react";
import { useApp } from "@pixi/react";
import Image from "next/image";

export default function MyComponent() {
  const [key, setKey] = useState("");
  const width = 1200;
  const height = 700;

  const handleDownKey = (e) => {
    setKey(e.key);
  };
  const handleUpKey = () => {
    setKey("");
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Stage
        width={width}
        height={height}
        renderOnComponentChange={true}
        onKeyDown={handleDownKey}
        onKeyUp={handleUpKey}
        tabIndex={0}
      >
        <Background width={width} height={height} />
        <Bunny letra={key} />
      </Stage>
    </div>
  );
}

function Background({ width, height }) {
  return (
    <Sprite
      image="\png\BG.png"
      width={width}
      height={height}
      x={0}
      y={0}
    ></Sprite>
  );
}

function Bunny({ letra }) {
  const papaNoelRun = [
    "/png/Run (1).png",
    "/png/Run (2).png",
    "/png/Run (3).png",
    "/png/Run (4).png",
    "/png/Run (5).png",
    "/png/Run (6).png",
    "/png/Run (7).png",
    "/png/Run (8).png",
    "/png/Run (9).png",
    "/png/Run (10).png",
    "/png/Run (11).png",
  ];

  const papaNoelIdle = [
    "/png/Idle (1).png",
    "/png/Idle (2).png",
    "/png/Idle (3).png",
    "/png/Idle (4).png",
    "/png/Idle (5).png",
    "/png/Idle (6).png",
    "/png/Idle (7).png",
    "/png/Idle (8).png",
    "/png/Idle (9).png",
    "/png/Idle (10).png",
    "/png/Idle (11).png",
    "/png/Idle (12).png",
    "/png/Idle (13).png",
    "/png/Idle (14).png",
    "/png/Idle (15).png",
    "/png/Idle (16).png",
  ];
  const [x, setX] = useState(70);
  const [y, setY] = useState(640);
  const [papaNoel, setPapaNoel] = useState(papaNoelIdle);

  useEffect(() => {

    if (letra == "d" || letra == "a") {
      setPapaNoel(papaNoelRun);
    } else if (letra == "") {
      setPapaNoel(papaNoelIdle);
    }
  }, [letra]);

  useTick((delta) => {
    if (letra == "d") {
      setX((x) => x + 2 * delta);
      // setPapaNoel(animationRun);
    }
    if (letra == "a") {
      setX((x) => x - 2 * delta);
      // setPapaNoel(animationRun);
    }

    if (letra == "w") {
      setY(y - 1 * delta);
    }
    if (letra == "s") {
      setY(y + 1 * delta);
    }
    if (letra == "") {
      // setPapaNoel(animationIdle);
    }
  });
  return (
    <Container position={[x, y]}>
      <AnimatedSprite
        key={papaNoel.length}
        images={papaNoel}
        isPlaying={true}
        initialFrame={0}
        animationSpeed={0.2}
        width={150}
        height={150}
        anchor={{ x: 0.5, y: 0.5 }}
      />    
    </Container>
  );
}
