import { ParentProps, Show, Suspense } from "solid-js";
import { createAsync } from "@solidjs/router";
import PageContent from "~/components/PageContent";
import { fetchStuffWithDelay } from "~/lib/api";

export default function RootContexts(props: ParentProps) {
  const menu = createAsync(() => fetchStuffWithDelay("menu"), {
    name: "menu",
    deferStream: true,
  });

  const footer = createAsync(() => fetchStuffWithDelay("footer", 300), {
    name: "footer",
    deferStream: true,
  });

  return (
    <>
      <Suspense>
        <Show when={menu() && footer()}>
          <PageContent menu={menu()!} footer={footer()!}>
            {props.children}
          </PageContent>
        </Show>
      </Suspense>
    </>
  );
}
