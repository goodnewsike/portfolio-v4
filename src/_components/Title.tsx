import React, { memo } from 'react'
import { Title } from '../../model';

// eslint-disable-next-line react/display-name
const Title = memo(({ title }: Title) => {
   return (
      <div className="section__title">
         <h2 className="">{title}</h2>
         {/* <h1 className="title">{title}</h1> */}
      </div>
   );
});

export default Title;
