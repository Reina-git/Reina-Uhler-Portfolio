import React from "react";
import starIcon from "../icon/star.svg";
import linkIcon from "../icon/link.svg";
import { truncate } from "../utils/helpers";
import formatDate from "date-fns/format";
import getCssClasses from "classnames";

export default class Project extends React.Component {
   constructor() {
      super();
      this.state = {
         isHoveredOver: false,
      };
   }

   setIsHoveredOver(isHoveredOver) {
      this.setState({ isHoveredOver: isHoveredOver });
   }

   displayStars() {
      const rating = this.props.project.rating;
      let stars = [];
      for (let i = 0; i < rating; i++) {
         stars = stars.concat(
            <img src={starIcon} width="16px" alt="star icon" key={i} />
         );
      }
      return stars;
   }

   displayAdvancedLink() {
      if (this.props.isAdvanced) {
         <a href={this.props.project.githubUrl}>
            <img src={linkIcon} width="16px" className="mr-2" />
            {truncate(this.props.project.githubUrl, 33)}
         </a>;
      }
   }

   render() {
      return (
         <div className="row mb-5">
            <div
               className="col-12 mb-2"
               onMouseEnter={() => {
                  this.setIsHoveredOver(true);
               }}
               onMouseLeave={() => {
                  this.setIsHoveredOver(false);
               }}
            >
               <a
                  href={this.props.project.youtubeUrl}
                  className={getCssClasses("text-reset text-decoration-none", {
                     "text-underline": this.state.isHoveredOver,
                  })}
               >
                  <h3 className="font-weight-normal">
                     {this.props.project.title}
                  </h3>
               </a>
            </div>
            <div
               className="col-12 col-md-4"
               onMouseEnter={() => {
                  this.setIsHoveredOver(true);
               }}
               onMouseLeave={() => {
                  this.setIsHoveredOver(false);
               }}
            >
               <a href={this.props.project.youtubeUrl}>
                  <img
                     src={require("../image/validation-of-email-and-password-on-account-creation.webp")}
                     // src={require("../image/" + this.props.project.image)}
                     width="510px"
                     className="img-fluid"
                     alt={this.props.project.title}
                  />
               </a>
            </div>
            <div className="col-12 col-md-8 mt-3 mt-md-n1">
               <a
                  href={this.props.project.youtubeUrl}
                  className="text-decoration-none text-reset"
                  onMouseEnter={() => {
                     this.setIsHoveredOver(true);
                  }}
                  onMouseLeave={() => {
                     this.setIsHoveredOver(false);
                  }}
               >
                  <p>
                     {this.displayStars()}
                     <span className="ml-2">
                        {this.props.project.desc}(
                        {this.props.project.totalMinutes} min.)
                     </span>
                  </p>
                  <p>
                     {formatDate(this.props.project.postedAt, "MMM. d, yyyy")}
                  </p>
               </a>
               {this.displayAdvancedLink()}
            </div>
         </div>
      );
   }
}
