import axios from "axios";
import Cookies from "universal-cookie";
// import {APP} from  '../app.json';

const cookies = new Cookies();

export function calculaExtreaccionSesion() {
    const now = new Date().getTime();
    const newDate = now + (60 * 30) * 1000;
    return new Date(newDate);
}

export function getSession() {
    return cookies.get("_020565");
}
