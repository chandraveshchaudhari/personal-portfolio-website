import * as React from "react";
import InfoPageGeneration from "../../../Components/InfoPage";

export default function FeatureSelectionPageInfo() {
    return (
        <div>
            {InfoPageGeneration("Feature Importance", "data/paper/HybridImportance.pdf", "/featureImportance/info", "/featureImportance/jupyter" )}
        </div>
    );
}
