import React from "react";
import CurrentUserContext from '../../contexts/CurrentUserContext';
import SavedMovies from "../SavedMovies/SavedMovies";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function ContentSavedMovies(props) {
    return (
        <CurrentUserContext.Provider value={props.currentUser}>
            <div className="root">
                <div className="page root__page">
                    <Header isLoggedIn={props.isLoggedIn}
                            handleMenu={props.handleMenu}
                            isOpenMenu={props.isOpenMenu}
                            closeMenu={props.closeMenu}/>
                    <SavedMovies/>
                    <Footer/>
                </div>
            </div>
        </CurrentUserContext.Provider>
    )
        ;
}

export default ContentSavedMovies;