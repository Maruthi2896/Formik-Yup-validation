import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Dashboard";
import Home from "./components/Home";
import Developer from "./components/developer";
import Booklist from "./components/Booklist";
import ReaderList from "./components/ReaderList";
import StaffList from "./components/staffList";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#f2f2f2",
        marginLeft: "80px",
        marginRight: "80px",
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Booklist />} />
          <Route path="/readers" element={<ReaderList />} />
          <Route path="/staffs" element={<StaffList />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          {/* <Route path="/edit-profile" element={<EditProfile />} /> */}
          <Route path="/developer" element={<Developer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
