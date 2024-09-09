import * as React from "react";

import SiderMenu from "../../Components/sideMenu";
import Notes from "./index";


export default function NotesGraphQL(text: string) {
    return (
        <div>
            <SiderMenu title="Notes Using Graph QL">
                <Notes/>
            </SiderMenu>
        </div>
    );
}