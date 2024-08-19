import React from "react";
import "./Join.css";
function Join(props) {
  return (
    <section className="sc7">
      <div className="sc7_content">
        <div className="sc7_title">Join Today</div>
        <div className="sc7_txt">
          <div className="sc7_txt1">
            <p className="sc7_main">
              {" "}
              Get access to maintain your own <em>custom personal lists</em>
              ", "<em>track what you've seen</em>and search and filter for{" "}
              <em>what to watch next</em>—regardless if it's in theatres, on TV
              or available on popular streaming services like Netflix, Amazon
              Prime Video, Disney Plus, wavve, and Watcha.
            </p>
            <p className="sc7_button">
              <a
                href="/signup?language=ko"
                class="rounded background_color border_color purple"
              >
                Sign Up
              </a>
            </p>
          </div>
          <div className="sc7_txt2">
            <ul>
              <li>Enjoy TMDB ad free</li>
              <li>Maintain a personal watchlist</li>
              <li>
                Filter by your subscribed streaming services and find something
                to watch
              </li>
              <li>Log the movies and TV shows you've seen</li>
              <li>Build custom lists</li>
              <li>Contribute to and improve our database</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Join;
