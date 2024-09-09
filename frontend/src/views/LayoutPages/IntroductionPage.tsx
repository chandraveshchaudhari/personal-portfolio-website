import * as React from "react";
import InfoPageGeneration from "../../Components/InfoPage";


export default function IntroPage() {
    return (
        <div>
            {InfoPageGeneration("Introduction", "data/ThesisChapterData/RawTexFiles/temp_Intro.pdf")}
        </div>
    );
}