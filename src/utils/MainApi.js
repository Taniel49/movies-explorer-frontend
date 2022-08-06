class APIMain {
    constructor(url, authorization) {
        this._URL = url;
        this._authorization = authorization;
    }

    _checkResult(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getProfile() {
        return fetch(`${this._URL}/users/me`, {
            headers: {
                authorization: this._authorization
            }
        }).then(this._checkResult)
    }

    patchProfile(item) {
        return fetch(`${this._URL}/users/me`, {
            method: `PATCH`,
            headers: {
                authorization: this._authorization,
                'Content-Type': `application/json`
            },
            body: JSON.stringify({
                name: item.name,
                email: item.email
            })
        }).then(this._checkResult)
    }

    getMovies() {
        return fetch(`${this._URL}/movies`, {
            headers: {
                authorization: this._authorization
            }
        }).then(this._checkResult)
    }

    postMovie(item) {
        return fetch(`${this._URL}/movies`, {
            method: `POST`,
            headers: {
                authorization: this._authorization,
                'Content-Type': `application/json`
            },
            body: JSON.stringify({
                country: item.country,
                director: item.director,
                duration: item.duration,
                year: item.year,
                description: item.description,
                image: item.image,
                trailerLink: item.trailerLink,
                nameRU: item.nameRU,
                nameEN: item.nameEN,
                thumbnail: item.thumbnail,
                movieId: item.movieId,
            })
        }).then(this._checkResult)
    }

    deleteMovie(id) {
        return fetch(`${this._URL}/movies/${id}`,
            {
                method: `DELETE`,
                headers: {
                    authorization: this._authorization,
                }
            }).then(this._checkResult)
    }

    setAuthorisation(token) {
        this._authorization = `Bearer ${token}`;
    }
}


const api = new APIMain('https://api.mydiploma.students.nomoreparties.sbs', '');
api.setAuthorisation(localStorage.getItem('token'));
export default api;