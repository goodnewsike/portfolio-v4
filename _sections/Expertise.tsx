import React from 'react'
import classNames from 'classnames';
import { Accordion, Title } from '../_components';

interface Props {
   activeSection: number | null;
}

const Expertise = ({activeSection}: Props) => {
   return (
      <section className={classNames("main__contents expertise position-relative", {
         'd-none': activeSection !== 1, 'd-flex': activeSection === 1
      })}>
         <div className="container p-0">
            <Title title="Expertise" />
         </div>
      </section>
   )
}

export default Expertise