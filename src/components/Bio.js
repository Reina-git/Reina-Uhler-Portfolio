import React from "react";
import githubLogo from "../icon/github.svg";
import linkedInLogo from "../icon/linkedin.svg";
import youtubeLogo from "../icon/youtube.svg";

export default function Bio() {
   return (
      <>
         <h1 className="display-3 mb-1 text-center title">Reina Uhler</h1>
         <p className="lead font-weight-normal mb-4 text-center">
            Full stack developer
         </p>
         <p className="lead font-weight-normal text-center mb-4 mb-sm-5">
            <a
               href="https://github.com/Reina-git"
               className="d-inline-block"
               target="blank"
               rel="noopener noreferrer"
            >
               <img
                  src={githubLogo}
                  width="24px"
                  className="ml-4 mt-n1"
                  alt="github logo"
               />
               <span className="ml-2">Github</span>
            </a>
            <a
               href="https://www.linkedin.com/in/reina-uhler/"
               className="d-inline-block"
               target="blank"
               rel="noopener noreferrer"
            >
               <img
                  src={linkedInLogo}
                  width="20px"
                  className="ml-4 mt-n1"
                  alt="linkedin logo"
               />
               <span className="ml-2">LinkedIn</span>
            </a>
            <a
               href="https://www.youtube.com/channel/UChRKkhEx50pWOKP6xKmIf2w/featured"
               className="d-inline-block"
               target="blank"
               rel="noopener noreferrer"
            >
               <img
                  src={youtubeLogo}
                  width="28px"
                  className="ml-4 mt-1"
                  alt="youtube logo"
               />
               <span className="ml-2">YouTube</span>
            </a>
         </p>
      </>
   );
}
