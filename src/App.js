import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import './index.css';
import "./Styles/MainPage.css";
import MainPage from "./components/MainPage";
import "./Fonts/fonts.css";
import navbar from "./JavaScripts/Navbar";


const App = () => {
    return ( 

            <Router>
                
                <div className="content">
                    
                    <Sidebar navbar={navbar} />

                    <MainPage Component={MainPage} />
                        
                </div>

            </Router>
     );
}
 
export default App;