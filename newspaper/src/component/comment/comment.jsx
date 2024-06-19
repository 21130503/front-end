import './comment.scss'
function Comment() {
    return ( 
        <div className="comment">
            <h1 className="comment-title text-xl font-bold mb-6 text-slate-600">
                Bình luận
            </h1>
            <div className="box-cmt w-full">
                <textarea name="" placeholder="*Ý kiến của bạn sẽ được biên tập trước khi đăng. Xin vui lòng gõ tiếng việt có dấu" 
                className="text-slate-300 px-5 py-4 w-full" id=""></textarea>
            </div>
            <div className='submit flex justify-end mt-5'>
            <button className='text-white px-2 py-1'>Gửi bình luận</button>
            </div>
        </div>
     );
}

export default Comment;