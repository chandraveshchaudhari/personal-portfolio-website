import * as React from 'react';
// import { Route, Switch} from 'react-router-dom'
// import Header from './Components/Header'

// import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import Notes from "./views/Notes";
// import Introduction from "./views/LayoutPages/IntroductionPage";
// import NestingExample from './views/LayoutPages/SamplePage'
// import Notes from './views/Notes';
// import SiderDemo from "./views/LayoutPages/HomePage";
// import Introduction from "./views/LayoutPages/IntroductionPage";
import MyRoutes from "./BrowserRoutes/PagesRoutes";

class MyApp extends React.Component {
    public render() {
        return (<MyRoutes/>
        )
    }
}

export default MyApp;
