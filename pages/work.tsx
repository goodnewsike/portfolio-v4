import type { NextPage } from 'next';
import React, { memo } from 'react';
import { PageLayout, Title } from '../src/_components';

// eslint-disable-next-line react/display-name
const Work: NextPage = memo(() => {
   return (
      <PageLayout className="work position-relative">
         <div className="container p-0">
            <Title title="Work" />
         </div>
      </PageLayout>
   );
});

export default Work;
