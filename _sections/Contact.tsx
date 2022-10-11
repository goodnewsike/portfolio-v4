import React from 'react';
import classNames from 'classnames';
import { Accordion, Title } from '../_components';

interface Props {
   activeSection: number | null;
}

const Contact = ({activeSection}: Props) => {
   return (
      <section className={classNames("main__contents contact position-relative", {
         'd-none': activeSection !== 4, 'd-flex': activeSection === 4
      })}>
         <div className="container p-0">
            <Title title="contact" />
            {/* <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="goodnews-ike" data-version="v1">
               <a class="badge-base__link LI-simple-link" href="https://ng.linkedin.com/in/goodnews-ike?trk=profile-badge">
                  Goodnews Ike
               </a>
            </div> */}
         </div>
      </section>
   )
}

export default Contact