import React, {FC, useCallback, useEffect, useMemo, useState} from 'react';
import {CardsList, Sidebar} from 'components';
import {getCoursesRequest} from 'services/CoursesService';
import {ICourse } from 'types/Course';

import styles from './App.module.scss';

const App: FC = () => {
	const [courses, setCourses] = useState<ICourse[]>([]);
	const [categoriesList, setCategoriesList] = useState<string[]>([]);
	const [selectedCategory, setSelectedCategory] = useState<string>('');
	const filteredCourses = useMemo(() => {
		return selectedCategory.length > 0 ? 
			courses.filter((course) => course.tags.includes(selectedCategory)) : 
			courses;
	}, [courses, selectedCategory])

	const getCourses = useCallback(async () => {
		const courses = await getCoursesRequest();
		setCourses(courses);
	}, []);

	const selectCategory = (category: string) => {
		setSelectedCategory(category);
	};

	useEffect(() => {
		getCourses();
	}, []);

	useEffect(() => {
		if (!courses) {
			return;
		}

		const tagsList: string[] = Array.from(new Set(courses!.map(({tags}) => [...tags]).flat()));
		setCategoriesList(tagsList)
	}, [courses]);

  	return (
  	  	<main className={styles.pageContainer}>
			<div className={styles.contentWrapper}>
				<Sidebar categories={categoriesList} selectCategory={selectCategory} selectedCategory={selectedCategory} />
				<CardsList courses={filteredCourses} />
			</div>
  	  	</main>
  	);
};

export default App;
