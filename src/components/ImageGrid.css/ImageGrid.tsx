import "./ImageGrid.css";
import { ImagerGridProps } from "../../utils/interfaces/ImageGridProps.interface";

export const ImageGrid = ({ image }: ImagerGridProps) => {
  return (
    <div className="image-div">
      <img src={image} />
    </div>
  );
};
