import React, { useEffect } from "react";
import GalleryItem, { IGalleryItem } from "./GalleryItem";

const Gallery = () => {
  const [items, setItems] = React.useState(new Array<IGalleryItem>());

  const renderItems = () => {
    return items.map((item, index) => {
      return <GalleryItem key={index} {...item} />;
    });
  };
  useEffect(() => {
    console.log("Gallery mounted");
    fetch("/gallery.json").then((response) => {
      response.json().then((data) => {
        console.log(data);
        setItems(data);
      });
    });
  }, []);

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {renderItems()}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
