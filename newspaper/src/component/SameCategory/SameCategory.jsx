import arrayNewsHot from '../../store/newshot';
import './same.scss'
function SameCategory() {
    const { array} = arrayNewsHot()
    console.log(array);
    return ( 
        <div className="same-category mt-8 px-4 py-8">
            <div className='top'>
                <h1 className='uppercase text-white text-2xl font-semibold'>Cùng chuyên mục</h1>
            </div>
        </div>
     );
}

export default SameCategory;