const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

app.post("/get_article", async (req, res) => {
  const url = req.body.url;
  console.log(req.body);
  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    const response = await axios.get(url);
    const html = await response.data;
    const $ = cheerio.load(html);
    console.log("$", $);
    // Cập nhật selector theo cấu trúc HTML của trang web
    const articleContent = await $("div.article__body.cms-body").text().trim();
    console.log("a" + articleContent);
    if (!articleContent) {
      return res.status(404).json({ error: "Article content not found" });
    }

    res.json({ content: articleContent });
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
