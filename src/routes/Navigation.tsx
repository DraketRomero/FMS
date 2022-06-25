import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Login } from "../pages";
import './../styles/main.css';

const Navigation = () => {
	return (
        <div className="App">
            <BrowserRouter>
            {/* <nav>
                <img src="" alt="Foto de perfil" />

                <ul>
                    <li>
                        <Link to="/">Login</Link>
                    </li>
                </ul>
            </nav> */}

            <Routes>
                <Route path="/" element={ <Login /> }></Route>
            </Routes>
            </BrowserRouter>
		</div>
	);
};

export default Navigation;