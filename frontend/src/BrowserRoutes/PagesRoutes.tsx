import * as React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoadJupyterNotebook from "../Components/FileLoaders/EmbedJupyterNotebook";
import LoadOverleafLatex from "../Components/FileLoaders/EmbedOverleafLatex";
import htmlIframe from "../Components/FileLoaders/HtmlIframe";
import RenderLatex from "../Components/FileLoaders/RenderLatexString";
import DjangoAxiosRequest from "../Components/ServerRequest";

import HomePage from "../views/LayoutPages/Home";
import IntroPage from "../views/LayoutPages/IntroductionPage";
import LiteraturePage from "../views/LayoutPages/LiteratureReview/Literature";
import FeatureSelectionPageInfo from "../views/LayoutPages/ResearchMethodology/FeatureSelectionPageInfo";

import FeatureSelectionJupyter from "../views/LayoutPages/ResearchMethodology/FeatureSelectionPageJupyter";
import ResultPageInfo from "../views/LayoutPages/Results/ResultPageInfo";

import MethodologyPageInfo from "../views/LayoutPages/Sentiment/SentimentAnalysisInfo";
import SentimentJupyter from "../views/LayoutPages/Sentiment/SentimentAnalysisJupyter";
import SummaryPageInfo from "../views/LayoutPages/Summary";
import NotesGraphQL from "../views/Notes/NotesGraph";





// https://stackoverflow.com/questions/33643107/read-and-write-a-text-file-in-typescript
// For reading a file from laptop

class MyRoutes extends React.Component {
    public render() {
        return (
            <Router>
                <Switch>
                    <Route exact={true} path="/" component={HomePage}/>

                    <Route exact={true} path="/components/djangoAxios" component={DjangoAxiosRequest}/>
                    <Route exact={true} path="/components/iframe" component={htmlIframe}/>
                    <Route exact={true} path="/components/jupyter" component={LoadJupyterNotebook}/>
                    <Route exact={true} path="/components/overleaf" component={LoadOverleafLatex}/>
                    <Route exact={true} path="/components/renderLatexString" component={RenderLatex}/>
                    <Route exact={true} path="/components/notesGraphql" component={NotesGraphQL}/>

                    <Route exact={true} path="/featureimportance" component={FeatureSelectionPageInfo}/>
                    <Route exact={true} path="/featureimportance/jupyter" component={FeatureSelectionJupyter}/>

                    <Route exact={true} path="/intro" component={IntroPage}/>
                    <Route exact={true} path="/literature" component={LiteraturePage}/>
                    <Route exact={true} path="/methodologyPageInfo" component={MethodologyPageInfo}/>
                    <Route exact={true} path="/results" component={ResultPageInfo}/>
                    <Route exact={true} path="/summary" component={SummaryPageInfo}/>

                    <Route exact={true} path="/sentiment/jupyter" component={SentimentJupyter}/>


                </Switch>
            </Router>
        )
    }
}

export default MyRoutes;