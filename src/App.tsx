import React, {FC, useCallback, useEffect, useMemo, useState} from 'react';
import {CardsList, Sidebar} from 'components';
import {getCoursesRequest} from 'services/CoursesService';
import {ICourse } from 'types/Course';

import styles from './App.module.scss';

const App: FC = () => {
	const [courses, setCourses] = useState<ICourse[]>([]);
	const [categoriesList, setCategoriesList] = useState<string[]>([]);
	const [selectedCategory, setSelectedCategory] = useState('');
	const filteredCourses = useMemo(() => {
		return selectedCategory !== 'Все категории' ? 
			courses.filter((course) => course.tags.includes(selectedCategory)) : 
			courses;
	}, [courses, selectedCategory])

	const getCourses = useCallback(async () => {
		const {courses, tagsList} = await getCoursesRequest();
		setCourses(courses);
		setCategoriesList(tagsList);
		setSelectedCategory(tagsList[0]);
	}, []);

	const selectCategory = (category: string) => {
		setSelectedCategory(category);
	};

	useEffect(() => {
		getCourses();
	}, []);

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
