import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";
import commonStore from "./commonStore";
import UsersStore from "./userStore";
import ModalStore from "./modalStore";

interface Store {
    activityStore: ActivityStore;
    commonStore: commonStore;
    userStore: UsersStore;
    modalStore: ModalStore
}

export const store: Store = {
    activityStore: new ActivityStore(),
    commonStore: new commonStore(),
    userStore: new UsersStore(),
    modalStore: new ModalStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}