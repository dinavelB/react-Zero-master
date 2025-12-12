import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Login } from "./Login";
import { Contact } from "./Contact";
import { Home } from "./Home";

//#Routers are pages. use for navigating
//#check the home jsx
export function Navigate(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path = '/' element={<Home/>}/>
            <Route path = '/login' element={<Login/>}/>
            <Route path = '/contact' element={<Contact/>}/>
        </Routes>
    </BrowserRouter>
    )
}