import type { NextPage } from 'next';
import React, { memo, useState } from 'react';
import { Accordion, experiences, PageLayout } from '../src/_components';

{/* <iframe
            src={previewData}
            allowFullScreen
            width="740"
            height="780"
            title="Adenekan Wonderful Resumé"
          /> */}

// eslint-disable-next-line react/display-name
const Resume: NextPage = memo(() => {
   const [activeState, setActiveState] = useState<string | number>(experiences[0]?.role);

   return (
      <PageLayout className="resume position-relative">
         <div className="container p-0">
            {experiences.map<JSX.Element>((item, i) => (
               <Accordion key={i} data={item} activeState={activeState} setActiveState={setActiveState} />
            ))}
         </div>
      </PageLayout>
   );
});

export default Resume;
