import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layout/Layout';
import Opener from '../components/Opener';

interface IProps {
  data: {
    contentfulReport: IReport;
  };
}

const IndexPage: React.FC<IProps> = props => {
  const report = props.data.contentfulReport;
  console.log(report);
  return (
    <Layout>
      <Opener {...report} />
    </Layout>
  );
};

export const query = graphql`
  query GetReport {
    contentfulReport(slug: { eq: "2019" }) {
      slug
      title
      coverImage {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      sections {
        slug
        title
        description {
          json
        }
        articles {
          slug
          title
          text {
            json
          }
        }
      }
    }
  }
`;

export default IndexPage;
