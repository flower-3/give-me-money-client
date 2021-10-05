import React, { FC } from 'react';
const List: FC<{ data: string[] }> = ({ data }) => (
  <ul>
    {data.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
