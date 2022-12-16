import { useRouter } from 'next/router';
import React, { memo } from 'react';

// eslint-disable-next-line react/display-name
const Hero = memo(() => {
   const router = useRouter();

   return (
      <section className="container p-0 h-100">
         <div className="hero__section d-flex align-items-center justify-content-center">
            <div className="welcome d-flex flex-column align-items-center justify-content-center">
               <p className="intro">Hello, I&apos;m</p>
               <h1 className="name pt-1 text-uppercase">goodnews ike</h1>
               <h5 className="occupation text-uppercase py-2">Front-End Engineer</h5>
               <p className="description py-3 text-center">
                  My job is to develop inspiring and exceptionally
                  beautiful user experience for you, so that you
                  can attract more clients/partners and achieve
                  your goal in time.
               </p>
               <button onClick={() => router.push('/contact')} className="mt-4 text-uppercase">hire me</button>
            </div>
         </div>
      </section>
   );
});

export default Hero;