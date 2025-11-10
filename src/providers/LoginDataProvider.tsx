import { createContext, useContext, useState } from "react";


type LoginDataType = {
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
};

const LoginDataContext = createContext<LoginDataType | null>(null);

export const LoginDataProvider = ({
    children
}: {
    children: React.ReactNode
}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <LoginDataContext.Provider value={{ email, setEmail, password, setPassword }}>
            {children}
        </LoginDataContext.Provider>
    );
};

export const useLoginData = () => {
    const context = useContext(LoginDataContext);
    if (!context) throw new Error("useLoginData must be used within a LoginDataProvider");
    return context;
};
