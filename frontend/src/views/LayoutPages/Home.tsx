import * as React from "react";
import InfoPageGeneration from "../../Components/InfoPage";

export default function HomePage() {
    return (
        <div>
            {InfoPageGeneration("Thesis Structure", "data/diagramhtml/wire_frame.drawio.html")}
        </div>
    );
}