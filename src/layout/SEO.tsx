import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import Icon from '../images/midtype-logo.png';

interface IQuery {
  site: {
    siteMetadata: ISiteMetadata;
  };
}

interface IProps {
  title?: string;
}

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

const SEO: React.FC<IProps> = props => {
  const data: IQuery = useStaticQuery(query);
  const { title, description, author } = data.site.siteMetadata;
  const pageTitle = props.title || title;
  return (
    <React.Fragment>
      <Helmet
        link={[
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: `${Icon}`
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: `${Icon}`
          },
          { rel: 'shortcut icon', type: 'image/png', href: `${Icon}` }
        ]}
        title={pageTitle}
        meta={[
          {
            name: `description`,
            content: description
          },
          {
            property: `og:title`,
            content: pageTitle
          },
          {
            property: `og:description`,
            content: description
          },
          {
            property: `og:type`,
            content: `website`
          },
          {
            name: `twitter:card`,
            content: `summary`
          },
          {
            name: `twitter:creator`,
            content: author
          },
          {
            name: `twitter:title`,
            content: pageTitle
          },
          {
            name: `twitter:description`,
            content: description
          }
        ]}
      />
      {props.children}
    </React.Fragment>
  );
};

export default SEO;
