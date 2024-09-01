import React, { useState, useEffect } from "react";
import "./Board.css";
import axios from "axios";
function Board() {
  const [text, setText] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/text")
      .then((response) => {
        setText(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const maxAllTimeEdits =
    text.length > 0 ? Math.max(...text.map((item) => item.allTimeEdits)) : 1;

  return (
    <section className="sc8">
      <div className="sc8_1">
        <div className="sc8_2">
          <div className="sc8_3">
            <div className="sc8_header">
              <h2>리더보드</h2>
              <div>
                <p>
                  <span className="span1"></span>All Time Edits
                </p>
                <p>
                  <span className="span2"></span>Edits This Week
                </p>
              </div>
            </div>
            <div className="sc8_main">
              <ol className="sc8_ol">
                {text.map((item, index) => (
                  <li key={index}>
                    <div className="circle"></div>
                    <div className="sc8_text">
                      <h2>{item.username}</h2>
                      <div className="text_line">
                        <div
                          style={{
                            width: `${
                              (item.allTimeEdits / maxAllTimeEdits) * 15000
                            }%`,
                          }}
                        ></div>
                        <h4>{item.allTimeEdits}</h4>
                      </div>
                      <div className="text_line2">
                        <div
                          style={{
                            width: `${
                              (item.weeklyEdits / maxAllTimeEdits) * 50000
                            }%`,
                          }}
                        ></div>
                        <h4>{item.weeklyEdits}</h4>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Board;
