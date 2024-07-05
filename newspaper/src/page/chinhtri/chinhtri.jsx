
import {useEffect, useState } from "react";
import { useFetch } from "../../hook/fetch";
import HotEvent from "../../component/hot-event/hot-event";
import Story from "../../component/story/story";
import ContentItem from "../../component/content/contentItem";
import {useDispatch} from 'react-redux'
import { setData } from "../../redux/storyStore";
import { imgRegex, linkRegex } from "../../utils/regex";
import useStory from "../../store/story-store";
import Render from "../../render/render";
function ChinhTri({rss}) {
    return <Render rss={rss}/>
}

export default ChinhTri;