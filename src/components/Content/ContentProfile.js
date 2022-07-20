import React from "react";
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Profile from "../Profile/Profile";
import Header from "../Header/Header";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function ContentProfile(props) {
    return (
        <CurrentUserContext.Provider value={props.currentUser}>
            <div className="root">
                <div className="page root__page">
                    <Header isLoggedIn={props.isLoggedIn}
                            handleMenu={props.handleMenu}
                            isOpenMenu={props.isOpenMenu}
                            closeMenu={props.closeMenu}/>
                    <Profile currentUser={props.currentUser}
                             onSubmit={props.handleProfile}
                    />
                    <InfoTooltip isOpen={props.isOpen}
                                 onClose={props.onClose}
                                 caption={props.caption}/>
                </div>
            </div>
        </CurrentUserContext.Provider>
    )
        ;
}

export default ContentProfile;