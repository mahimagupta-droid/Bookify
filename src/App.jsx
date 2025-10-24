//pages
import RegisterPage from "./Pages/Register";
import Login from "./Pages/Login";
import ListingPage from "./Pages/Listing";
import HomePage from "./Pages/HomePage";
import BookDetails from "./Pages/Details";
//components
import MyNavBar from "./Context/Components/Navbar";

//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <>
      <MyNavBar />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/book/list" element={<ListingPage />} />
          <Route path="/book/view/:bookId" element={<BookDetails />} />
        </Routes>
      </div>
    </>
  );
}
