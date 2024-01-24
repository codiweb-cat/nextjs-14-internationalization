'use client'

import { useState } from "react";
import { getLanguages } from "@/languages";

export default function Counter() {
  const language = getLanguages(lang)
  const [count, setCount] = useState(0);
  
  return (
    <section>
      <p>
        COUNTER 
      </p>
      <button onClick={() => setCount((n) => n + 1)}>
        {language.counter.increment}
      </button>
      {count}
    </section>
  );
}