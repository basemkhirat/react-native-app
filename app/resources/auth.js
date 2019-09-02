import Resource from './resource';

export default class extends Resource {

    name = "auth";

    login(user) {

        return new Promise((resolve, reject) => {

            this.post("/token", user)
                .then(data => {

                    this.store.dispatch({
                        type: "token",
                        token: data.token
                    });

                    this.get("/user").then(user => {

                        this.store.dispatch({
                            type: "user",
                            user: user
                        });

                        resolve(user);

                    }).catch(error => {
                        reject(error)
                    });

                })
                .catch(error => {
                    reject(error)
                })

        });
    }

    logout(){

        this.store.dispatch({
            type: "token",
            token: null
        });

        this.store.dispatch({
            type: "user",
            token: null
        });

    }
}
