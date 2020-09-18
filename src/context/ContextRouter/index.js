import React, { useContext, createContext, useState, useEffect } from 'react'


const ContextRouter = createContext()


const ContextRouterProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {


        })()

        setTimeout(() => setLoading(false), 1)




    }, [])



    if (loading)
        return <div />

    return (
        <ContextRouter.Provider value={{



        }} >
            {children}
        </ContextRouter.Provider>
    )
}


export const useRouter = () => {
    const context = useContext(ContextRouter)

    return ({

    })
}

export default ContextRouterProvider
