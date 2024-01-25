import { For, ParentProps } from "solid-js";

type PageContentProps = {
  menu: any[];
  footer: any[];
};

export default function PageContent(props: ParentProps<PageContentProps>) {
  return (
    <>
      <h1>Menu</h1>
      <ul>
        <For each={props.menu}>{(item) => <li>{item.title}</li>}</For>
      </ul>

      {props.children}

      <h1>Footer</h1>
      <For each={props.footer}>{(item) => <li>{item.title}</li>}</For>
    </>
  );
}
