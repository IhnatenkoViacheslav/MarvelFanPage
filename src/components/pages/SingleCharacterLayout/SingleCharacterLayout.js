import { Helmet } from "react-helmet";

import "./singleCharacterLayout.scss";

const SingleCharacterLayout = ({ data }) => {
  const { name, description, thumbnail } = data;

  return (
    <div className="single-character">
      <Helmet>
        <meta name="description" content={`${name} information page`} />
        <title>{name}</title>
      </Helmet>
      <img src={thumbnail} alt={name} className="single-character__char-img" />
      <div>
        <h2 className="single-character__name">{name}</h2>
        <p className="single-character__descr">{description}</p>
      </div>
    </div>
  );
};

export default SingleCharacterLayout;
