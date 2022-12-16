import Formsy from 'formsy-react';
import type { NextPage } from 'next';
import React, { memo } from 'react';
import { useForm, ValidationError  } from '@formspree/react';
import { PageLayout, TextArea, TextInput } from '../src/_components';

// eslint-disable-next-line react/display-name
const Contact: NextPage = memo(() => {
   const [state, handleSubmit] = useForm('signupForm');

   // if (state.succeeded) {
   //    return <p>Thanks for joining!</p>;
   // }

   return (
      <PageLayout className="contact position-relative">
         <div className="container p-0">
            <div className="row m-0">
               <div className="col-md-8 col-12">
                  <p className="">
                     Get in touch with me or send an email directly to me on
                     <a href="mailto:goodnewsike19@gmail.com" className="">
                        goodnewsike19@gmail.com
                     </a>
                  </p>
                  <Formsy onValidSubmit={handleSubmit} className="form">
                     <TextInput
                        id="name"   
                        type="text" 
                        name="name" 
                        placeholder="" 
                        className="" 
                        value=""
                        label=""
                        errorMessage=""
                        valError=""
                        required 
                     />
                     <TextInput
                        id="email"   
                        type="email" 
                        name="email" 
                        placeholder="" 
                        className="" 
                        value=""
                        label=""
                        errorMessage=""
                        valError=""
                        required 
                     />
                     <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                     />
                     <TextArea
                        id="message"   
                        type="text" 
                        name="message" 
                        placeholder="" 
                        className="" 
                        value=""
                        label=""
                        errorMessage=""
                        valError=""
                        required 
                     />
                     <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                     />
                     <button type="submit" disabled={state.submitting}>Sign up</button>
                     <ValidationError errors={state.errors} />
                  </Formsy>
               </div>
            </div>
         </div>
      </PageLayout>
   );
});

export default Contact;
