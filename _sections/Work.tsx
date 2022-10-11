import React from 'react';
import classNames from 'classnames';
import { Accordion, Title } from '../_components';

interface Props {
   activeSection: number | null;
}

const Work = ({activeSection}: Props) => {
   return (
      <section className={classNames("main__contents work position-relative", {
         'd-none': activeSection !== 2, 'd-flex': activeSection === 2
      })}>
         <div className="container p-0">
            <Title title="Work" />
         </div>
      </section>
   )
}

export default Work