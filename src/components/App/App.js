import React from 'react';
import {Redirect, Route, Switch, useHistory} from 'react-router-dom';
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
import apiMovies from "../../utils/MoviesApi";
import PageNotFound from "../PageNotFound/PageNotFound";

function App() {
    const history = useHistory();
    const [isOpenMenu, setIsOpenMenu] = React.useState(false);
    const [isLoggedIn, setIsLoggedIn] = React.useState(!!localStorage.getItem('token'));
    const [currentUser, setCurrentUser] = React.useState({});
    const [isOpenPopup, setIsOpenPopup] = React.useState(false);
    const [popupCaption, setPopupCaption] = React.useState('');
    const [savedCards, setSavedCards] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isReady, setIsReady] = React.useState(false);

    React.useEffect(() => {
        if (isLoggedIn) {
            api.getProfile()
                .then((result) => {
                    setCurrentUser(result.data)
                }).catch((err) => {
                    setPopupCaption(JSON.stringify(err.message));
                    handlePopup();
                    console.log(err)
                }
            )

            api.getMovies().then((res) => JSON.stringify(res.data))
                .then((res) => {
                    setSavedCards(JSON.parse(res));
                    setIsReady(true);
                }).catch((err) => {
                    setPopupCaption(JSON.stringify(err.message));
                    handlePopup();
                    console.log(err)
                }
            );
        }

        if (localStorage.getItem('token')) {
            const token = localStorage.getItem('token');

            if (token) {
                Auf.getContent(token).then((res) => {
                    if (res) {
                        setIsLoggedIn(true);
                    }
                }).catch((err) => {
                        setPopupCaption(JSON.stringify(err.message));
                        handlePopup();
                        console.log(err)
                    }
                );
            }
        } else {
            setIsReady(true)
        }
    }, [history, isLoggedIn, isReady]);

    async function handleMoviesSearch() {
        try {
            const movies = await apiMovies.getMovies()
            setIsLoading(false);
            localStorage.setItem('movies', JSON.stringify(movies));
        } catch (err) {
            setIsLoading(false)
            setPopupCaption(JSON.stringify(err.message));
            handlePopup();
            console.log(err)
        }
    }

    function handleFavouritesClick(card) {
        api.postMovie({
            country: card.country,
            director: card.director,
            duration: card.duration,
            year: card.year,
            description: card.description,
            image: `https://api.nomoreparties.co/${card.image.url}`,
            trailerLink: card.trailerLink,
            nameRU: card.nameRU,
            nameEN: card.nameEN,
            thumbnail: `https://api.nomoreparties.co/${card.image.url}`,
            movieId: card.id,
        }).then((res) => JSON.stringify(res.data))
            .then((res) => {
                setSavedCards([JSON.parse(res), ...savedCards]);
            }).catch((err) => {
                setPopupCaption(JSON.stringify(err.message));
                handlePopup();
                console.log(err)
            }
        )
    }

    function handleDeleteClick(card) {
        api.deleteMovie(card._id).then(() => {
            const newArray = savedCards.filter((c) => {
                return c._id !== card._id
            })
            setSavedCards(newArray)
        }).catch((err) => {
                setPopupCaption(JSON.stringify(err.message));
                handlePopup();
                console.log(err)
            }
        )
    }

    function handleLogin(email, password) {
        Auf.authorize(email, password)
            .then(() => {
                    setIsLoggedIn(true);
                    history.push('/movies');
                }
            )
            .catch((err) => {
                setPopupCaption(JSON.stringify(err.message));
                handlePopup();
                console.log(err);
            });
    }

    function handleLogout() {
        localStorage.removeItem('searchResults');
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        history.push('/');
    }

    function handleRegister(email, password, name) {
        Auf.register(email, password, name)
            .then(() => {
                    Auf.authorize(email, password).then(() => {
                        setIsLoggedIn(true);
                        history.push('/movies');
                    })
                }
            ).catch((err) => {
                setPopupCaption(JSON.stringify(err.message));
                handlePopup();
                console.log(err)
            }
        );
    }

    function handleProfile(name, email) {
        api.patchProfile({
            name: name,
            email: email
        }).then((result) => {
            setCurrentUser(result.data);
            setPopupCaption('Профиль успешно изменен');
            handlePopup();
        }).catch((err) => {
                setPopupCaption(JSON.stringify(err.message));
                handlePopup();
                console.log(err)
            }
        )
    }

    function handlePopup() {
        setIsOpenPopup(true)
    }

    function closePopup() {
        setIsOpenPopup(false)
    }

    function handleMenu() {
        setIsOpenMenu(true)
    }

    function closeMenu() {
        setIsOpenMenu(false)
    }

    function handlePreloader() {
        isLoading === true ? setIsLoading(false) : setIsLoading(true)
    }

    return (
        <div className="root">
            {isReady && <div className="page root__page"><Switch>
                <Route path="/signin">
                    {() =>
                        isLoggedIn ? <Redirect to="./"/> : <Login onLogin={handleLogin}
                                                                  isOpen={isOpenPopup}
                                                                  onClose={closePopup}
                                                                  caption={popupCaption}/>
                    }
                </Route>
                <Route path="/signup">
                    {() =>
                        isLoggedIn ? <Redirect to="./"/> : <Register onRegister={handleRegister}
                                                                     isOpen={isOpenPopup}
                                                                     onClose={closePopup}
                                                                     caption={popupCaption}/>
                    }
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
                                isLoggedIn={isLoggedIn}
                                currentUser={currentUser}
                                handleProfile={handleProfile}
                                component={ContentProfile}
                                handleMenu={handleMenu}
                                isOpenMenu={isOpenMenu}
                                closeMenu={closeMenu}
                                isOpen={isOpenPopup}
                                onClose={closePopup}
                                caption={popupCaption}
                                handleLogout={handleLogout}/>
                <ProtectedRoute exact
                                path="/movies"
                                isLoggedIn={isLoggedIn}
                                currentUser={currentUser}
                                component={ContentMovies}
                                handleMenu={handleMenu}
                                isOpenMenu={isOpenMenu}
                                closeMenu={closeMenu}
                                handleMoviesSearch={handleMoviesSearch}
                                handleFavouritesClick={handleFavouritesClick}
                                isOpen={isOpenPopup}
                                onClose={closePopup}
                                caption={popupCaption}
                                handlePreloader={handlePreloader}
                                isLoading={isLoading}
                                savedCards={savedCards}
                                handleDeleteClick={handleDeleteClick}/>
                <ProtectedRoute exact
                                path="/saved-movies"
                                isLoggedIn={isLoggedIn}
                                currentUser={currentUser}
                                component={ContentSavedMovies}
                                handleMenu={handleMenu}
                                isOpenMenu={isOpenMenu}
                                closeMenu={closeMenu}
                                savedCards={savedCards}
                                handleDeleteClick={handleDeleteClick}
                                isOpen={isOpenPopup}
                                onClose={closePopup}
                                caption={popupCaption}/>
                <Route path="*">
                    <PageNotFound/>
                </Route>
            </Switch>
            </div>}
        </div>
    );
}

export default App;