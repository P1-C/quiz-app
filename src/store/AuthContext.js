import React, { createContext } from "react";

const AuthContext = createContext({
    token: '',
    isLoggedIn: false,
    user: {},
    login: (token)=> {},
    logout: () => {}
});

export default AuthContext;