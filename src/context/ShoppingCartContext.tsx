import { ReactNode, createContext, useState, React  } from "react"

 type ShoppingCartProps = {
    children:ReactNode
};

export const ShoppingCartContext = React.createContext({})

   
export const ShoppingCart = ({children}:ShoppingCartProps) => {
    const [test, setTest] =useState<string>()
    return (
        <ShoppingCartContext.Provider value={{test}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}


