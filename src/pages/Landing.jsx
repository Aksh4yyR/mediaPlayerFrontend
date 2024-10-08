import React from "react";
import { Link } from "react-router-dom";
import landingImg from "../assets/music1.gif";
import im1 from "../assets/ms-2.jpg"
import im2 from "../assets/ms-3.jpg"
import im3 from "../assets/ms-4.jpg"
import Card from "react-bootstrap/Card";

const Landing = () => {
  return (
    <div style={{ paddingTop: "80px" }} className="container">
      landing
      {/*Landing head*/}
      <div className="row align-items-center">
        <div className="col-lg-5">
          <h3>
            Welcome to <span className="text-warning">Media Player</span>
          </h3>
          <p style={{ textAlign: "justify" }} className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            ea cupiditate, exercitationem et libero quidem tempora blanditiis.
            Saepe reprehenderit qui tenetur fugiat explicabo eligendi, omnis
            cupiditate impedit, itaque quisquam sapiente. Omnis eius debitis,
            aliquid cum obcaecati deleniti mollitia aut voluptatem ipsa
            perferendis excepturi ea ratione, nulla, quasi eligendi amet fugit
            nihil! Delectus cupiditate ipsam vitae perspiciatis ipsum sit, nobis
            aut?
          </p>
          <Link to={"/home"} className="btn btn-info">
            Get Started
          </Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img src={landingImg} alt="" />
        </div>
      </div>
      {/* Features */}
      <div className="my-5 ">
        <h3 className="text-center">Features</h3>
        <div className="row mt-5">
          <div className="col-lg-4  ">
            <Card className="p-2" style={{ width: "18rem" }}>
              <Card.Img height={'250px'} variant="top" src={im1}/>
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                 User can upload ,view and remove videos
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
          <Card className="p-2" style={{ width: "18rem" }}>
              <Card.Img height={'250px'}  variant="top" src={im2}/>
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                User can upload ,view and remove videos
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
          <Card className="p-2" style={{ width: "18rem" }}>
              <Card.Img height={'250px'}  variant="top" src={im3}/>
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                User can upload ,view and remove videos
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* youtube */}
      <div className="my-5 row align-items-center border rounded p-5">
        <div className="col-lg-5">
          <h3 className="text-warning">Simple,Fast and Powerfull</h3>
          <p style={{textAlign:'justify'}}> <span className="fs-5">Play Everything</span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio laudantium fugit saepe perferendis nesciunt qui facere ex suscipit fuga atque itaque nulla, excepturi modi provident quidem, adipisci nihil pariatur maxime. </p>

          <p style={{textAlign:'justify'}}> <span className="fs-5">Categories Videos</span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio laudantium fugit saepe perferendis nesciunt qui facere ex suscipit fuga atque itaque nulla, excepturi modi provident quidem, adipisci nihil pariatur maxime. </p>

          <p style={{textAlign:'justify'}}> <span className="fs-5">Managing History</span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio laudantium fugit saepe perferendis nesciunt qui facere ex suscipit fuga atque itaque nulla, excepturi modi provident quidem, adipisci nihil pariatur maxime. </p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
        <iframe width="514" height="414" src="https://www.youtube.com/embed/S1jo8K4kDJc" title="Illuminati (From &quot;Aavesham&quot;)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
};

export default Landing;
