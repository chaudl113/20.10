import React from "react";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import img01 from "./assets/01.jpg";
import img02 from "./assets/02.jpg";
import img03 from "./assets/03.jpg";
import img04 from "./assets/04.jpg";
import img05 from "./assets/05.jpg";
import img06 from "./assets/06.jpg";
import mp3 from "./assets/nhac.mp3";
import button from "./assets/play1.png";
import video from "./assets/video.mp4";

function App() {
  const newAudio = new Audio(mp3);

  const handlePlayAudio = () => {
    console.log(newAudio.paused);
    newAudio.play();
  };

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
                    2023, 20 October
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
                    Chúc 20/10 chị/em sẽ luôn là một cô gái thân thiện, hòa
                    đồng, nở nụ cười ấm áp và lạc quan với mọi người dù trong
                    bất kỳ hoàn cảnh nào. Và chúc chị/em sẽ giữ được tinh thần
                    lạc quan, ý chí kiên cường để có thể sống cuộc đời hạnh
                    phúc.
                  </p>
                </div>
              </div>
              <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6 team-cards-outer-container">
                <div className="responsive-container-block team-cards-inner-container">
                  <div className="responsive-cell-block wk-mobile-12 wk-ipadp-10 wk-tab-8  card-container">
                    <div className="card">
                      <div className="img-box">
                        <img
                          className="person-img"
                          src={img01}
                          alt="description of image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="responsive-cell-block wk-mobile-12 wk-ipadp-10 wk-tab-8  card-container">
                    <div className="card">
                      <div className="img-box">
                        <img
                          className="person-img"
                          src={img02}
                          alt="description of image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="responsive-cell-block wk-mobile-12 wk-ipadp-10 wk-tab-8  card-container">
                    <div className="card">
                      <div className="img-box">
                        <img
                          className="person-img"
                          src={img03}
                          alt="description of image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="responsive-cell-block wk-mobile-12 wk-ipadp-10 wk-tab-8  card-container">
                    <div className="card">
                      <div className="img-box">
                        <img
                          className="person-img"
                          src={img04}
                          alt="description of image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="responsive-cell-block wk-mobile-12 wk-ipadp-10 wk-tab-8  card-container">
                    <div className="card">
                      <div className="img-box">
                        <img
                          className="person-img"
                          src={img05}
                          alt="description of image"
                        />
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
            <Link
              to="/about"
              onClick={handlePlayAudio}
              style={{ fontWeight: "bold" }}
            >
              <img src={button} style={{ margin: "auto", color: "white" }} />
            </Link>
          </div>

          <div className="title-logo">
            <img
              
              src="https://trackify.vn/wp-content/uploads/2020/04/Trackify-White-Small-Logo.png"
            />
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
            <img
              id="heroImgBg"
              src="https://tinyurl.com/y5gkrvxm"
              alt="storm"
            />
          </div>
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
            rel="stylesheet"
            type="text/css"
          />
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          {/* <div id="title">
            <ReactAudioPlayer src={mp3} autoPlay controls loop />

            </div> */}
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
