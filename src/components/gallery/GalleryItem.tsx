import React, { FC } from "react";

export interface IGalleryItem {
  image: string;
  title: string;
  description: string;
  primaryBtnText: string;
  secondaryBtnText: string;
  smallText: string;
}

const GalleryItem: FC<IGalleryItem> = ({
  image,
  title,
  description,
  primaryBtnText,
  secondaryBtnText,
  smallText,
}) => {
  return (
    <div className="card shadow-sm card-metro">
      <div className="card-img grayscale card-img-overlay">
        <img className="bd-placeholder-img card-img-top" src={image} />
      </div>
      <div className="card-body">
        <p className="card-text">{description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              {primaryBtnText}
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              {secondaryBtnText}
            </button>
          </div>
          <small className="text-muted">{smallText}</small>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
