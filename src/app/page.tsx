"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState<string>("");
  const [] = useState<{
    results: string[];
    duration: number;
  }>();

  return (
    <div>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type="text"
      />
    </div>
  );
}
