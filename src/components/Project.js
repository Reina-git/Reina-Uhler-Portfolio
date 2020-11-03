import React from "react";

function Project(props) {
   console.log(props);
   return (
      <div>
         <h4 className="text-info">
            {props.project.title}({props.project.rating})
         </h4>
      </div>
   );
}

export default Project;
