import { NextPage } from 'next'
import * as React from 'react'
import Item from '../components/Item'

const Index: NextPage = () => {
  return (
    <>
      <div className="content">
        <Item 
          number="1"
          type="radio"
          question="Ohh gituu, hmmm pernah nyesel ga si beli furnitur baru?"
          subQuestion="furnitur apapun, lukisan buat dekorasi juga boleh diitung furnitur"
          required={true}
          radioOption={{
            y: 'Ya',
            n: 'Tidak'
          }}
        />
        <Item 
          number="2"
          type="input"
          question="Eh Kenalan dulu yuk, aku Anggun. Kamu?"
          required={false}
        />
        <Item 
          number="3"
          type="checkbox"
          question="Kamu biasanya beli furnitur buat dimana?"
          subQuestion="pilih lebih dari satu boleh banget"
          required={true}
          checkOption={[
            'Rumah', 'Coffee Shop', 'Studio Photo', 'Hotel', 'Restaurant', 'Apartment', 'Kantor', 'Other'
          ]}
        />
      </div>
      <style jsx>
        {`
          .content {
            scroll-snap-type: y mandatory;
            background-image: url('https://images.typeform.com/images/Ke2xMuT56rzS');
            background-size: cover;
            background-attachment: fixed;
          }
        `}
      </style>
    </>
  )
}

export default Index;