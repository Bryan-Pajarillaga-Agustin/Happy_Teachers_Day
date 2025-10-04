import s from "./Home.module.css"
import { useContext, useEffect } from 'react'
import { context } from '../../App'
import { useNavigate } from "react-router-dom"

function Home() {
    const {pageIndicator, lightMode} = useContext(context)
    const navigation = useNavigate()

    useEffect(()=>{
        pageIndicator("Home")
    }, [])

    return (
        <div className={lightMode ? `${s.home}` : `${s.home} ${s.home_dark_mode}`}>
            <div className={s.left}>
                <img src="character.png"/>
            </div>
            <div className={s.right}>
                <div className={s.strong_wrapper}>
                    <h1>Happy Teachers' Day Babyyy Ko! 🧡🧡🧡</h1>
                    <p>Isang maligayang pagbati mula sa iyong napakagwapo at kupal na boyfriend! 😘🥰🧡</p>
                    <button
                        id={s.read_button}
                        onClick={()=>{navigation("/Letter")}}>
                            Read My Letter
                    </button>
                    <img src="heart.png" id={s.img_1} />
                    <img src="heart.png" id={s.img_2} />
                    <img src="heart.png" id={s.img_3} />
                    <img src="heart.png" id={s.img_4} />

                    <img src="heart.png" id={s.img_5} />
                    <img src="heart.png" id={s.img_6} />
                    <img src="heart.png" id={s.img_7} />
                    <img src="heart.png" id={s.img_8} />
                </div>
            </div>
        </div>
    )
}

export default Home