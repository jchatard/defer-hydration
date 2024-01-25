import { createSignal } from "solid-js";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <button class="increment" onClick={() => setCount(count() + 1)}>
        Clicks: {count()}
      </button>
    </>
  );
}

export function MiniCounter(props: { label: string }) {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <button onClick={() => setCount(count() + 1)}>
        {props.label}: {count()}
      </button>
    </>
  );
}
