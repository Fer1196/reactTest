import { useNavigatePages } from "../../hooks/useNavigatePages";
import { Category } from "../../interface/CategoriesResponse";
import { CustomizeButton } from "../CustomizeButton/CustomizeButton";
import "./Filters.css";
import { useFilter } from "./hooks/useFilter";

interface FiltersProps {
  categories: Category[];
}

export function Filters({ categories }: FiltersProps) {
  const { categoryFilterId, filters, handleCategory } = useFilter();
  const { handleNavigation } = useNavigatePages();
  return (
    <section className="filters">
      <div>
        <CustomizeButton
          onclick={() => {
            handleNavigation("/cart");
          }}
          text="Ir a Pagar"
          color="#01eac2"
        ></CustomizeButton>
      </div>
      <div></div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select
          id={categoryFilterId}
          onChange={handleCategory}
          value={filters.category}
        >
          {categories.map((category) => (
            <option key={category.caprId} value={category.caprId}>
              {category.caprNombreRuta}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}
