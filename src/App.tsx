import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import List from "./components/list/List";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import MainPage from "./pages/MainPage";
import OverviewVideo from "./pages/OverviewVideo";

function App() {
  return (
      <Router>
         <div className="App">
            <Sidebar/>
            <Header/>
            <main>

                <Routes>

                    <Route path={'/'}>

                        <Route index element={<MainPage/>}/>

                        <Route path={'videos/:videoID'} element={<OverviewVideo/>}/>

                        <Route path={'channels/:channelID'} element={''}/>

                    </Route>

                </Routes>

            </main>
         </div>
      </Router>
  );
}

export default App;
