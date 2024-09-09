import * as React from "react";
import LoadJupyterNotebook from "../FileLoaders/EmbedJupyterNotebook";
import SiderMenu from "../sideMenu";


export default function JupyterNotebookPageGeneration(pageTitle: string, path: string,
                                           infoLink?: string | undefined,
                                           notebookLink?: string | undefined,
                                           githubLink?: string | undefined,
                                           documentationLink?: string | undefined,
                                                      height: string | number | undefined = 1100,
                                           width: string | number | undefined = 1070) {
    return (
        <div>
            <SiderMenu title={pageTitle} info={infoLink} notebook={notebookLink} github={githubLink} documentation={documentationLink}>
                <div>
                    {LoadJupyterNotebook(path, height, width)}

                </div>
            </SiderMenu>
        </div>
    );
}