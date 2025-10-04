import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Middlepart from "./Middlepart";
const Landingpage = () => (
  <div className="body-background">
    <h1>Welcome</h1>
    <Header />
    <Middlepart />
    <Footer />
    {/* <Link to="/dashboard">Go to Dashboard</Link> */}
  </div>
);
export default Landingpage;
