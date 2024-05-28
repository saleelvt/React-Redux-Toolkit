import React, { useMemo } from 'react';
import Sample2 from './sample2';

function Sample() {
  const data = useMemo(() => ({
    data1: 'data to 2',
    name: 'saleelff',
  }), []);

  console.log('This is my first dataaaa');

  return (
    <div>
      <h1>Saleel is a good boyyy</h1>
      <Sample2 obj={data} />
    </div>
  );
}

export default Sample;
