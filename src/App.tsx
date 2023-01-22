import React, {useEffect} from 'react';
import './App.css';
import List from "./components/list/List";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
        <Sidebar/>
        <Header/>
        <List/>
    </div>
  );
}

export default App;
