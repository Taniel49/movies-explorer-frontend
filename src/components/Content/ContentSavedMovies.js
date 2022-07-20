import React from "react";
import CurrentUserContext from '../../contexts/CurrentUserContext';
import SavedMovies from "../SavedMovies/SavedMovies";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function ContentSavedMovies(props) {
    return (
        <CurrentUserContext.Provider value={props.currentUser}>
            <div className="root">
                <div className="page root__page">
                    <Header isLoggedIn={props.isLoggedIn}
                            handleMenu={props.handleMenu}
                            isOpenMenu={props.isOpenMenu}
                            closeMenu={props.closeMenu}/>
                    <SavedMovies savedCards={props.savedCards}
                                 handleDeleteClick={props.handleDeleteClick}/>
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

export default ContentSavedMovies;