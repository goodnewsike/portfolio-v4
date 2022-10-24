import React from 'react'
import { Title } from '../../model';

const Title = ({title}: Title) => {
   return (
      <div className="section__title mb-5">
         <h2 className="">{title}</h2>
         <h1 className="title">{title}</h1>
      </div>
   )
}

export default Title