import React from "react";

function LandingPage() {
  return (
    <section>
      <section className="section1">
        <div className="description">
          <h2 className="lead">Hacker News</h2>
          <p className="sub-text">Work smarter, track your chores</p>
          <p className="second-text">
            Are you a web developer or a tech enthusiast? This is the best place
            to keep yourself informed of latest trends and developments in the
            tech world. Hacker News keeps you abreast of latest happenings in an
            engaging way. The top 20 headlines symbolizes the hottest topics and
            trends in the I.T world.
          </p>
          <div className="brand">
            <img
              className="google"
              src="/Pictures/aivalable-on-the-app-store-2.svg"
              alt=""
            />
            <img
              className="google"
              src="/Pictures/google-play-badge.svg"
              alt=""
            />
          </div>
        </div>

        <div className="image">
          <img
            src="/Pictures/marvin-meyer-SYTO3xs06fU-unsplash.jpg"
            className="pics"
            alt=""
          />
        </div>
      </section>

      <section className="section2">
        <div className="narration">
          <p className="txt">
            At Hacker News we monitor tech coverage from hacker noon, tech
            crunch and Digital Trends so you don't have to break a sweat 📰.
          </p>
        </div>
      </section>

      <section className="section4">
        <div className="narration1">
          <p className="txt">
            Hacker News is a community focused webpage. We are the go-to guys
            for reliable information on HTML, CSS, JAVASCRIPT, PYTHON, AND C++
            💻.
          </p>
        </div>
      </section>

      <section className="section5">
        <div className="narration2"></div>
        <div>
          <img
            className="picture"
            src="/Pictures/ales-nesetril-Im7lZjxeLhg-unsplash.jpg"
            alt=""
          />
        </div>
      </section>
    </section>
  );
}

export default LandingPage;
