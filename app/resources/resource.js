export default class Resource {

    constructor(axios, store) {
        this.axios = axios;
        this.store = store;
    }

    get(path = "/", params, headers = {}) {
        return this.promise(
            this.axios.get(this.name + path, {params, headers})
        );
    }

    post(path = "/", params, headers = {}) {
        return this.promise(
            this.axios.post(this.name + path, params, {headers})
        );
    }

    put(path = "/", params, headers = {}) {
        return this.promise(
            this.axios.put(this.name + path, params, {headers})
        );
    }

    patch(path = "/", params, headers = {}) {
        return this.promise(
            this.axios.patch(this.name + path, params, {headers})
        );
    }

    models(array) {
        return array.map(model => this.model(model));
    }

    model(model) {
        return model;
    }

    promise(request) {

        return new Promise((resolve, reject) => {

            return request.then(response => {

                if (response) {
                    if (response.data.status) {
                        resolve(response.data.data);
                    }
                }

            }).catch(error => {
                if(error.response){
                    if(error.response.status == 422){
                        reject(error.response.data.errors[0]);
                        //reject(Object.values(error.response.data.message)[0]);
                    }else{
                        reject(error.response.data.message);
                    }
                }else{
                    reject(error);
                }
            });

        })
    }

}
