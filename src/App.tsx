import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import MainPage from "./pages/MainPage";
import SearchList from "./components/searchList/SearchList";
import FavoritePage from "./pages/FavoritePage";
import WatchLaterPage from "./pages/WatchLaterPage";
import Toaster from "./components/toaster/Toaster";

function App() {

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

  return (
      <Router>
         <div className="App">
            <Sidebar/>
            <Header/>
             <Toaster/>
            <main>

                <Routes>

                    <Route path={'/'}>

                        <Route index element={<MainPage/>}/>

                        <Route path={'search/:searchParams'} element={<SearchList/>}/>

                        <Route path={'channels/:channelID'} element={''}/>

                        <Route path={'favorite'} element={<FavoritePage/>}/>

                        <Route path={'watchLater'} element={<WatchLaterPage/>}/>

                    </Route>

                </Routes>

            </main>
         </div>
      </Router>
  );
}

export default App;
