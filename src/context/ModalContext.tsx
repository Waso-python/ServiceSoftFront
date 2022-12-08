import React, {createContext, useState} from "react"

interface IModalContext {
    modal: boolean,
    open: () => void,
    close: () => void,
}

interface IRegisterContext {
    username: string,
    is_auth: boolean,
    token: string
}

export const ModalContext = createContext<IModalContext>({
    modal: false,
    open: () => {},
    close: () => {}
})

export const RegisterContext = createContext<IRegisterContext>( {
    username: '',
    is_auth: false,
    token: ''
})

export const ModalState = ({children}: {children: React.ReactNode}) => {
    const [modal, setModal] = useState(false)

    const open = () => setModal(true)
    const close = () => setModal(false)

    return (
        <ModalContext.Provider value={{modal, open, close}}>
            {children}
        </ModalContext.Provider>
    )
}