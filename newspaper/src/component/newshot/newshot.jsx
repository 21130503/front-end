import arrayNewsHot from '../../store/newshot';
import ContentItem from '../content/contentItem';
import './newshot.scss'
function NewsHot() {
    const {array} = arrayNewsHot()
    console.log(array);
    return ( 
        <div className="news-hot w-full">
            <h1 className="title_news-hot text-xl font-bold">Tin tiêu điểm</h1>
            <div className="content_news-hot">
                {
                    array.map((item, key)=>{
                        return <ContentItem w='160px' h='100px'  display='block' key={key} item={item} showTitle={false}/>
                    })
                }
            </div>
        </div>
     );
}

export default NewsHot;