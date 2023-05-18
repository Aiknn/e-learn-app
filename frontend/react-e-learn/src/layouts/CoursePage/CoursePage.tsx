import { useEffect, useState } from "react";
import { SpinnerLoading } from "../Utils/SpinnerLoading";
import CourseModel from "../../models/CourseModel";

export const CoursePage = () => {

    const [course, setCourse] = useState<CourseModel>();
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    const courseId = (window.location.pathname).split('/')[2];

    useEffect(() => {
        const fetchCourse = async () => {
            const baseUrl: string = `http://localhost:8080/api/courses/${courseId}`;

            const response = await fetch(baseUrl);

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseJson = await response.json();

            const loadedCourse: CourseModel = {
                id: responseJson.id,
                title: responseJson.title,
                author: responseJson.author,
                description: responseJson.description,
                category: responseJson.category,
                img: responseJson.img,
                video: responseJson.video,
            };

            setCourse(loadedCourse);
            setIsLoading(false);
        };
        fetchCourse().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, []);

    
    const youTubeLink = course?.video;
    const changedYouTubeLink = youTubeLink?.replace('watch?v=','embed/'); 
    console.log(youTubeLink);
    console.log(changedYouTubeLink);

    if (isLoading) {
        return (
            <SpinnerLoading />
        )
    }

    if (httpError) {
        return (
            <div className='container m-5'>
                <p>{httpError}</p>
            </div>
        )
    }

    return (
        <div>
            <div className='container d-none d-lg-block'>
                <div className='row mt-5'>
                    <div className='col-sm-2 col-md-2'>
                        {course?.img ?
                            <img src={course?.img} width='349' height='226' alt='Course' />
                            :
                            <img src={require('./../../Images/PublicImages/qqq.jpg')} width='349'
                                height='226' alt='Course' />
                        }
                    </div>
                    <div className='col-4 col-md-4 container'>
                        <div className='ml-2'>
                            <h2>{course?.title}</h2>
                            <h5 className='text-primary'>{course?.author}</h5>
                            <p className='lead'>{course?.description}</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="ratio ratio-16x9">
                    <iframe width="560" height="315" src={changedYouTubeLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
            </div>
            <div className='container d-lg-none mt-5'>
                <div className='d-flex justify-content-center align-items-center'>
                    {course?.img ?
                        <img src={course?.img} width='349' height='226' alt='Course' />
                        :
                        <img src={require('./../../Images/PublicImages/qqq.jpg')} width='349'
                            height='226' alt='Course' />
                    }
                </div>
                <div className='mt-4'>
                    <div className='ml-2'>
                        <h2>{course?.title}</h2>
                        <h5 className='text-primary'>{course?.author}</h5>
                        <p className='lead'>{course?.description}</p>
                    </div>
                </div>
                <hr />
                <div className="ratio ratio-16x9">
                    <iframe width="560" height="315" src={changedYouTubeLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
            </div>
        </div>
    );
}