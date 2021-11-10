import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CurrentlyReadingPage from '../pages/CurrentlyReadingPage';
import WantToReadPage from '../pages/WantToReadPage';
import ReadsPage from '../pages/ReadsPage';
import SearchPage from '../pages/SearchPage';

export default function Routes() {
    return(
        <>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/currently_reading" component={CurrentlyReadingPage}/>
                <Route exact path="/want_to_read" component={WantToReadPage}/>
                <Route exact path="/reads" component={ReadsPage}/>
                <Route exact path="/search" component={SearchPage}/>
            </Switch>
        </>
    );
}
