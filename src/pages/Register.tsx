import React, {useState} from "react"
import {Register} from "../components/Register";
import {IAccessToken, IProduct, IUsers} from "../models";

interface ErrorProps {
    error: string
}
interface ErrorMessageProps {
    error: string
}

export function RegisterForm() {

    const [errorText, setErrorText] = useState('')

    const fake = (newUser: IAccessToken | any) => {
        newUser.access_token && setErrorText("Succesful")
        newUser.detail && setErrorText("Bad answer")

    }
    function ErrorMessage({error}:ErrorMessageProps) {
        return (
            <p className="text-center text-red-600">{error}</p>
        )
    }

    return (
       <>
        <div><Register  onCreate={fake}/>
            {errorText && <ErrorMessage error={errorText}/>}
        </div>

       </>
    )
}