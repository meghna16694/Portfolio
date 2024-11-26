import React from 'react';
import img11 from '../component/img11.png';
import img12 from '../component/img12.png';
import img13 from '../component/img13.png';
import img14 from '../component/img14.png';
import img15 from '../component/img14.png';

const Projects = () => {
  return (
    <>
      <div className="container projects my-3" id='Projects'>
        <h1>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-item-center">
          <div className="col-md-4 my-3">
            <div className="card bg-dark text-light" style={{ width: "18rem" , border:"1px solid yellow",boxShadow:"5px 5px 10px 0px rgba(101, 175, 10, 0.5)",}}
             data-aos = "flip-right"
             data-aos-duration = "1000"
             >

              <div className="img d-flex justify-content-center align-item-center p-3">
              <img src={img11} className="card-img-top" alt="..." style={{width :"250px",height:"200px",border:"2px solid yellow",borderRadius:"10px"}}/>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">Zee News </h5>
                <p className="card-text">
                  Zee News website using node.js using API 
                </p>

                <a href="D:\frontend project\portfolio project\portfolio-project"   target="_blank"  rel="noopener noreferrer" className="btn btn-primary">
                 Demo
                </a>

                <a href="vscode://file/D:/frontend project/portfolio project" className="btn btn-warning ms-3">
                 Code
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 my-3">
            <div className="card bg-dark text-light" style={{ width: "18rem" , border:"1px solid yellow",boxShadow:"5px 5px 10px 0px rgba(101, 175, 10, 0.5)",}}
             data-aos = "flip-right"
             data-aos-duration = "1000"
             >

              <div className="img d-flex justify-content-center align-item-center p-3">
              <img src={img12} className="card-img-top" alt="..." style={{width :"250px",height:"200px",border:"2px solid yellow",borderRadius:"10px"}}/>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">Book my Show</h5>
                <p className="card-text">
                  Book my Show website using node.js with CRUD
                </p>

                <a href="D:\node\Book my Show\Book my Show"   target="_blank"  rel="noopener noreferrer" className="btn btn-primary">
                 Demo
                </a>

                <a href="vscode://file/D:/node/book my show" className="btn btn-warning ms-3">
                 Code
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 my-3">
            <div className="card bg-dark text-light" style={{ width: "18rem" , border:"1px solid yellow",boxShadow:"5px 5px 10px 0px rgba(101, 175, 10, 0.5)",}} 
            data-aos = "flip-right"
            data-aos-duration = "1000"
            >

              <div className="img d-flex justify-content-center align-item-center p-3">
              <img src={img13} className="card-img-top" alt="..." style={{width :"250px",height:"200px",border:"2px solid yellow",borderRadius:"10px"}}/>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">Pizza House</h5>
                <p className="card-text">
                 Pizza House website including slider and using HTML and CSS
                </p>

                <a href="D:/Meghna__Exam1/index.html " target="_blank"  rel="noopener noreferrer" className="btn btn-primary">
                 Demo
                </a>

                
                <a href="vscode://file/D:/Meghna__Exam1" className="btn btn-warning ms-3">
                 Code
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 my-3">
            <div className="card bg-dark text-light" style={{ width: "18rem" , border:"1px solid yellow",boxShadow:"5px 5px 10px 0px rgba(101, 175, 10, 0.5)",}}
            data-aos = "flip-right"
            data-aos-duration = "1000"
            >

              <div className="img d-flex justify-content-center align-item-center p-3">
              <img src={img14} className="card-img-top" alt="..." style={{width :"250px",height:"200px",border:"2px solid yellow",borderRadius:"10px"}}/>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">Spotify</h5>
                <p className="card-text">
                  Spotify using Bootstrap
                </p>

                <a href="file:///D:/Bootstrap/Spotify%20Project/player1.html" className="btn btn-primary">
                 Demo
                </a>

                <a href="vscode://file/D:/Bootstrap/Spotify Project" className="btn btn-warning ms-3">
                 Code
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 my-3">
            <div className="card bg-dark text-light" style={{ width: "18rem" , border:"1px solid yellow",boxShadow:"5px 5px 10px 0px rgba(101, 175, 10, 0.5)",}}
            data-aos = "flip-right"
            data-aos-duration = "1000"
            >

              <div className="img d-flex justify-content-center align-item-center p-3">
              <img src={img15} className="card-img-top" alt="..." style={{width :"250px",height:"200px",border:"2px solid yellow",borderRadius:"10px"}}/>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">Trends</h5>
                <p className="card-text">
                 Trends website using HTML , CSS and Bootstrap
                </p>

                <a href="file:///D:/Weekly%20task/day%2012%20webpage/index.html" className="btn btn-primary">
                 Demo
                </a>

                <a href="vscode://file/D:/Weekly task/day 12 webpage" className="btn btn-warning ms-3">
                 Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
