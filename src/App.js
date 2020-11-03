import React from "react";
import "./style/master.scss";
import Project from "./components/Project";
import { projects } from "./data/projects";
import githubLogo from "./icon/github.svg";
import linkedInLogo from "./icon/linkedin.svg";
import youtubeLogo from "./icon/youtube.svg";
import starIcon from "./icon/star.svg";
import validationVideo from "./image/validationOfEmailAndPasswordOnAccountCreation.webp";
import crowdTagVideo from "./image/walkthroughOfCrowdTagPrototype.webp";
import linkIcon from "./icon/link.svg";

console.log(projects);

function App() {
   return (
      <div className="container">
         <div className="row mt-2">
            <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
               <h1 className="display-3 mb-1 text-center title">Reina Uhler</h1>
               <p className="lead font-weight-normal mb-4 text-center">
                  Full stack developer
               </p>
               <p className="lead font-weight-normal text-center mb-4 mb-sm-5">
                  <a href="www.google.com" className="d-inline-block">
                     <img
                        src={githubLogo}
                        width="24px"
                        className="ml-4 mt-n1"
                        alt="github logo"
                     />
                     <span className="ml-2">Github</span>
                  </a>
                  <a href="www.google.com" className="d-inline-block">
                     <img
                        src={linkedInLogo}
                        width="20px"
                        className="ml-4 mt-n1"
                        alt="linkedin logo"
                     />
                     <span className="ml-2">LinkedIn</span>
                  </a>
                  <a href="www.google.com" className="d-inline-block">
                     <img
                        src={youtubeLogo}
                        width="28px"
                        className="ml-4 mt-1"
                        alt="youtube logo"
                     />
                     <span className="ml-2">YouTube</span>
                  </a>
               </p>
               ​
               <div className="row mb-2">
                  <div className="col-12 col-sm-8">
                     <input
                        id="search-projects"
                        className="form-control"
                        placeholder="Search projects"
                     />
                  </div>
                  <div className="col-12 col-sm-4">
                     <div className="custom-control custom-checkbox custom-control-inline float-right mr-0 mt-2">
                        <input
                           type="checkbox"
                           className="custom-control-input"
                           id="advanced-view"
                        />
                        <label
                           className="custom-control-label"
                           htmlFor="advanced-view"
                        >
                           Advanced view
                        </label>
                     </div>
                  </div>
               </div>
               ​
               <div className="row mb-5">
                  <div className="col-12">
                     <div className="custom-control custom-radio custom-control-inline">
                        <input
                           type="radio"
                           id="most-recent"
                           name="order-projects"
                           className="custom-control-input"
                        />
                        <label
                           className="custom-control-label"
                           htmlFor="most-recent"
                        >
                           Most recent
                        </label>
                     </div>
                     <div className="custom-control custom-radio custom-control-inline">
                        <input
                           type="radio"
                           id="most-popular"
                           name="order-projects"
                           className="custom-control-input"
                        />
                        <label
                           className="custom-control-label"
                           htmlFor="most-popular"
                        >
                           Most popular
                        </label>
                     </div>
                  </div>
               </div>
               ​{/* <!-- Start Project Component --> */}
               <div className="row mb-5">
                  <div className="col-12 mb-2">
                     <a href="" className="text-reset">
                        <h3 className="font-weight-normal">
                           Validation of Email and Password on Account Creation
                        </h3>
                     </a>
                  </div>
                  <div className="col-12 col-md-4">
                     <a href="https://www.youtube.com/watch?v=7upUHKgsLLI">
                        <img
                           src={validationVideo}
                           width="510px"
                           className="img-fluid"
                           alt="Validation of Email and Password on Account Creation"
                        />
                     </a>
                  </div>
                  <div className="col-12 col-md-8 mt-3 mt-md-n1">
                     <a
                        href="https://www.youtube.com/watch?v=7upUHKgsLLI"
                        className="text-decoration-none text-reset"
                     >
                        <p>
                           <img src={starIcon} width="16px" alt="star icon" />
                           <img src={starIcon} width="16px" alt="star icon" />
                           <img src={starIcon} width="16px" alt="star icon" />
                           <img src={starIcon} width="16px" alt="star icon" />
                           <span className="ml-2">
                              Password and email validation following best
                              practices. (2 min.)
                           </span>
                        </p>
                        <p>Oct. 30, 2020</p>
                     </a>
                     <a href="https://github.com/Reina-git/Crowd-tag">
                        <img
                           src={linkIcon}
                           width="16px"
                           className="mr-2"
                           alt="link icon"
                        />
                        https://github.com/Reina-git/C...
                     </a>
                  </div>
               </div>
               {/* <!-- End Project Component --> */}​
               {/* <!-- Start Project Component --> */}
               <div className="row mb-5">
                  <div className="col-12 mb-2">
                     <a
                        href="https://www.youtube.com/watch?v=LN02lBrDdt4&t=1s"
                        className="text-reset"
                     >
                        <h3 className="font-weight-normal">
                           Walkthrough of Crowd Tag prototype
                        </h3>
                     </a>
                  </div>
                  <div className="col-12 col-md-4">
                     <a href="https://www.youtube.com/watch?v=LN02lBrDdt4&t=1s">
                        <img
                           src={crowdTagVideo}
                           width="510px"
                           className="img-fluid"
                           alt="Walkthrough of Crowd Tag prototype"
                        />
                     </a>
                  </div>
                  <div className="col-12 col-md-8 mt-3 mt-md-n1">
                     <a
                        href="https://www.youtube.com/watch?v=LN02lBrDdt4&t=1s"
                        className="text-decoration-none text-reset"
                     >
                        <p>
                           <img src={starIcon} width="16px" alt="star icon" />
                           <img src={starIcon} width="16px" alt="star icon" />
                           <img src={starIcon} width="16px" alt="star icon" />
                           <img src={starIcon} width="16px" alt="star icon" />
                           <img src={starIcon} width="16px" alt="star icon" />
                           <span className="ml-2">
                              Prototype of Crowd Tag, an app that helps
                              libraries crowdsource metadata for their
                              photographic collections. (3 min.)
                           </span>
                        </p>
                        <p>Oct. 28, 2020</p>
                     </a>
                     <a href="https://github.com/Reina-git/Crowd-tag">
                        <img
                           src={linkIcon}
                           width="16px"
                           className="mr-2"
                           alt=""
                        />
                        https://github.com/Reina-git/C...
                     </a>
                  </div>
               </div>
               {/* <!-- End Project Component --> */}
            </div>
         </div>
      </div>
   );
}

export default App;
