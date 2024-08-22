import settings from "./settings";
import { HTTPError } from "../utils/httpError";

export async function GetUserInfo() {

    const response = await fetch(`${ settings.domain }/user`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            , 'Cache-Control': 'no-cache'
            , 'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });

    if (!response.ok) {
        throw new HTTPError(response);
    }

    const data = await response.json();
    return data;

}

export async function ActivateUser(code: string) {

    const response = await fetch(`${ settings.domain }/user/code/${code}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
            , 'Cache-Control': 'no-cache'
            , 'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });

    if (!response.ok) {
        throw new HTTPError(response);
    }

    const data = await response.json();
    return data;

}

export interface UserRegistration {
    // Define the properties of userRegistration object
    // For example:
    email: string;
    password: string;
    firstname: string;
    lastname: string;
}

export async function Register(userRegistration: UserRegistration) {
    const response = await fetch(`${ settings.domain }/register`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            , 'Cache-Control': 'no-cache'
        },
        body: JSON.stringify(userRegistration)
    });

    if (!response.ok) {
        throw new HTTPError(response);
    }

    const data = await response.json();
    return data;
}

    



export async function LoginUser(userLogin: { email: string, password: string }) {

    const response = await fetch(`${ settings.domain }/login/custom`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            , 'Cache-Control': 'no-cache'
        },
        body: JSON.stringify(userLogin)
    });

    if (!response.ok) {
        throw new HTTPError(response);
    }

    const data = await response.json();
    return data;

}