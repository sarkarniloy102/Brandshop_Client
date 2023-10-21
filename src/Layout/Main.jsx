import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer"

const Main = () => {
    return (
        <div >
            <div>
                <Navbar ></Navbar>
            </div>

            <div className="mx-4 my-4 lg:mx-10 lg:my-10 ">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
           

        </div>
    );
};

export default Main;