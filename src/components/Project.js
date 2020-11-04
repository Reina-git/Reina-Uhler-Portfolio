import React from "react";
import starIcon from "../icon/star.svg";
import linkIcon from "../icon/link.svg";
import { truncate } from "../utils/helpers";
export default function Project(props) {
   console.log(props);
   return (
      <div className="row mb-5">
         <div className="col-12 mb-2">
            <a href={props.project.youtubeUrl} className="text-reset">
               <h3 className="font-weight-normal">{props.project.title}</h3>
            </a>
         </div>
         <div className="col-12 col-md-4">
            <a href={props.project.youtubeUrl}>
               <img
                  src={require("../image/" + props.project.image)}
                  width="510px"
                  className="img-fluid"
                  alt={props.project.title}
               />
            </a>
         </div>
         <div className="col-12 col-md-8 mt-3 mt-md-n1">
            <a
               href={props.project.youtubeUrl}
               className="text-decoration-none text-reset"
            >
               <p>
                  <img src={starIcon} width="16px" alt="star icon" />
                  <img src={starIcon} width="16px" alt="star icon" />
                  <img src={starIcon} width="16px" alt="star icon" />
                  <img src={starIcon} width="16px" alt="star icon" />
                  <span className="ml-2">
                     {props.project.desc}({props.project.totalMinutes} min.)
                  </span>
               </p>
               <p>{props.project.postedAt}</p>
            </a>
            <a href={props.project.githubUrl}>
               <img
                  src={linkIcon}
                  width="16px"
                  className="mr-2"
                  alt="link icon"
               />
               {truncate(props.project.githubUrl, 33)}
            </a>
         </div>
      </div>
   );
}
