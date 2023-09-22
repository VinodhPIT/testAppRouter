import React from 'react'
import _Form from '@/app/components/form/form'
import Head from "next/head";
import Header from '@/app/components/pageHeader/Header'



export default function Contact() {



  return (  
<>
<Header logo={'/inckd-logo.svg'} theme={'black'} isPosition={true}/>


<main>


    <div className="page-wrapper">
      <section class="forms_section default_form_block contact_form_block">
        <div class="container">
          <div class="full_block_wrap">
            <div class="form_block_left">
              <h1 class="page_title">Contact us</h1>
              <p>Get in touch with us lorem ipsum is a dummy content for typesetting industry.</p>
             					
            </div>
            <div class="form_block_right">

              
                  <_Form/>
            
              
            </div>
          </div>
        </div>
      </section>
    </div>
    </main>
    </>
  )
}