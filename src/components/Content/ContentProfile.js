import React from "react";
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Profile from "../Profile/Profile";
import Header from "../Header/Header";

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
                </div>
            </div>
        </CurrentUserContext.Provider>
    )
        ;
}

export default ContentProfile;