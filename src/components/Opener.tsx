import React from 'react';
import styled from 'styled-components';

import Image from './Image';

const Styled = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 3rem;
  position: relative;
  .background {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    filter: grayscale(80%) brightness(60%);
    overflow: hidden;
  }
  .background .gatsby-image-wrapper {
    min-width: 100%;
    min-height: 100%;
  }
  .frame {
    position: relative;
    border: 0.5rem solid white;
    width: 100%;
    height: 100%;
    padding: 3rem;
    z-index: 1;
  }
  .frame__title h5 {
    opacity: 0.5;
  }
  .frame__title h1 {
    text-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  }
`;

const Opener: React.FC<IReport> = props => {
  const { title, coverImage } = props;
  return (
    <Styled>
      <div className="background">
        <Image src={coverImage.localFile} style={{ minHeight: '100%' }} />
      </div>
      <div className="frame" data-sal="fade" data-sal-duration="1000">
        <div className="frame__title">
          <h5>BAPS North America | Bal/Kishore Pravrutti</h5>
          <h1
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="1000"
          >
            {title}
          </h1>
        </div>
      </div>
    </Styled>
  );
};

export default Opener;
