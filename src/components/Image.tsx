import React from 'react';
import Img from 'gatsby-image';

const Image: React.FC<any> = props => {
  const { src, style } = props;
  return <Img fluid={src.childImageSharp.fluid} imgStyle={style} />;
};

export default Image;
