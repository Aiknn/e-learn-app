import { useEffect, useState } from 'react';
import { SpinnerLoading } from '../Utils/SpinnerLoading';
import { Pagination } from '../Utils/Pagination';
import CourseModel from '../../models/CourseModel';
import { SearchCourse } from './components/SearchCourse';

export const SearchCoursesPage = () => {

    const [courses, setCourses] = useState<CourseModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [coursesPerPage] = useState(4);
    const [totalAmountOfCourses, setTotalAmountOfCourses] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [search, setSearch] = useState('');
    const [searchUrl, setSearchUrl] = useState('');
    const [categorySelection, setCategorySelection] = useState('Курс санаты');

    useEffect(() => {
        const fetchCourses = async () => {
            const baseUrl: string = "http://localhost:8080/api/courses";

            let url: string = '';

            if (searchUrl === '') {
                url = `${baseUrl}?page=${currentPage-1}&size=${coursesPerPage}`;
            } else {
                let searchWithPage = searchUrl.replace('<pageNumber>', `${currentPage - 1}`);
                url = baseUrl + searchWithPage;
            }

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseJson = await response.json();

            const responseData = responseJson._embedded.courses;

            setTotalAmountOfCourses(responseJson.page.totalElements);
            setTotalPages(responseJson.page.totalPages);

            const loadedCourses: CourseModel[] = [];

            for (const key in responseData) {
                loadedCourses.push({
                    id: responseData[key].id,
                    title: responseData[key].title,
                    author: responseData[key].author,
                    description: responseData[key].description,
                    category: responseData[key].category,
                    img: responseData[key].img,
                    video: responseData[key].video,
                });
            }

            setCourses(loadedCourses);
            setIsLoading(false);
        };
        fetchCourses().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
        window.scrollTo(0, 0);
    }, [currentPage, searchUrl]);

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

    const searchHandleChange = () => {
        setCurrentPage(1);
        if (search === '') {
            setSearchUrl('');
        } else {
            setSearchUrl(`/search/findByTitleContaining?title=${search}&page=<pageNumber>&size=${coursesPerPage}`);
        }
        setCategorySelection('Курс санаты');
    }

    const categoryField = (value: string) => {
        setCurrentPage(1);
        if (
            value.toLowerCase() === 'it' ||
            value.toLowerCase() === 'business' ||
            value.toLowerCase() === 'school' 
        ) {
            setCategorySelection(value);
            setSearchUrl(`/search/findByCategory?category=${value}&page=<pageNumber>&size=${coursesPerPage}`);
        } else {
            setCategorySelection('All');
            setSearchUrl(`?page=<pageNumber>&size=${coursesPerPage}`);
        }
    }

    const indexOfLastCourse: number = currentPage * coursesPerPage;
    const indexOfFirstCourse: number = indexOfLastCourse - coursesPerPage;
    let lastItem = coursesPerPage * currentPage <= totalAmountOfCourses ? coursesPerPage * currentPage : totalAmountOfCourses;
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className='container'>
                <div>
                    <div className='row mt-5'>
                        <div className='col-6'>
                            <div className='d-flex'>
                                <input className='form-control me-2' type='search'
                                    placeholder='іздеу' aria-labelledby='Search'
                                    onChange={e => setSearch(e.target.value)}/>
                                <button className='btn btn-outline-success'
                                    onClick={() => searchHandleChange()}>
                                    Іздеу
                                </button>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='dropdown'>
                                <button className='btn btn-secondary dropdown-toggle' type='button'
                                    id='dropdownMenuButton1' data-bs-toggle='dropdown'
                                    aria-expanded='false'>
                                    {categorySelection}
                                </button>
                                <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
                                    <li onClick={() => categoryField('All')}>
                                        <a className='dropdown-item' href='##'>
                                            Барлығы
                                        </a>
                                    </li>
                                    <li onClick={() => categoryField('IT')}>
                                        <a className='dropdown-item' href='##'>
                                            IT
                                        </a>
                                    </li>
                                    <li onClick={() => categoryField('business')}>
                                        <a className='dropdown-item' href='##'>
                                            Бизнес
                                        </a>
                                    </li>
                                    <li onClick={() => categoryField('school')}>
                                        <a className='dropdown-item' href='##'>
                                            Мектеп
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {totalAmountOfCourses > 0 ?
                    <>
                    <div className='mt-3'>
                        <h5>Нәтижелер саны: ({totalAmountOfCourses})</h5>
                    </div>
                    <p>
                        {indexOfFirstCourse + 1} - {lastItem} элементтер:
                    </p>
                    {courses.map(course => (
                        <SearchCourse course={course} key={course.id} />
                    ))}
                    </>
                    :
                    <div className='m-5'>
                        <h3>
                            Іздегеніңізді таба алмадыныз ба?
                        </h3>
                        <a type='button' href="##" className='btn main-color btn-md px-4 me-md-2 fw-bold text-white'>
                            Бізге хабарласыңыз
                        </a>
                    </div>
                    }
                    {totalPages > 1 && 
                        <Pagination currentPage={currentPage} totalPages={totalPages} paginate={paginate}/>
                    }
                </div>
            </div>
        </div>
    );
}