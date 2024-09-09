import * as React from "react";

export default function LoadOverleafLatex(text: string) {
    return (
        <div>
            <iframe src={text} width="100%" height="1000"/>
        </div>
    );
}
