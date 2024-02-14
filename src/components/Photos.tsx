import { For } from "solid-js";
import { MiniCounter } from "~/components/Counter";
import { createAsync } from "@solidjs/router";
import { fetchStuffWithDelay } from "~/lib/api";

export function Photos() {
  const photos = createAsync(() => fetchStuffWithDelay("photos", 6000), {
    name: "photos",
    deferStream: false,
  });

  return (
    <>
      <h2>Photos</h2>
      <ul>
        <For each={photos()}>
          {(photo) => (
            <li>
              <a href={photo.url} id={`photo-${photo.id}`}>
                {photo.title}
              </a>
              &nbsp;
              <MiniCounter label={`Photo ${photo.id}`} />
            </li>
          )}
        </For>
      </ul>
    </>
  );
}
