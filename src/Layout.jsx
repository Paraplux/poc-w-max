import { Outlet } from "react-router-dom";
import Navigation from "./modules/navigation/Navigation";

function Layout () {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    )
}

export default Layout;