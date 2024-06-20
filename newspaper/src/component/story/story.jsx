import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectImageStory, selectLinkStory } from "../../redux/storyStore";
import useStory from "../../store/story-store";
function Story({defaultPage = 'other'}) {
    const {imageStory, linkStory, title, time, description} = useStory()
    return ( 
        <div className="story">
           {
            defaultPage === 'other' ? (
                <Link className="cursor-pointer" to={linkStory}>
                    <div className="main-content">
                        <img src={imageStory} alt="abnc" />
                    </div>
                    <h1 className="text-xl font-semibold my-3 hover:text-red-400 hover:transition-all">{title}</h1>
                </Link>
            ): (
                <Link className="story-home flex">
                    <div className="img-story w-6/12">
                        <img src={imageStory} alt="story"  className="w-full"/>
                    </div>
                    <div className="content-story flex-1 ml-5">
                        <h1 className="title-story text-2xl font-bold">{title}</h1>
                        <p className="text-xl italic text-slate-400 my-4">{time}</p>
                        <p className="content-story text-lg">{description}</p>
                    </div>
                </Link>
            )
           }
        </div>
     );
}

export default Story;