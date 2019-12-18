import { NextPage } from 'next'
import * as React from 'react'
import Item from '../../components/Item'
import fetch from 'isomorphic-unfetch';
import { BACKEND_API } from '../../config/env';
import Error from '../_error';
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
const Index: NextPage = (props:any) => {
  if(props.data.length > 0){
    const inputData = props.data[0].inputs;
    return (
      <>
        <div className="content">
          {inputData.map((i, index) => (
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
  } else {
    return (<Error statusCode={404}/>)
  }
}
Index.getInitialProps = async ctx => {
  const slug = ctx.query.slug;
  try {
    const res = await fetch(`${BACKEND_API}/forms?slug=${slug}`);
    const data = await res.json();
    console.log(res)
    return {
      data
    }
  } catch (e) {
    return {}
  }
}
export default Index;