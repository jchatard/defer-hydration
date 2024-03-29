import { Title } from "@solidjs/meta";
import Counter, { MiniCounter } from "~/components/Counter";
import { createAsync } from "@solidjs/router";
import { For, Show, Suspense } from "solid-js";
import { fetchStuffWithDelay } from "~/lib/api";
import { Photos } from "~/components/Photos";

export default function Home() {
  const posts = createAsync(() => fetchStuffWithDelay("posts", 400), {
    name: "posts",
    deferStream: true,
  });

  const comments = createAsync(() => fetchStuffWithDelay("comments", 500), {
    name: "comments",
    deferStream: true,
  });

  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Suspense>
        <Show when={posts() && comments()}>
          <Counter />

          <h2>Posts</h2>
          <ul>
            <For each={posts()}>
              {(post) => (
                <li>
                  <a href={post.url} id={`post-${post.id}`}>
                    {post.title}
                  </a>
                  &nbsp;
                  <MiniCounter label={`Post ${post.id}`} />
                </li>
              )}
            </For>
          </ul>

          <h2>Comments</h2>
          <ul>
            <For each={comments()}>
              {(comment) => (
                <li>
                  <a href={comment.url} id={`post-${comment.id}`}>
                    {comment.title}
                  </a>
                  &nbsp;
                  <MiniCounter label={`Comment ${comment.id}`} />
                </li>
              )}
            </For>
          </ul>

          <Suspense>
            <Photos />
          </Suspense>
        </Show>
      </Suspense>
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
