import React, { useState } from "react";
import "./Board.css";

function Board() {
  const [text] = useState([
    { username: "marsters", allTimeEdits: 91975, weeklyEdits: 47712 },
    { username: "ruizafon", allTimeEdits: 227767, weeklyEdits: 13505 },
    { username: "heli5m", allTimeEdits: 522083, weeklyEdits: 8409 },
    { username: "qualitylover", allTimeEdits: 304302, weeklyEdits: 6753 },
    { username: "lineker", allTimeEdits: 1422258, weeklyEdits: 6129 },
    { username: "pingu51", allTimeEdits: 439642, weeklyEdits: 5801 },
    { username: "cam1170", allTimeEdits: 14216, weeklyEdits: 4642 },
    { username: "franick", allTimeEdits: 88309, weeklyEdits: 3496 },
    { username: "knrrrzzz", allTimeEdits: 3229, weeklyEdits: 3229 },
    { username: "litemods", allTimeEdits: 10283, weeklyEdits: 3167 },
  ]);

  const maxAllTimeEdits = Math.max(...text.map((item) => item.allTimeEdits));

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
