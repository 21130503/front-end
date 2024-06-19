import { faPause, faPlay, faVolumeHigh, faVolumeOff, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import './audio.scss'
import { useEffect } from "react";
function Audio({content}) {
    const [isPlay, setIsPlay]= useState(false)
    const [isMute, setMute]= useState(false)
       const handleSpeak = ()=> {
           setIsPlay(!isPlay)
           if(!isPlay){
            const utterance = new SpeechSynthesisUtterance(content);
            utterance.lang = 'en-US'; // Ngôn ngữ, ví dụ: 'en-US' cho tiếng Anh Mỹ
            utterance.pitch = 1; // Cao độ giọng nói (0-2)
            utterance.rate = 1; // Tốc độ nói (0.1-10)
            utterance.volume = 1; // Âm lượng (0-1)
            window.speechSynthesis.speak(utterance);
           }
       }
    return ( 
        <div className="audio bg-slate-100 px-4 py-3 flex items-center mt-4 gap-4">
            <div className="play">
                <button className="flex items-center justify-center btn-play p-3" onClick={()=>handleSpeak()}>
                    <FontAwesomeIcon icon={isPlay ? faPause : faPlay}/>
                </button>
            </div>
            <div className="mute">
            <button className="flex items-center justify-center btn-mute p-3" onClick={()=>setMute(!isMute)}>
                    <FontAwesomeIcon icon={isMute ? faVolumeOff : faVolumeHigh}/>
                </button>
            </div>
        </div>
     );
}

export default Audio;