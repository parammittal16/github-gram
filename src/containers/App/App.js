import React from 'react';
import {
    Switch,
    Route,
    Redirect,
    BrowserRouter,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import Dashboard from 'AppContainers/Dashboard/dashboard';
import Login from 'AppContainers/Login/login';
import Logout from 'AppContainers/Logout/logout';
import Navbar from 'AppShared/Navbar/navbar';
import NotFound from 'AppContainers/NotFound/notfound';
import { checkAuth } from 'AppShared/utility';


const App = () => {
    const isAuthenticated = useSelector(() => checkAuth());
    return (
        <BrowserRouter>
            {isAuthenticated ? <Navbar /> : null}
            {isAuthenticated ? (
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/users/:user" component={Dashboard} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/404" component={NotFound} />
                    <Redirect to="/404" />
                </Switch>
            )
                : (
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path="/404" component={NotFound} />
                        <Redirect to="/404" />
                    </Switch>
                )}
        </BrowserRouter>
    );
};

// App.propTypes = {
//     isAuthenticated: PropTypes.bool.isRequired,
// };

// const mapStateToProps = () => ({
//     isAuthenticated: checkAuth(),
// });

export default App;
