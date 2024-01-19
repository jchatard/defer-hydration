import {ParentProps, Show} from "solid-js";
import {createAsync} from "@solidjs/router";
import {fetchMenuFooter, fetchMenuMain} from "~/lib/api";
import PageContent from "~/components/PageContent";

export default function RootContexts(props: ParentProps) {
    const menuMain = createAsync(() => fetchMenuMain(), {
        name: "menuMain",
        deferStream: true,
    });

    const menuFooter = createAsync(() => fetchMenuFooter(), {
        name: "menuFooter",
        deferStream: true,
    });

    return (
        <>
            <Show when={menuMain() && menuFooter()}>
                <PageContent menuMain={menuMain()} menuFooter={menuFooter()} >
                    {props.children}
                </PageContent>
            </Show>
        </>
    );
}