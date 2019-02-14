
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import Header from './components/common/Header';
import CoursePage from './components/courses/CoursePage';



const Routes = () => (
    <Router>
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={Homepage}></Route>
                <Route path="/about" component={AboutPage}></Route>
                <Route path="/courses" component={CoursePage}></Route>
            </Switch>
        </div>
    </Router>
)

export default Routes;