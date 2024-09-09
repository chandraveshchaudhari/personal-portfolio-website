import * as React from "react";

export default function LoadJupyterNotebook(text: string, Height: string | number | undefined = 1500, Width: string | number | undefined = 1100) {
    return (
        <div>
            {/*text must start from PhDWork/ */}
            <iframe src={`http://localhost:8888/notebooks/${text}`} height={Height} width={Width} />
        </div>
    );
}
