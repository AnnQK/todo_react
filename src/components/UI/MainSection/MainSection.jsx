import React from 'react';

function MainSection(props) {
  return <section className={props.className}>{props.children}</section>;
}

export default MainSection;
