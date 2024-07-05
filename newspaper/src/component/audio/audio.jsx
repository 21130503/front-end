import { faPause, faPlay, faVolumeHigh, faVolumeOff, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import './audio.scss'
import { useEffect } from "react";
import axios from "axios";
function Audio({content}) {
    const [tone, setTone] = useState("vi-VN-Neural2-A")
    const [audio, setAudio] = useState(null)
    useEffect(() => {
        const loadVoice = async ()=>{
            const API_KEY = "AIzaSyAp9dH95ZOph54ynFhTA7-7HuqSxy4MUAo";
        const endpoint =
            `https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=${API_KEY}`;
        const payload = {
            audioConfig: {
            audioEncoding: "MP3",
            effectsProfileId: ["small-bluetooth-speaker-class-device"],
            pitch: 0,
            speakingRate: 1,
            },
            input: {
            text:content,
            },
            voice: {
            languageCode: "vi-VN",
            name: tone,
            },
        };
        const {data} = await axios.post(endpoint,payload)
        console.log(data);
        const audioSrc = `data:audio/mp3;base64,${data.audioContent}`
        setAudio(audioSrc)
        }
        loadVoice()
    }, [tone]);
    const handleToneChange = (event) => {
        setTone(event.target.value);
      };
      console.log('tone: ', tone);
    return ( 
        <div className="audio bg-slate-100 px-4 py-3 flex items-center mt-4 gap-4">
           
            <div className="flex-1">{audio && <audio controls src={audio}/>}</div>
            <select 
                className="w-40 capitalize py-3 px-2" 
                name="select" 
                id=""
                value={tone} 
                onChange={handleToneChange}
            >
                <option className="capitalize" value="vi-VN-Neural2-A">giọng nữ</option>
                <option className="capitalize" value="vi-VN-Neural2-D">giọng nam</option>
            </select>
        </div>
     );
}

export default Audio;