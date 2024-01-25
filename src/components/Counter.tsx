import { createSignal, For, Show, Suspense } from "solid-js";
import "./Counter.css";
import { createAsync } from "@solidjs/router";
import { fetchStuffWithDelay } from "~/lib/api";

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
  const items = createAsync(() => fetchStuffWithDelay("items", 400), {
    name: "items" + props.label,
    deferStream: true,
  });
  const [count, setCount] = createSignal(0);

  return (
    <>
      <button onClick={() => setCount(count() + 1)}>
        {props.label}: {count()}
      </button>

      <Suspense>
        <Show when={items()}>
          <ul>
            <For each={items()}>
              {(item) => (
                <li>
                  <a href={item.url} id={`item-${item.id}`}>
                    {item.title}
                  </a>
                </li>
              )}
            </For>
          </ul>
        </Show>
      </Suspense>
    </>
  );
}
