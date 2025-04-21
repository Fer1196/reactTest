import { Category } from "../../interface/CategoriesResponse";
import { Filters } from "../Filters/Filters";

interface HeaderProps {
  categories: Category[];
}

export const Header = ({ categories }: HeaderProps) => {
  return (
    <header>
      <h1>Shopping Store</h1>
      <Filters categories={categories} />
    </header>
  );
};
