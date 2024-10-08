import { useState } from "react";
import "./App.css";
/* import CreatePost from "../components/CreatePost"; */
import Footer from "../components/Footer";
import Header from "../components/Header";
/* import PostList from "../components/PostList"; */
import Sidebar from "../components/Sidebar";
import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <div className="left">
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </div>
        <div className="right">
          <Header />
          <div className="content">
            <Outlet />
          </div>
         
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
