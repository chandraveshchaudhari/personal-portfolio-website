import * as React from "react";
import InfoPageGeneration from "../../../Components/InfoPage";


export default function ResultPageInfo() {
    return (
        <div>
            {InfoPageGeneration("Results", "data/ThesisChapterData/RawTexFiles/temp_Results.pdf")}
        </div>
    );
}