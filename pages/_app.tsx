import React from 'react';
import App from 'next/app';
import Head from 'next/head';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx}) {
    let pageProps = {};

    if(Component.getInitialProps){
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps }
  }

  render(){
    const { Component, pageProps } = this.props;
    return(
      <>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
        <style jsx global>
          {`
            :root {
              --primary-color: #00c1ba
            }
            body {
              margin: 0;
            }
            * {
              font-family: 'Raleway', sans-serif;
              font-weight: 300;
            }
            div {
              box-sizing: border-box;
            }
            button {
              padding: 12px 30px;
              border: none;
              border-radius: 7px;
              background-color: #0070f3;
              box-shadow: 0 4px 14px 0 rgba(0,118,255,0.39);
              color: white;
              cursor: pointer;
              margin: 10px
            }
            button:hover {
              background: rgba(0,118,255,0.9);
              box-shadow: 0 6px 20px rgba(0,118,255,0.23);
            }
            .centered {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
            }
            .q {
              display: flex;
              margin-bottom: 40px;
            }
            .q p {
              margin: 0;
              font-size: 24px;
              color: #555;
              font-weight: 400
            }
            .q span {
              font-size: 18px;
              margin-right: 20px;
              color: var(--primary-color);
              line-height: 1.65;
              font-weight: 400
            }
            .inputForm {
              height: 100vh;
              display: flex;
              max-width: 1080px;
              margin: 0 auto;
              justify-content: center;
              flex-direction: column;
              scroll-margin: 10px;
              scroll-snap-align: start;
              scroll-snap-stop: normal;
            }
            .inputContainer {
              margin: 0 30px;
            }
            span.sub {
              font-size: 18px;
              color: #999;
              display: block;
            }
            .inputBox {
              display: flex;
              align-items: center;
            }
            .inputBox.radio {
              width: 120px;
              position: relative;
              margin: 5px 0;
            }
            .inputBox input[type='radio']{
              display: block;
              position: absolute;
              width: 100%;
              height: 100%;
              opacity: 0;
              cursor: pointer;
            }
            .inputBox input[type='radio']:checked + .stylerRadio {
              background: var(--primary-color);
              color: #fff;
              font-weight: 500;
            }
            .inputBox .stylerRadio, .checkBox .stylerCheckbox {
              font-size: 16px;
              padding: 8px 10px;
              font-weight: 400;
              color: var(--primary-color);
              border: solid 1px var(--primary-color);
              border-radius: 3px;
              min-width: 150px;
              pointer-events: none;
              text-align: center;
              transition: .2s ease;
            }
            .inputBox.checkbox {
              flex-direction: column;
              align-items: flex-start;
            }
            .checkBox {
              margin: 5px 0;
              position: relative;
            }
            .checkBox input {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              opacity: 0;
              cursor: pointer;
            }
            .checkBox input:checked + .stylerCheckbox {
              background: var(--primary-color);
              color: #fff;
              font-weight: 500;
            }
            .inputBox textarea {
              width: 600px;
              font-size: 18px;
              background: none;
              border: none;
              border-bottom: solid 2px var(--primary-color);
              outline: none;
              color: var(--primary-color);
              font-weight: 400;
            }
          `}
        </style>
      </>
    )
  }
}