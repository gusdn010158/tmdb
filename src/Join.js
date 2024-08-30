import React from "react";
import "./Join.css";

function JoinText() {
  return (
    <div className="sc7_txt1">
      <p className="sc7_main">
        Get access to maintain your own <em>custom personal lists</em>,{" "}
        <em>track what you've seen</em> and search and filter for{" "}
        <em>what to watch next</em> — regardless if it's in theatres, on TV, or
        available on popular streaming services like Netflix, Amazon Prime
        Video, Disney Plus, wavve, and Watcha.
      </p>
      <p className="sc7_button">
        <a
          href="/signup?language=ko"
          className="rounded background_color border_color purple"
        >
          Sign Up
        </a>
      </p>
    </div>
  );
}

function JoinBenefits() {
  const benefits = [
    "Enjoy TMDB ad free",
    "Maintain a personal watchlist",
    "Filter by your subscribed streaming services and find something to watch",
    "Log the movies and TV shows you've seen",
    "Build custom lists",
    "Contribute to and improve our database",
  ];

  return (
    <div className="sc7_txt2">
      <ul>
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </div>
  );
}

function Join() {
  return (
    <section className="sc7">
      <div className="sc7_content">
        <div className="sc7_title">Join Today</div>
        <div className="sc7_txt">
          <JoinText />
          <JoinBenefits />
        </div>
      </div>
    </section>
  );
}

export default Join;
