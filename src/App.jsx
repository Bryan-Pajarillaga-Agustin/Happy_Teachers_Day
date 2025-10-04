import { createContext, useState } from "react"
import "./App.css"
import Nav from "./Navigation/nav";
import Home from "./Pages/Home/Home";
import Letter from "./Pages/Letter/Letter";
import Pictures from "./Pages/Pictures/Pictures";
import { HashRouter, Route, Routes } from "react-router-dom";

export const context = createContext({});

function App() {
  const [lightMode, setLightMode] = useState(true)
  const [tabs, setTabs] = useState([
    { tabName: "Home", path: "/", classname: "	fa fa-home", isOpen: true, Page: function () { return <Home /> } },
    { tabName: "Letter", path: "/Letter", classname: "	fa fa-comment-o", isOpen: false, Page: function () { return <Letter /> } },
    { tabName: "Pictures", path: "/Pictures", classname: "fa fa-file-image-o", isOpen: false, Page: function () { return <Pictures /> } },
  ]);
  const [path, setPath] = useState("/")

  function pageIndicator(tabName) {
    setTabs(prev => prev.map((tab) => {
      return { ...tab, isOpen: tab.tabName == tabName ? true : false }
    }))
  }
  const value = {
    // BOOLEAN
    lightMode, setLightMode,

    // STRING 
    path, setPath,

    // ARRAYS
    tabs, setTabs,

    // FUNCTIONS
    pageIndicator
  }

  return (
    <HashRouter>
      <context.Provider value={value}>
        <div className="pages">
          <Nav />
          <Routes>
            {
              tabs.map(tab => {
                return <Route element={<tab.Page />} path={tab.path} />
              })
            }
          </Routes>
        </div>
      </context.Provider>
    </HashRouter>
  )
}

export default App
