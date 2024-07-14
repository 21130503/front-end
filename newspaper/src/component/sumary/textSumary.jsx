import axios from "axios";
import { useState } from "react";

function TextSummary({ textToSummarize }) {
  const [summary, setSummary] = useState("");

  const handleSubmit = () => {
    const options = {
      method: "POST",
      url: "https://api.gemini.ai/v1/summarization",
      headers: {
        Authorization: `Bearer YOUR_API_KEY`,
        "Content-Type": "application/json",
      },
      data: {
        text: textToSummarize,
      },
    };

    axios(options)
      .then((response) => {
        setSummary(response.data.summary);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return <div className="summary"></div>;
}

export default TextSumary;
