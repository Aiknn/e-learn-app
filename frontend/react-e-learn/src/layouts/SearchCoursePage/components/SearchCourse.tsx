import { Link } from "react-router-dom";
import CourseModel from "../../../models/CourseModel";

export const SearchCourse: React.FC<{ course: CourseModel }> = (props) => {
    return (
        <div className='card mt-3 shadow p-3 mb-3 bg-body rounded'>
            <div className='row g-0'>
                <div className='col-md-2'>
                    <div className='d-none d-lg-block'>
                        {props.course.img ?
                            <img src={props.course.img}
                                width='196'
                                height='123'
                                alt='Course'
                            />
                            :
                            <img src={require('../../../Images/PublicImages/qqq.jpg')}
                                width='196'
                                height='123'
                                alt='Course'
                            />
                        }
                    </div>
                    <div className='d-lg-none d-flex justify-content-center 
                        align-items-center'>
                        {props.course.img ?
                            <img src={props.course.img}
                                width='196'
                                height='123'
                                alt='Course'
                            />
                            :
                            <img src={require('../../../Images/PublicImages/qqq.jpg')}
                                width='196'
                                height='123'
                                alt='Course'
                            />
                        }
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='card-body'>
                        <h5 className='card-title'>
                            {props.course.author}
                        </h5>
                        <h4>
                            {props.course.title}
                        </h4>
                        <p className='card-text'>
                            {props.course.description}
                        </p>
                    </div>
                </div>
                <div className='col-md-4 d-flex justify-content-center align-items-center'>
                    <Link className='btn btn-md main-color text-white' to={`/checkout/${props.course.id}`}>
                        Курсты бастау
                    </Link>
                </div>
            </div>
        </div>
    );
}