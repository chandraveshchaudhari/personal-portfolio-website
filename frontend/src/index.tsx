import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import * as React from 'react';
import {ApolloProvider} from 'react-apollo';
import * as ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
// import App from './App';
import MyApp from "./App";
import './index.css';
import registerServiceWorker from './registerServiceWorker';


const httpLink = createHttpLink({
    uri: 'http://localhost:8000/graphql/',
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
});

ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <MyApp/>
        </ApolloProvider>
    </BrowserRouter>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
