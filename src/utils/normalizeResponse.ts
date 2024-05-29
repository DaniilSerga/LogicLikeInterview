import {ICourse} from "types/Course";

export const normalizeResponse = (courses: ICourse[]) => {
    let tagsList = Array.from(new Set(courses.map(({tags}) => [...tags]).flat()));
    tagsList.unshift('Все категории');

    return {tagsList, courses};
}