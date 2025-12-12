import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../component-test/Home";
import { LoginPage } from "../component-test/Login";

export function Navigation(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />}/>
                <Route path="/home" element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}