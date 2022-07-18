import React from 'react';
import {Route, Switch, useHistory} from 'react-router-dom';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Register from "../Register/Register";
import api from "../../utils/MainApi";
import * as Auf from "../../utils/Auf";
import ProtectedRoute from "../../utils/ProtectedRoute";
import ContentProfile from "../Content/ContentProfile";
import ContentMovies from "../Content/ContentMovies";
import ContentSavedMovies from "../Content/ContentSavedMovies";

function App() {
    const history = useHistory();
    const [isOpenMenu, setIsOpenMenu] = React.useState(false);
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState({});

    React.useEffect(() => {
        if (isLoggedIn) {
            api.getProfile()
                .then((result) => {
                    setCurrentUser(result.data)
                }).catch((err) => {
                console.log(err);
            })
        }

        if (localStorage.getItem('token')) {
            const token = localStorage.getItem('token');

            if (token) {
                Auf.getContent(token).then((res) => {
                    if (res) {
                        setIsLoggedIn(true);
                        history.push("/movies");
                    }
                }).catch((err) => console.log(err));
            }
        }
    }, [history, isLoggedIn]);

    function handleLogin(email, password) {
        Auf.authorize(email, password)
            .then(() => {
                    setIsLoggedIn(true);
                    history.push('/movies');
                }
            )
            .catch((err) => {
                console.log(err);
            });
    }

    function handleRegister(email, password, name) {
        Auf.register(email, password, name).then((res) => {
            if (res) {
                history.push('/signin');
            }
        }).catch((err) => console.log(err));
    }

    function handleProfile(name, email) {
        api.patchProfile(name, email).then((result) => {
            setCurrentUser(result.data)
        }).catch((err) => {
            console.log(err);
        })
    }

    function handleMenu() {
        setIsOpenMenu(true)
    }

    function closeMenu() {
        setIsOpenMenu(false)
    }

    return (
        <div className="root">
            <div className="page root__page">
                <Switch>
                    <Route path="/signin">
                        <Login onLogin={handleLogin}/>
                    </Route>
                    <Route path="/signup">
                        <Register onRegister={handleRegister}/>
                    </Route>
                    <Route exact path="/">
                        <Header isLoggedIn={isLoggedIn}
                                handleMenu={handleMenu}
                                isOpenMenu={isOpenMenu}
                                closeMenu={closeMenu}/>
                        <Main/>
                        <Footer/>
                    </Route>
                    <ProtectedRoute exact
                                    path="/profile"
                                    loggedIn={isLoggedIn}
                                    currentUser={currentUser}
                                    handleProfile={handleProfile}
                                    component={ContentProfile}
                                    handleMenu={handleMenu}
                                    isOpenMenu={isOpenMenu}
                                    closeMenu={closeMenu}/>
                    <ProtectedRoute exact
                                    path="/movies"
                                    loggedIn={isLoggedIn}
                                    currentUser={currentUser}
                                    component={ContentMovies}
                                    handleMenu={handleMenu}
                                    isOpenMenu={isOpenMenu}
                                    closeMenu={closeMenu}/>
                    <ProtectedRoute exact
                                    path="/saved-movies"
                                    loggedIn={isLoggedIn}
                                    currentUser={currentUser}
                                    component={ContentSavedMovies}
                                    handleMenu={handleMenu}
                                    isOpenMenu={isOpenMenu}
                                    closeMenu={closeMenu}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;