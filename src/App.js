import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import img01 from "./assets/01.jpg";
import img02 from "./assets/02.jpg";
import img03 from "./assets/03.jpg";
import img04 from "./assets/04.jpg";
import img05 from "./assets/05.jpg";
import img06 from "./assets/06.jpg";
import ReactAudioPlayer from "react-audio-player";
import mp3 from "./assets/nhac.mp3";
import video from "./assets/video.mp4";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="App overflow-hidden">
        <div className="responsive-container-block outer-container">
          <div className="responsive-container-block inner-container">
            <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-6 wk-ipadp-5 content-container">
              <div className="content-box">
                <p className="text-blk section-head font-bold text-white text-5xl mb-0 italic">
                  2023, 10 October
                </p>
                <p className="text-blk section-head font-black text-white mb-0 italic text-9xl">
                  Happy
                </p>

                <p className="text-blk section-head font-black text-white mb-0 italic text-9xl">
                  Women's
                </p>
                <p className="text-blk section-head font-black text-white mb-0 italic text-9xl">
                  Day
                </p>

                <p className="text-blk section-body text-xl mt-6 text-white ">
                  Ngày 20/10, chúc bạn luôn mỉm cười, tỏa sáng, duyên dáng và
                  xinh đẹp trong mắt một nửa thế giới còn lại. Rất vui vì được
                  làm bạn với bạn.
                </p>
              </div>
            </div>
            <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6 team-cards-outer-container">
              <div className="responsive-container-block team-cards-inner-container">
                <div className="responsive-cell-block wk-mobile-12 wk-ipadp-10 wk-tab-8  card-container">
                  <div className="card">
                    <div className="img-box">
                      <img className="person-img" src={img01} />
                    </div>
                  </div>
                </div>
                <div className="responsive-cell-block wk-mobile-12 wk-ipadp-10 wk-tab-8  card-container">
                  <div className="card">
                    <div className="img-box">
                      <img className="person-img" src={img02} />
                    </div>
                  </div>
                </div>
                <div className="responsive-cell-block wk-mobile-12 wk-ipadp-10 wk-tab-8  card-container">
                  <div className="card">
                    <div className="img-box">
                      <img className="person-img" src={img03} />
                    </div>
                  </div>
                </div>
                <div className="responsive-cell-block wk-mobile-12 wk-ipadp-10 wk-tab-8  card-container">
                  <div className="card">
                    <div className="img-box">
                      <img className="person-img" src={img04} />
                    </div>
                  </div>
                </div>
                <div className="responsive-cell-block wk-mobile-12 wk-ipadp-10 wk-tab-8  card-container">
                  <div className="card">
                    <div className="img-box">
                      <img className="person-img" src={img05} />
                    </div>
                  </div>
                </div>
                <div className="responsive-cell-block wk-mobile-12 wk-ipadp-10 wk-tab-8  card-container">
                  <div className="card">
                    <div className="img-box">
                      <img className="person-img" src={img06} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
          rel="stylesheet"
          type="text/css"
        />
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="title">
          <ReactAudioPlayer src={mp3} autoPlay controls loop />
        </div>
      </div>
    ),
  },
  {
    path: "about",
    element: (
      <div className="h-screen relative">
        <div id="hero">
          <video id="heroVideoBg" autoPlay loop muted>
            <source type="video/mp4" src={video} />
            <source type="video/webm" src={video} />
          </video>
          <img id="heroImgBg" src="https://tinyurl.com/y5gkrvxm" alt="storm" />
        </div>
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
          rel="stylesheet"
          type="text/css"
        />
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="title">
        <ReactAudioPlayer src={mp3} autoPlay controls loop />
        </div>
       
      </div>
    ),
  },
]);

export default App;
