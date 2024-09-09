import React from "react";

// <embed src="URL" type="text/html" />

export default function htmlIframe( Source: string, Height: string | number | undefined = 1500, Width: string | number | undefined = 1100) {

    return (
        <iframe src={Source} height={Height} width={Width} />
    );
}
