import { useContext, useState } from 'react'
import { Link } from "react-router-dom"
import s from './nav.module.css'
import { context } from '../App'

function Nav() {
    const { tabs, setTabs, setPath, lightMode, setLightMode } = useContext(context)
    const [showDropDown, setShowDropDown] = useState()

    function handleTab(path) {
        setTabs(prev => prev.map((tab) => {
            if (tab.path == path) setPath(path)
            return { ...tab, isOpen: tab.path == path ? true : false }
        }))
    }

    return (
        <nav className={lightMode ? s.nav_light_mode : s.nav_dark_mode}>
            <div className={s.left}>
                <div className={s.title_wrapper}>
                    <img src="icon.png" id={s.icon}/>
                    <h1 className={s.title}>
                        Happy Teachers' Day 🧡
                    </h1>
                </div>
            </div>

            <div className={s.right}>
                <div className={showDropDown ? `${s.links} ${s.dropDown}` : `${s.links}`}>
                    {tabs.map((tab) => {
                        return (
                            <Link
                                key={tab.tabName}
                                className={(tab.isOpen ? `${s.link} ${s.highlight} ` : s.link)}
                                to={tab.path}
                                onClick={() => handleTab(tab.path)}
                            >
                                <i className={tab.classname}></i>
                                <span className={s.tab_name}>{tab.tabName}</span>
                            </Link>
                        )
                    })}
                </div>

                <button className={s.hamburger_button} onClick={()=>{showDropDown ? setShowDropDown(false) : setShowDropDown(true)}}> <i className="fa fa-bars"></i> </button>
                <button
                    className={lightMode ? `${s.color_theme} ${s.light_mode}` : `${s.color_theme} ${s.dark_mode}`}
                    onClick={() => { lightMode ? setLightMode(false) : setLightMode(true) }}>
                    <i className={!lightMode ? "fa fa-moon-o" : "fa fa-sun-o"}></i>
                    <span>{lightMode ? "Light Mode" : "Dark Mode"}</span>
                </button>
            </div>
        </nav>
    )
}

export default Nav