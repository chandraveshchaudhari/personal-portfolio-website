import * as React from "react";
import InfoPageGeneration from "../../Components/InfoPage";


export default function SummaryPageInfo() {
    return (
        <div>
            {InfoPageGeneration("Summary and Conclusion", "data/ThesisChapterData/RawTexFiles/temp_Conclusion.pdf")}
        </div>
    );
}