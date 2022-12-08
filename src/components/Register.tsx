import React, {useState} from "react"
import {IAccessToken, IUsers} from "../models";
import axios from "axios";
import {ErrorMessage} from "./ErrorMessage";
import {LockClosedIcon} from "@heroicons/react/20/solid";
import {ProductsPage} from "../pages/ProductsPage";
import {useNavigate} from "react-router-dom";

const newUser: IReq = {
    username: "",
    first_name: "",
    email: "",
    firm_name: "",
    password: ""
}


interface IReq {
    username: string,
    first_name: string,
    email: string,
    firm_name: string,
    password: string
}

interface CreateUserProps {
    onCreate: (user: IAccessToken) => void
}

export function Register({onCreate}: any) {
    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [firmName, setFirmName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const nav = useNavigate()



    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')
        if (username.trim().length === 0) {
            setError('Please enter Username.')
            return
        }
        newUser.username = username
        newUser.password = password
        newUser.first_name = firstName
        newUser.firm_name = firmName
        newUser.email = username


        // В этом месте отправляем данные пользователя на регистрацию и получаем ответ от Бэка, если
        // все ок то редирект на форму логина и передать данные логина???
        // console.log(newUser)
        await axios.post<IAccessToken | any>('http://localhost:57221/registration', newUser)
            .catch((e:any) => {setError(e.response.data.detail[0].msg) })
            .then((e:any) => {
                console.log(e.data.access_token) ;
                nav(`/`)})
    }

    const changeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }
    const changePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }
    const changeFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value)
    }
    const changeFirmName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirmName(event.target.value)
    }


    return (
        <>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>

                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Register
                        </h2>

                    </div>
                    <form className="mt-8 space-y-6" onSubmit={submitHandler}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    value = {username}
                                    onChange={changeUsername}
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    placeholder="Enter password"
                                    value = {password}
                                    onChange={changePassword}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"

                                />
                            </div>
                            <div>
                                <label htmlFor="firstName" className="sr-only">
                                    Name
                                </label>
                                <input
                                    placeholder="Enter your name"
                                    value = {firstName}
                                    onChange={changeFirstName}
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="firmName" className="sr-only">
                                    Password
                                </label>
                                <input
                                    placeholder="Enter name of firm"
                                    value = {firmName}
                                    onChange={changeFirmName}
                                    id="firmName"
                                    name="firmName"
                                    type="text"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"

                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                                Register
                            </button>
                        </div>
                        <div>
                            {error}
                        </div>
                    </form>
                </div>
            </div>
        </>




    )
}