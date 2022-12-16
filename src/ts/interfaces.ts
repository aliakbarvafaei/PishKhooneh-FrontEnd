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
export interface LoginInputTypes {
    email: string;
    password: string;
}
export interface ProfileInputTypes {
    passwordCurrent: string;
    passwordNew: string;
    passwordConfirm: string;
}
export interface RegisterInputTypes {
    fname: string;
    callNumber: string;
    email: string;
    password: string;
    address: string;
    bio: string;
}
export interface NewAdInputTypes {
    category: string;
    type: string;
    city: string;
    region: string;
    room: string;
    year: string;
    floor: string;
    elevator: string;
    parking: string;
    meterage: string;
    price: string;
    title: string;
    callNumber: string;
    address: string;
    bio: string;
    creator: string;
    warehouse: string;
}
export interface InformationUserTypes {
    fname: string;
    callNumber: string;
    email: string;
    address: string;
    bio: string;
}
export interface filtersInterface {
    searchInput: string;
    color: string[];
    size: string[];
    gender: string[];
    category: string[];
    priceRange: {
        from: number;
        to: number;
    };
}