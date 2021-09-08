import Logo from "../../components/insertLogo/Logo";
import SearchBar from '../../components/searchBar/SearchBar';
import CourseCard from '../../components/courseCard/CourseCard';
import UseCoursePage from "./UseCoursePage";
export default function CoursePage(){
    const[capturedSearch,courses,onChangeHandler,label]=UseCoursePage();
    return(
        <div>
            <Logo />
            <SearchBar courses={courses} onChangeHandler={onChangeHandler} capturedSearch={capturedSearch} />
            <CourseCard label={label} />
        </div>
    )
}