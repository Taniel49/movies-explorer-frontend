import React from "react";
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Movies from "../Movies/Movies";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function ContentMovies(props) {
    return (
        <CurrentUserContext.Provider value={props.currentUser}>
            <div className="root">
                <div className="page root__page">
                    <Header isLoggedIn={props.isLoggedIn}
                            handleMenu={props.handleMenu}
                            isOpenMenu={props.isOpenMenu}
                            closeMenu={props.closeMenu}/>
                    <Movies handleMoviesSearch={props.handleMoviesSearch}
                            handleFavouritesClick={props.handleFavouritesClick}
                            handlePreloader={props.handlePreloader}
                            isLoading = {props.isLoading}
                    savedCards = {props.savedCards}/>
                    <Footer/>
                    <InfoTooltip isOpen={props.isOpen}
                                 onClose={props.onClose}
                                 caption={props.caption}/>
                </div>
            </div>
        </CurrentUserContext.Provider>
    )
        ;
}

export default ContentMovies;