import type { NextPage } from 'next';
import React, { memo } from 'react';
import { PageLayout, Title } from '../src/_components';

// eslint-disable-next-line react/display-name
const Contact: NextPage = memo(() => {
   return (
      <PageLayout className="contact position-relative">
         <div className="container p-0">
            <Title title="contact" />
            {/* <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="goodnews-ike" data-version="v1">
               <a class="badge-base__link LI-simple-link" href="https://ng.linkedin.com/in/goodnews-ike?trk=profile-badge">
                  Goodnews Ike
               </a>
            </div> */}
         </div>
      </PageLayout>
   );
});

export default Contact;
