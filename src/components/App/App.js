import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import LandingNavigation from "../LandingNavigation/LandingNavigation";
import Navigation from "../Navigation/Navigation";

function App() {
    return (
        <div className="root">
            <div className="page root__page">
                <Switch>
                    <Route exact path="/">
                        <Header nav={<LandingNavigation/>}/>
                        <Main/>
                        <Footer/>
                    </Route>
                    <Route path="/movies">
                        <Header nav={<Navigation/>}/>
                        <Movies/>
                        <Footer/>
                    </Route>
                    <Route path="/saved-movies">
                        <Header nav={<Navigation/>}/>
                        <SavedMovies/>
                        <Footer/>
                    </Route>
                    <Route path="/profile">
                        <Header nav={<Navigation/>}/>
                        <Profile/>
                    </Route>
                    <Route path="/signin">
                        <Login/>
                    </Route>
                    <Route path="/signup">
                        <Register/>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;