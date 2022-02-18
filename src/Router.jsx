
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Login from "./modules/authentication/screens/Login";

const About = () => <div>About</div>

function Router () {
    return (<Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<h1>Home page</h1>}/>
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
      )
}
export default Router;