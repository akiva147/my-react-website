import React, { useState, useEffect } from "react";
import axios from "axios";
import "./academicwriting.css";
//לקחת כתבות גנריות ולשים אותם בסוג של מערך, ולעשות קומפוננתות שמציגות את הכתבות באתר
//ולהוסיף אופציות סינון לפי כל מיני פרמטרים שיש לי בכתבה
//אני חושב להשתמש בפרופס בתור מסננים

function AcademicWriting() {
  let ACADEMIC_WRITING = [];
  const [AcademicWritingArray, setAcademicWritingArray] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(async () => {
    const academic_writing = (
      await axios.get("http://localhost:5000/academicwriting")
    ).data;

    ACADEMIC_WRITING = academic_writing;
    setAcademicWritingArray(academic_writing);
  });

  const handleClick_length = () => {
    setAcademicWritingArray((prevArr) => {
      return prevArr.sort((a, b) => b.length - a.length);
    });
  };

  const handleClick_f_to_l = () => {
    setAcademicWritingArray(() => {
      return [...ACADEMIC_WRITING];
    });
  };

  return (
    <div className="academicwriting">
      <div>
        <h1 align="center"> הנה כמה מכתבי האקדמאים </h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <br />
        Filter:
        <button value="by length" onClick={handleClick_length}>
          by length
        </button>
        <button value="first to last" onClick={handleClick_f_to_l}>
          first to last
        </button>
        <ul align="center">
          {AcademicWritingArray.filter((article) => {
            if (searchTerm === "" || article.includes(searchTerm)) {
              return article;
            }
          }).map((article, index) => (
            <li key={index} value={article.length} index={index}>
              <br />
              {article}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AcademicWriting;
