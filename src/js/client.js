import React from "react";
import ReactDOM from "react-dom";

const Layout = () => {
    return (
        <>
        <Header />
        <Main />
        </>
    );
}

let app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
