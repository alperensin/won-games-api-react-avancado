import React from 'react';

import Wrapper from './Wrapper';

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        <span>
          Powered By
        </span>
        &nbsp;
        <a
          href={'https://github.com/alperensin'}
          key="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          alperensin
        </a>
        <span className="poweredBy">
          © {new Date().getFullYear()}
        </span>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
