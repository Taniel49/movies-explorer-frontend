class APIMovies {
    constructor(url) {
        this._URL = url;
    }

    _checkResult(res){
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getMovies(){
        return fetch(`${this._URL}`, {
            headers: {
            }
        }).then(this._checkResult)
    }
}


const apiMovies = new APIMovies(' https://api.nomoreparties.co/beatfilm-movies');
export default apiMovies;