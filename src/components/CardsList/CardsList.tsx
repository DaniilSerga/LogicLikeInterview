import React, {FC} from 'react';
import { Props } from './type';

import styles from './CardsList.module.scss';

const CardsList: FC<Props> = ({courses}) => {
    return (
        <div className={styles.coursesListContainer}>
            {courses.map((course) => (
                <div className={styles.courseItem} key={course.id}>
                    <div className={styles.imageContainer} style={{backgroundColor: course.bgColor}}>
                        <img src={course.image} alt="" />
                    </div>
                    <p>{course.name}</p>
                </div>
            ))}
        </div>
    );
};

export default CardsList;
