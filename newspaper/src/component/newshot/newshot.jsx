import arrayNewsHot from '../../store/newshot';
import ContentItem from '../content/contentItem';
import './newshot.scss'
function NewsHot() {
    const {array} = arrayNewsHot()
    return ( 
        <div className="news-hot w-full">
            <h1 className="title_news-hot text-xl font-bold py-2 pl-2">Tin tiêu điểm</h1>
            <div className="content_news-hot mt-6">
                {
                    array.map((item, key)=>{
                        return <ContentItem showTime={false} ml_content='ml-0' w='160px' h='100px'  display='block' key={key} item={item} showTitle={false}/>
                    })
                }
            </div>
        </div>
     );
}

export default NewsHot;