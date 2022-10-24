import type { NextPage } from 'next';
import React, { memo, useState } from 'react';
import { Accordion, experiences, PageLayout, Title } from '../src/_components';

// eslint-disable-next-line react/display-name
const Experience: NextPage = memo(() => {
   const [activeState, setActiveState] = useState<string | number>(experiences[0]?.role);

   return (
      <PageLayout className="experience position-relative">
         <div className="container p-0">
            <Title title="Experience" />
            {experiences.map<JSX.Element>((item, i) => (
               <Accordion key={i} data={item} activeState={activeState} setActiveState={setActiveState} />
            ))}
         </div>
      </PageLayout>
   );
});

export default Experience;
