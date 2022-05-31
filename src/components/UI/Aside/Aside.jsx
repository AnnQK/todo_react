import React from 'react';

function Aside(props) {
  return <aside className={props.className}>{props.children}</aside>;
}

export default Aside;
