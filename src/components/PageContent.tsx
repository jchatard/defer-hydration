import {For, ParentProps} from "solid-js";

type PageContentProps = {
    menuMain: any[];
    menuFooter: any[];
};

export default function PageContent(props: ParentProps<PageContentProps>) {

    const some_menu_items = props.menuMain.slice(0, 5);

    const some_menu_items_footer = props.menuFooter.slice(0, 5);
    return (<>

        <h1>Main menu</h1>
        <ul>
            <For each={some_menu_items}>
                {(item) => (

                    <li>{item.title}</li>
                )}
            </For>
        </ul>

        {props.children}
        <h1>Footer menu</h1>
        <For each={some_menu_items_footer}>
            {(item) => (

            <li>{item.title}</li>
            )}
        </For>
    </>)
}