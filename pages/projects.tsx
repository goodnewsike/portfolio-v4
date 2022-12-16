import type { NextPage } from 'next';
import React, { memo } from 'react';
import { PageLayout } from '../src/_components';

// placeholder="https://i.ibb.co/BTvLMXq/Ripple-1-9s-201px.gif"

// eslint-disable-next-line react/display-name
const Projects: NextPage = memo(() => {
   return (
      <PageLayout className="projects position-relative">
         <div className="container p-0">
            projects contents
         </div>
      </PageLayout>
   );
});

export default Projects;
