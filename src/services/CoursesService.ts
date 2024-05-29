import axios from "axios"
import {ICourse} from "types/Course";
import { normalizeResponse } from "utils/normalizeResponse";

export const getCoursesRequest = async () => {
    const response = await axios.get<ICourse[]>('https://logiclike.com/docs/courses.json')
        .then(resp => normalizeResponse(resp.data));

    return response;
}