import type { NextPage } from 'next';
import React, { memo } from 'react'
import { PageLayout } from '../src/_components';

// eslint-disable-next-line react/display-name
const About: NextPage = memo(() => {
   return (
      <PageLayout className="about position-relative">
         <div className="container p-0">
            about contents
         </div>
      </PageLayout>
   );
});

export default About;
