import api from '../utils/MainApi';
export const BASE_URL = 'https://movies-api.onrender.com';

export const register = (email, password, name) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": email,
            "password": password,
            "name": name,
        })
    })
        .then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else if (response.status === 409) {
                    throw new Error('Пользователь с таким email уже существует')
                }
            return response
        })
        .then((res) => {
            return res;
        })
};

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    })
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            }
            return response.json().then((data) => {
                throw new Error(data.message)
            })
        })
        .then((data) => {
            localStorage.setItem('token', data.token);
            api.setAuthorisation(data.token);
            return data;
        })

};

export const getContent = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
        .then(res => res.json())
        .then(data => data)
}