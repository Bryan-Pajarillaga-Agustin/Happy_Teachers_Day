import s from "./Letter.module.css"
import { useContext, useEffect, useState } from 'react'
import { context } from '../../App'

function Letter() {
    const { pageIndicator, lightMode } = useContext(context)
    const [showLetter, setShowLetter] = useState(false)

    useEffect(() => {
        pageIndicator("Letter")
    }, [])

    return (
        <div className={lightMode ? `${s.letter} ${s.letter_light_mode}` : `${s.letter} ${s.letter_dark_mode}`}>
            <div className={showLetter ? s.show_letter : s.hide_letter}>
                <h1>Happy Teachers' Day!!!</h1>
                <p>Isang maligayang Teachers' Day Celebration babyyy kong Mahal na Mahal na Mahal ko Palagi!!!! 😘🧡🧡 <br />
                    Eto na yung letter na inaantay mo! 😂, de joke lang ✌, pero lahat ng mababasa mo dito ay pawang katotohanan lamang. 😘🧡
                </p>
                <p>Nag-papasalamat ako palagi kay God dahil binigyan niya ako ng napakagandang teacher na proud ako palagi sa kanya 😁, kahit madalas napakalakas mangupal, pinapantayan mo lang yung immaturity ko madalas 😁 -IMMATURITYYY!?!?!</p>
                <p>Kidding aside, gusto kong bumawi sa'yo this October babyyy ko, sa simpleng paggawa ng website na dugo at iyak(galing kay bunchachoyyy) ang kapalit, sana naman napaligaya kita ngayong araw man lang 😁✌😘 <br />
                    Babyyy ko alam mo namang Mahal na Mahal na Mahal kitang Palagi, sadya lang na minsan nagkukulang ako sa'yo pero hindi ko hahayaan na puro pagkukulang nalang ang magagawa ko, babawi at babawi ako sa'yo syempre para ipakitang nag-iimprove ang bebe mong pinili mo kahit kupal lang at walang talent. 😁 </p>
                <p>Naalala ko tuloy yung time na nag-away tayo dahil sinend mo kay anna gurl mo yung picture ko, nainis mo talaga ako dun literal hahhaha, kaya nakapagbitiw ako ng bad na salita na nakapagpalungkot sayo bilang isang huwarang kupal na guro 😓. <br />
                    Pero deep inside, para sa akin, ikaw yung pinakamagaling na teacher 🧡. Pero sana nagawa mo man lang sumilip sa bintana ng crush mo nung modular kasi abang siya ng abang sa tapat ng bintana niya kasi nagba-baka-sakali ako na mapansin mo ako 🙄     
                </p>
                <p>
                    Tatapusin ko na dito ang maikli kong letter babyy ko, baka napapagod ka nang magbasa eh hahahaah. <br />
                    Mahal na Mahal na Mahal kitang Palagi Sarah kong Pinakamaganda at Pinakamagaling na teacher sa lahat ng mga teacher at 8080ng mga boss mo pa. 😍🧡😘🧡🧡😍😍
                </p>
            </div>

            <button
                onClick={()=>setShowLetter(true)} 
                id={ showLetter ? s.hide_button : s.show_button}>
                Show Letter
            </button>
        </div>
    )
}

export default Letter