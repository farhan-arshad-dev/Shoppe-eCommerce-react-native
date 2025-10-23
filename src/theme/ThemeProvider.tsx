import React, { createContext, useContext } from "react";
import { theme as defaultTheme, ThemeType } from "./index";

type ThemeContextType = {
    theme: ThemeType;
};

const ThemeContext = createContext<ThemeContextType>({
    theme: defaultTheme,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

    const activeTheme = { ...defaultTheme };

    return (
        <ThemeContext.Provider value={{ theme: activeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
