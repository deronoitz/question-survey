import { NextPage } from 'next'
import * as React from 'react'
import Item from '../components/Item'
const data = [
  {
    type: 'input',
    question: 'Eh Kenalan dulu yuk, aku Anggun. Kamu?',
    required: true
  },
  {
    type: 'radio',
    question: 'Ohh gituu, hmmm pernah nyesel ga si beli furnitur baru?',
    subQuestion: 'furnitur apapun, lukisan buat dekorasi juga boleh diitung furnitur',
    required: true,
    radioOption: {
      y: 'Ya',
      n: 'Tidak'
    }
  },
  {
    type: 'checkbox',
    question: 'Kamu biasanya beli furnitur buat dimana?',
    subQuestion: 'pilih lebih dari satu boleh banget',
    required: true,
    checkOption: ['Rumah', 'Coffee Shop', 'Studio Photo', 'Hotel', 'Restaurant', 'Apartment', 'Kantor', 'Other']
  }
]
const Index: NextPage = () => {
  return (
    <>
      <div className="content">
        {data.map((i, index) => (
          <Item 
            key={index}
            number={index+1}
            type={i.type}
            question={i.question}
            subQuestion={i.subQuestion || null}
            required={i.required}
            radioOption={i.radioOption || null}
            checkOption={i.checkOption || null}
          />
        ))}
      </div>
      <style jsx>
        {`
          .content {
            scroll-snap-type: y mandatory;
            background-image: url('/images/bg.jpg');
            background-size: cover;
            background-attachment: fixed;
          }
        `}
      </style>
    </>
  )
}

export default Index;