import { ReactNode, createContext  } from "react"

type ShoppingCartProps = {
    children:ReactNode
};

export const ShoppingCartContext = createContext({} as any)

export const ShoppingCart = ({children}:ShoppingCartProps) => {
    return (
        <ShoppingCartContext.Provider value={''}>
            {children}
        </ShoppingCartContext.Provider>
    )
}



