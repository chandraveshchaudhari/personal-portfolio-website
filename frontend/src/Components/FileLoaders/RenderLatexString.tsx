import 'katex/dist/katex.min.css'
import * as React from 'react';
import Latex from "react-latex-next";

const INITIAL_STRICT_FLAG = false;
const INITIAL_MACROS = {"\\f": "#1f(#2)"};
const INITIAL_INPUT = "shape $N \\times N$ matrix is used to evaluate a classification model’s performance.\n" +
    " \n" +
    "$$Specificity =  \\frac{TN}{TN+FP}$$\n" +
    "\n" +
    "Accuracy provides the aggregation of the true predicted values overall predictions. Precision "

export default function RenderLatex(Text = INITIAL_INPUT) {

    return (
        <div>
            <Latex strict={INITIAL_STRICT_FLAG} macros={INITIAL_MACROS}>
                {Text}
            </Latex>
        </div>
    );
}
