import React, { useState, useEffect } from "react";

function Test() {
  const [num, setnum] = useState(0);
  const [text, settext] = useState("");

  useEffect(() => {
    setnum(1);
    settext(`num의 값은 ${num}  입니다`);
    console.log(num);
    console.log(text);
  }, []);

  useEffect(() => {
    settext(`num의 값은 ${num}  입니다`);
    console.log(text);
  }, [num]);

  return (
    <div className="container">
      <div className="content">test</div>
      <h1>{num}</h1>
      <h1>{text}</h1>
    </div>
  );
}

export default Test;
