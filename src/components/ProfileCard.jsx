import React from 'react';

const ProfileCard = ({ image, title, location, tags,cardClass }) => {
  return (
    <div className="col-md-4">
      <div className={`card ${cardClass}`}>
        <div className="d-flex mt-4 ms-4">
          <img className="card-image" src={image} alt={title} />
          <div className="ms-3 mt-3">
            <h1 className="card-title">{title}</h1>
            <p className="location">{location}</p>
            <div className="tags">
              {tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProfileCard;
