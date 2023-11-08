import { makeAutoObservable, reaction } from "mobx";
import { ServerError } from "../models/serverError";

export default class commonStore {
    error: ServerError | null = null;
    token: string | null | undefined = localStorage.getItem('jwt');
    appLoaded: boolean = false;

    constructor() {
        makeAutoObservable(this);

        reaction(
            () => this.token,
            token => {
                if(token) {
                    localStorage.setItem('jwt', token)
                } else {
                    localStorage.removeItem('jwt')
                }
            }
        )
    }

    setSeverError(error: ServerError) {
        this.error = error;
    }

    setToken = (token: string | null | undefined) => {
        this.token = token;
    }

    setAppLoaded = () => {
        this.appLoaded = true;
    }
}
