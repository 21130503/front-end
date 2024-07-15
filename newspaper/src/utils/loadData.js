import axios from "axios";
function convertNewlinesToBreaks(content) {
  // Thay thế các dấu xuống dòng (\n) liên tiếp bằng một dấu <br>
  var replaced = content.replace(/\n+/g, "<br className= 'my-2'>");

  // Thay thế mỗi trường hợp có hai <br> liên tiếp thành chỉ một <br>
  replaced = replaced.replace(/(<br>)+/g, "<br>");
  // Loại bỏ <br> ở đầu và cuối nếu có
  replaced = replaced.replace(/^<br>|<br>$/g, "");

  return replaced;
}
function cleanContent(content) {
  content = content.replace(
    `if(typeof Web_AdsArticleMiddle2 != 'undefined'){window.CMS_BANNER.pushAds(Web_AdsArticleMiddle2, 'adsWeb_AdsArticleMiddle2');}else{document.getElementById('adsWeb_AdsArticleMiddle2').style.display = "none";}`,
    ""
  );
  content = content.replace(
    `window.addEventListener('load', function(){
  if(typeof Web_AdsArticleAfterBody != 'undefined'){window.CMS_BANNER.pushAds(Web_AdsArticleAfterBody, 'adsWeb_AdsArticleAfterBody');}else{document.getElementById('adsWeb_AdsArticleAfterBody').style.display = "none";}
  });`,
    ""
  );
  content = content.replace(
    `window.addEventListener('load', function(){ if(typeof Web_AdsArticleMiddle1 != 'undefined'){window.CMS_BANNER.pushAds(Web_AdsArticleMiddle1, 'adsWeb_AdsArticleMiddle1');}else{document.getElementById('adsWeb_AdsArticleMiddle1').style.display = "none";} });`,
    ""
  );
  content = content.replace(
    `window.addEventListener('load', function(){ if(typeof Web_AdsArticleMiddle != 'undefined'){window.CMS_BANNER.pushAds(Web_AdsArticleMiddle, 'adsWeb_AdsArticleMiddle');}else{document.getElementById('adsWeb_AdsArticleMiddle').style.display = "none";} });
  `,
    ""
  );
  return content;
}
export const loadContent = async (link) => {
  try {
    const response = await axios.get(link);
    const html = await response.data;
    // const $ = cheerio.load(html);
    // console.log("$", $);
    // // Cập nhật selector theo cấu trúc HTML của trang web
    // const articleContent = await $("div.article__body.cms-body").text().trim();
    // console.log("a" + articleContent);
    // if (!articleContent) {
    //   return res.status(404).json({ error: "Article content not found" });
    // }

    // res.json({
    //   content: convertNewlinesToBreaks(cleanContent(articleContent)),
    // });
  } catch (error) {
    console.log(error.toString());
  }
};
