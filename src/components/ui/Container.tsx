import { ReactNode } from "react";

type TContainerProps = {
    children: ReactNode
}

const Container = ({children} : TContainerProps) =>{
    return (
        <div className="w-full max-w-7xl h-screen mx-auto">
            {children}
        </div>
    )
}

export default Container;