import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import './share.scss'
function Share({link}) {
    const handleShareLink = async ()=>{
        await navigator.clipboard.writeText(link)
    }
    const handleShareFB = async ()=> {
        if (window.FB) {
            window.FB.ui({
              method: 'share',
              href: link, // Đường dẫn bạn muốn chia sẻ
            })
          }
    }
    return ( 
        <div className="share bg-slate-200 flex w-64 p-4">
            <h1 className="share-title text-2xl font-bold  text-slate-700">Chia sẻ</h1>
            <ul className="flex items-center gap-5 justify-center flex-1">
                <li className="share-facebook cursor-pointer">
                <FontAwesomeIcon onClick={handleShareFB} className="text-xl" icon={faFacebook} />
                </li>
                <li className="share-link cursor-pointer">
                    <FontAwesomeIcon onClick={handleShareLink} className="text-xl"  icon={faLink}/>
                </li>
                
            </ul>
        </div>
     );
}

export default Share;