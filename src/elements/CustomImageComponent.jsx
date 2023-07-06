// Seperate component for Lazy loading (CustomImage) - 29Jun2023

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Card } from "@blueprintjs/core";
import { replaceImageURL } from "../services/replaceUrl";

// Custom Image card component start - 23Jun2023
const CustomImageComponent = ({
  design,
  preview,
  json,
  onDelete,
  onPublic,
  store,
}) => {
  const fnDropImageOnCanvas = () => {
    store.activePage?.addElement({
      type: "image",
      src: replaceImageURL(preview), //Image URL
      width: store.width,
      height: store.height,
      crossOriginIsolated: false,
    });
  };

  return (
    <Card
      style={{ margin: "4px", padding: "0px", position: "relative" }}
      interactive
      onDragEnd={() => {
        fnDropImageOnCanvas();
      }}
      onClick={() => {
        fnDropImageOnCanvas();
      }}
    >
      <div className="">
        <LazyLoadImage
          placeholderSrc={replaceImageURL(preview)}
          effect="blur"
          height={150}
          width={150}
          src={replaceImageURL(preview)}
          alt="Preview Image"
        />
      </div>
    </Card>
  );
};

export default CustomImageComponent;
// Custom Image card component end - 23Jun2023
