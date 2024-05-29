export interface Props {
    categories: string[];
    selectCategory: (category: string) => void;
    selectedCategory: string;
}
