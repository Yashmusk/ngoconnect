import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Landingpage from "./Home/Landingpage";
import { Suspense } from "react";
import Donation from "./Donation/Donation.js";
import Ngo from "./Pages/Ngo.js";
import Volunteer from "./Pages/Volunteer.js";
import NgoConnectFamily from "./Pages/NgoConnectFamily.js";
import ThankYou from "./Pages/ThankYou.js";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Landingpage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/ngos" element={<Ngo />} />
        <Route path="/vol" element={<Volunteer />} />
        <Route path="/ngo-connect-family" element={<NgoConnectFamily />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </>
    )
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
