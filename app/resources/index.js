import axios from "axios";
import {store} from 'app/services/store'

import {Api} from 'app/constants';
import event from 'app/resources/event';
import auth from 'app/resources/auth';
import block from 'app/resources/block';
import category from 'app/resources/category';
import post from 'app/resources/post';
import user from 'app/resources/user';
import weather from 'app/resources/weather';
import tag from 'app/resources/tag';
import page from 'app/resources/page';
import newsletter from 'app/resources/newsletter';
import place from 'app/resources/place';

const instance = axios.create({
    baseURL: Api.url
});

instance.interceptors.request.use(function (request) {


    //console.log(store.getState().auth.token);
    request.headers["Authorization"] = "Bearer " + store.getState().auth.token;
    request.headers["accept-language"] = store.getState().app.locale;

    let payload = {};

    if (request.data) {
        payload = request.data;
    }

    if (request.params) {
        payload = request.params;
    }

    console.log("Request: " + request.method.toUpperCase() + " " + request.url, JSON.stringify(payload), JSON.stringify(request.headers));

    return request;
});

instance.interceptors.response.use(response => {
    console.log("Response: " + response.config.method.toUpperCase() + " " + response.config.url + " " + response.status);
    return response;
})

let resource = {
    auth,
    event,
    block,
    category,
    post,
    weather,
    user,
    tag,
    newsletter,
    page,
    place
};

let rs = {};

for (let r in resource) {
    rs[r] = new resource[r](instance, store)
}

export default rs;
