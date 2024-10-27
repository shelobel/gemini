import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);

    const cards = [
        {
            prompt: 'Suggest beautiful places to see on an upcoming road trip',
            icon: assets.compass_icon
        },
        {
            prompt: 'Briefly summarise this concept: urban planning',
            icon: assets.bulb_icon
        },
        {
            prompt: 'Brainstorm bonding activities for our work retreat',
            icon: assets.message_icon
        },
        {
            prompt: 'Improve the readability of the following code',
            icon: assets.code_icon
        }
    ];

    const handleCardClick = (prompt) => {
        setInput(prompt);
        onSent(prompt);
    };

  return (
    <div className='main'>
        <div className='nav'>
           <p>Gemini</p>
           <img src = {assets.user_icon} alt = ""/>
        </div>

        <div className='main-container'>

            {!showResult
            ? <>
                <div className="greet">
                    <p><span>Hello, Bro</span></p>
                    <p>How can I help you?</p>
                </div>
                <div className="cards">
                            {cards.map((card, index) => (
                                <div key={index} onClick={() => handleCardClick(card.prompt)} className="card">
                                    <p>{card.prompt}</p>
                                    <img src={card.icon} alt="" />
                                </div>
                            ))}
                        </div>
            </>
            : 
            <>
                <div className='result'>
                    <div className="result-title">
                        <img src = {assets.user_icon} alt = ""/>
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src = {assets.gemini_icon} alt = ""/>
                        {loading 
                        ? <div className="loader">
                            <hr />
                            <hr />
                            <hr />
                        </div>
                        : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        }
                    </div>
                </div>
            </>
            }

            
            <div className="main-bottom">
                <div className="search-box">
                    <input onInput={(e)=>setInput(e.target.value)} value = {input} type = "text" placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" /> 
                        <img src={assets.mic_icon} alt="" />
                        {input ? <img onClick = {()=>onSent()} src={assets.send_icon} alt="" />  : null}
                    </div>
                </div>
                <p className="bottom-info"> 
                Gemini may display inaccurate info, including about people, so double-check with accurate sources.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main