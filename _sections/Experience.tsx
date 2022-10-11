import React, { useState } from 'react';
import classNames from 'classnames';
import { Accordion, experiences, Title } from '../_components';
import { ActiveSection } from '../model';

const Experience = ({ activeSection }: ActiveSection) => {
   const [activeState, setActiveState] = useState<string | number>(experiences[0]?.role);

   return (
      <section className={classNames("main__contents experience position-relative", {
         'd-none': activeSection !== 3, 'd-flex': activeSection === 3
      })}>
         <div className="container p-0">
            <Title title="Experience" />
            {experiences.map<JSX.Element>((item, i) => (
               <Accordion key={i} data={item} activeState={activeState} setActiveState={setActiveState} />
            ))}
         </div>
      </section>
   )
}

export default Experience