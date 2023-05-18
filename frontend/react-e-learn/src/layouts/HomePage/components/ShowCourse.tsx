import React from "react";
import CourseModel from "../../../models/CourseModel";
import { Link } from "react-router-dom";


export const ShowCourse: React.FC<{course: CourseModel}> = (props) => {
  return (
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="text-center">
        {props.course.img ?
          <img
            src={props.course.img}
            width="233"
            height="151"
            alt="course"
          />
          :
          <img
            src={require("./../../../Images/PublicImages/qqq.jpg")}
            width="151"
            height="233"
            alt="course"
          />
        }
        <h6 className="mt-2">{props.course.title}</h6>
        <p>{props.course.author}</p>
        <Link className="btn main-color text-white" to={`/checkout/${props.course.id}`}>
            Танысу
        </Link>
      </div>
    </div>
  );
};
