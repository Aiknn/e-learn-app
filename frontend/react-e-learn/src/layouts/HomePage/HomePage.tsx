import { Carousel } from "./components/Carousel";
import { ExploreCourses } from "./components/ExploreCourses";
import { Intro } from "./components/Intro";

export const HomePage = () => {
    return(
        <>
            <ExploreCourses/>
            <Carousel/>
            <Intro/>
        </>
    );
}