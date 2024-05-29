import React, {FC} from 'react';
import { Props } from './type';

import styles from './Sidebar.module.scss';

const Sidebar: FC<Props> = ({categories, selectCategory, selectedCategory}) => {
    return (
        <div className={styles.categoriesList}>
            <div
                className={selectedCategory === '' ? styles.selectedCategoryItem : styles.categoryItem} 
                onClick={() => selectCategory('')}>
                <p>Все категории</p>
            </div>

            {categories && categories.map((category, index) => (
                <div 
                    className={selectedCategory === category ? styles.selectedCategoryItem : styles.categoryItem} 
                    onClick={() => selectCategory(category)} 
                    key={index}>
                    <p>{category}</p>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
