import * as React from "react";
import JupyterNotebookPageGeneration from "../../../Components/PageGenerators/JupyterNotebookPage";

export default function SentimentJupyter() {
    return (
        <div>
            {JupyterNotebookPageGeneration("Feature Importance", "PhDWork/JupyterProjects/IT-feature-subset-selection/feature%20subset%20selection%20and%20importance.ipynb",
                "/featureImportance/info", "/featureImportance/jupyter")}
        </div>
    );
}