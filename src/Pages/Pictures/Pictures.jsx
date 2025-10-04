import s from "./Pictures.module.css"
import { useContext, useEffect, useState } from 'react'
import { context } from '../../App'

function Pictures() {
    const { pageIndicator, lightMode } = useContext(context)
    const [pics, setPics] = useState([
        { src: "./Sarah/pic1.jpg", focus: true },
        { src: "./Sarah/pic2.jpg", focus: false },
        { src: "./Sarah/pic3.jpg", focus: false },
        { src: "./Sarah/pic4.jpg", focus: true },
        { src: "./Sarah/pic5.jpg", focus: false },
        { src: "./Sarah/pic6.jpg", focus: false },
        { src: "./Sarah/pic7.jpg", focus: true },
        { src: "./Sarah/pic8.jpg", focus: false },
        { src: "./Sarah/pic9.jpg", focus: false },
        { src: "./Sarah/pic10.jpg", focus: true },
        { src: "./Sarah/pic11.jpg", focus: false },
        { src: "./Sarah/pic12.jpg", focus: false },
        { src: "./Sarah/pic13.jpg", focus: true },
        { src: "./Sarah/pic14.jpg", focus: false },
        { src: "./Sarah/pic15.jpg", focus: false },
        { src: "./Sarah/pic16.jpg", focus: true },
        { src: "./Sarah/pic17.jpg", focus: false },
        { src: "./Sarah/pic18.jpg", focus: false },
        { src: "./Sarah/pic19.jpg", focus: false },
        { src: "./Sarah/pic20.jpg", focus: false },
        { src: "./Sarah/pic21.jpg", focus: false },
        { src: "./Sarah/pic22.jpg", focus: false },
    ])
    const [focusedIndex, setFocusedIndex] = useState(0)

    function handleSlide(num) {
        if (focusedIndex == 0 && num < 0) {
            setFocusedIndex(21)
        } else if (focusedIndex == 21 && num > 0) {
            setFocusedIndex(0)
        } else {
            setFocusedIndex(prev => prev + num)
        }
    }

    useEffect(() => {
        setPics(prev => prev.map((pic, i) => {
            return { ...pic, focus: focusedIndex == i ? true : false }
        }))
    }, [focusedIndex])

    useEffect(() => {
        pageIndicator("Pictures")
    }, [])

    return (
        <div className={lightMode ? `${s.pictures} ${s.pictures_light_mode}` : `${s.pictures} ${s.pictures_dark_mode}`}>
            <div className={s.wrapper}>
                <button
                    className={s.left}
                    onClick={() => handleSlide(-1)}>
                    <i className="fa fa-angle-left"></i>
                </button>
                <div className={s.image_wrapper}>
                    <div style={{backgroundImage: `url(${pics[focusedIndex]?.src})`}} />
                </div>
                <button
                    className={s.right}
                    onClick={() => handleSlide(+1)}>
                    <i className="fa fa-angle-right"></i>
                </button>
            </div>
        </div>
    )
}

export default Pictures