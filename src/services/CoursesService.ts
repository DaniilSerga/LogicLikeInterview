import axios from "axios"
import { ICourse } from "types/Course";

export const getCoursesRequest = async () => {
    const response = await axios.get<ICourse[]>('https://logiclike.com/docs/courses.json')
        .then(resp => resp.data);
    
    return response;
}