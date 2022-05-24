import React from 'react';
import './styles/index.scss';
import { Layout } from './Components/Layout/Layout';
import { Resume, AboutWebsite } from './Pages';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import Prism from 'prismjs';
Prism.manual = true;

export const App = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path='/' exact>
                        <Resume />
                    </Route>
                    <Route path='/aboutWebsite' exact>
                        <AboutWebsite />
                    </Route>

                    <Route path='*'>
                        <Redirect />
                    </Route>
                </Switch>
            </Layout>
        </Router>
    );
};

const Redirect = () => {
    const history = useHistory();

    useEffect(() => {
        history.push('/');
    }, [history]);

    return null;
};
