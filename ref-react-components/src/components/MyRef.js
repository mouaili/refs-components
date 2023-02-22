import React from 'react';

const MyRef = React.forwardRef((props, ref) => {
  console.log(ref);
  console.log(props);
  return (
    <div>
      <h1>Valeur : </h1>
      <input ref={ref} type='text' />
    </div>
  );
});

export default MyRef;
