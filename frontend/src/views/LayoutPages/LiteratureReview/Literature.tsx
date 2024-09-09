import * as React from "react";
import InfoPageGeneration from "../../../Components/InfoPage";


export default function LiteraturePage() {
    return (
        <div>
            {InfoPageGeneration("Literature Review", "data/ThesisChapterData/RawTexFiles/temp_Literature.pdf")}
        </div>
    );
}