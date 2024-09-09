
import * as React from "react";
import InfoPageGeneration from "../../../Components/InfoPage";


export default function MethodologyPageInfo(text: string) {
    return (
        <div>
            {InfoPageGeneration("Research Methodology", "data/ThesisChapterData/RawTexFiles/temp_Methodology.pdf")}
        </div>
    );
}