import Resource from './resource';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';

export default class extends Resource {

    name = "auth";

    /**
     * Facebook App ID
     * @type {string}
     */
    facebook_api_key = "344988263051937";

    /**
     * Login with credientials
     * @param user
     * @returns {Promise<any>}
     */
    login(user) {

        return new Promise((resolve, reject) => {

            this.post("/token", user)
                .then(data => {

                    this.loginByToken(data.token).then(user => {
                        resolve(user)
                    }).catch(error => {
                        reject(error);
                    })

                })
                .catch(error => {
                    reject(error)
                })

        });
    }


    /**
     * Login by token
     * @param token
     * @returns {Promise<any>}
     */
    loginByToken(token) {

        return new Promise((resolve, reject) => {

            this.store.dispatch({
                type: "token",
                token: token
            });

            this.user().then(user => {
                resolve(user);
            }).catch(error => {
                reject(error)
            });

        });

    }

    /**
     * Login by google
     * @returns {Promise<any>}
     */
    loginByGoogle() {

        return new Promise((resolve, reject) => {

            const google = Google.logInAsync({
                scopes: ['profile', 'email'],
                iosClientId: "827628876469-q7ro3pcqa70gmn41dm7t756e0u9psio5.apps.googleusercontent.com",
                androidClientId: "827628876469-odke3tbuefnl11pk0udkpjs1bs9bsse2.apps.googleusercontent.com",
            }).then(google => {

                this.post("/google", {access_token: google.accessToken})
                    .then(user => {

                        this.loginByToken(user.token).then(user => {
                            resolve(user)
                        }).catch(error => {
                            reject(error);
                        })

                    })
                    .catch(error => {

                        console.log(error);
                        reject(error);
                    });

            });
        });
    }

    /**
     * Login by facebook
     * @returns {Promise<any>}
     */
    loginByFacebook() {

        return new Promise((resolve, reject) => {

            Facebook.logInWithReadPermissionsAsync(this.facebook_api_key, {
                permissions: ['public_profile'],
            }).then(facebook => {


                this.post("/facebook", {access_token: facebook.token})
                    .then(user => {

                        this.loginByToken(user.token).then(user => {
                            resolve(user)
                        }).catch(error => {
                            reject(error);
                        })

                    })
                    .catch(error => {
                        reject(error);
                    });


            }).catch(error => {
                reject(error);
            })

        });

    }

    /**
     * Update user in app
     * @returns {Promise<any>}
     */
    user() {

        return new Promise((resolve, reject) => {

            this.get("/user").then(user => {

                this.store.dispatch({
                    type: "user",
                    user: user
                });

                resolve(user);

            }).catch(error => {
                reject(error)
            });

        });
    }

    /**
     * Logout user
     */
    logout() {

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
