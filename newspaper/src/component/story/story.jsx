import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectImageStory, selectLinkStory } from "../../redux/storyStore";
import useStory from "../../store/story-store";
function Story({}) {
    const {imageStory, linkStory, title} = useStory()
    console.log(imageStory);
    return ( 
        <div className="story">
           <Link className="cursor-pointer" to={linkStory}>
                <div className="main-content">
                    <img src={imageStory} alt="abnc" />
                </div>
                <h1 className="text-xl font-semibold my-3 hover:text-red-400 hover:transition-all">{title}</h1>
           </Link>
        </div>
     );
}

export default Story;