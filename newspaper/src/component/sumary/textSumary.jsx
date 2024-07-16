import React, { useState, useEffect, useRef } from 'react';
import nlp from 'compromise';
import Typed from 'typed.js';

const TextSummarizer = ({ content }) => {
  const [summary, setSummary] = useState('');
  const typedRef = useRef(null);

  const summarizeText = (text) => {
    let doc = nlp(text);
    let importantSentences = doc.sentences().out('array').slice(0, 2);
    return importantSentences.join(' ');
  };

  useEffect(() => {
    const sum = summarizeText(content);
    setSummary(sum);
  }, [content]);

  useEffect(() => {
    if (summary) {
      const options = {
        strings: [summary],
        typeSpeed: 10,
      };

      const typed = new Typed(typedRef.current, options);

      // Cleanup typed instance on unmount
      return () => {
        typed.destroy();
      };
    }
  }, [summary]);

  return (
    <div>
      <h2 className="text-2xl text-center py-1 font-bold">Tổng quan</h2>
      <div className="typed-summary" ref={typedRef}></div>
    </div>
  );
};

export default TextSummarizer;
