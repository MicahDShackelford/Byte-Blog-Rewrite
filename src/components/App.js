import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
    const [Auth, SetAuth] = useState(true); // True = Authed | False = Unauth
    
    if(Auth) {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact>
                        {/* Home Path */}
                    </Route>
                    <Route path="/posts" exact>
                        {/* Lists the posts */}
                    </Route>
                    <Route path="/post/:postId" exact/>
                        {/* Displays a single post */}
                    <Route path="/posts/create" exact>
                        {/* Utilized for creating a post */}
                    </Route>
                    <Route>
                        {/* 404 path/unauth route */}
                    </Route>
                </Switch>
            </Router>
        )
    } else {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact>
                        {/* Home Path */}
                    </Route>
                    <Route path="/login" exact>
                        {/* Login Path */}
                    </Route>
                    <Route path="/register" exact>
                        {/* Login Path */}
                    </Route>
                    <Route>
                        {/* 404 path/unauth route */}
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App;