import React from "react";
import "./about.css";
import cardimg from "../../assets/Ellipse.png";
import heroimg from "../../assets/hero.png";

function About() {
  return (
    <>
      <div className="aboutcontainer">
        <div className="aboutsection">
          <div>
            <div className="hero">
              <img src={heroimg} alt="" />
            </div>

            <div className="about">
              <div className="leftside"></div>

              <div className="rightside">
                <h1 className="heading">About</h1>
                <p className="desc">
                  Born in Moscow on New Year’s Day in 1991, Anna Geniushene made
                  her recital debut just seven years later in the small hall of
                  the Berlin Philharmonic. She has since developed a diverse and
                  versatile career as an artist: performances in major world
                  venues such as the Town Hall in Leeds, National Concert Hall
                  in Dublin, Museum of Arts in Tel Aviv, the Konzerthaus ‘Neue
                  Welt,’ Great Hall of Moscow Conservatory, and Sala Greppi in
                  Milan; a dedication to chamber music, including piano duo
                  repertoire with her husband, Lukas Geniusas, and close
                  collaboration with Quartetto di Cremona; and the creation of
                  her own festival of collaborative music-making (‘NikoFest’).
                  During the pandemic, Anna’s pension for creativity manifested
                  in online projects, such as a series of online recitals for
                  the Vancouver Chopin Society, participation in the “Armchairs
                  Season” of the Moscow Philharmonic, and recording sessions for
                  the ConSpirito music channel on YouTube. Her debut CD was
                  released on LINN Records in March 2020. A laureate of major
                  international piano contests, she has had strong finishes at
                  the Leeds, Tchaikovsky, Busoni, and Dublin Competitions. She
                  sees her participation in the Cliburn as a “dream,” as an
                  “opportunity to be part of a very friendly community, to find
                  a new audience, and to challenge myself.” Anna graduated from
                  the Moscow Tchaikovsky Conservatory in 2015, and completed her
                  Master’s with Distinction and Advanced Diploma from the Royal
                  Academy of Music (London) in 2018. She has also been one of
                  the elite Bicentenary Scholars at the Academy under the
                  tutelage of Christopher Elton. https://geniushene.com.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={cardimg} alt="" className="cardimg" />

          <h3 className="cardtitle">Anna Geniushene</h3>

          <div className="cardinfo">
            <ul>
              <li>Age:13</li>
              <li>Country:Sudia</li>
              <li>Compettetion</li>
            </ul>
          </div>

          <div className="countinfo">
            <div className="countdiv">
              <h4>200</h4>
              <p>post</p>
            </div>
            <div className="countdiv">
              <h4>150</h4>
              <p>live concerts</p>
            </div>{" "}
            <div className="countdiv" id="lastdiv">
              <h4>200</h4>
              <p>Followers</p>
            </div>
          </div>

          <button>Follow</button>
        </div>
      </div>
    </>
  );
}

export default About;
