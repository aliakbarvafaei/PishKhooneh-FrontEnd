export interface eachToast {
    title : string;
    description: string;
    key: number;
}
export interface statesRedux {
    userAuth : stateUserAuth
}
export interface stateUserAuth {
    user: null | string;
    token: null | string;
}
export interface HamburgerProps {
    isOpen : boolean;
    handleHamburger: () => void;
    items : any;
}
export interface toastProps {
    type : string;
    description: string;
    indexKey: number;
    destroyToast(indexKey : number):void;
}
export interface ProtectedRouteProps {
    path: string;
    key: number;
    component: React.FC;
}