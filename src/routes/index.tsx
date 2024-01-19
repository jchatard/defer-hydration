import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";
import {fetchComments, fetchPhotos} from "~/lib/api";
import {createAsync, RouteDefinition} from "@solidjs/router";
import {For, Show} from "solid-js";

export const route = {
    load() {
        void fetchComments();
    },
} satisfies RouteDefinition;

export default function Home() {
    const comments = createAsync(() => fetchComments(), {
        name: "comments",
        deferStream: true, // FIXME: breaks hydration on page load
    });

  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Show when={comments()}>
          <Counter />
          <For each={comments()}>
              {(comment) => (
              <li>Comment: {comment.title}</li>
              )}
          </For>

      </Show>
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
