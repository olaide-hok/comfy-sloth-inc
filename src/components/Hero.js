import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../assets/hero-bcg.jpeg'
import heroBcg2 from '../assets/hero-bcg-2.jpeg'

const Hero = () => {
  return <Wrapper className='section-center'>
    <article className='content'>
      <h1>
        design your <br />
        comfort zone
      </h1>
      <p>
      No one can deny that shopping for furniture in a physical store is pretty 
      satisfying—you get to sit on tons of sofas, try out beds to your heart's content, and 
      curl up in a bunch of different chairs to help you find exactly the right one for you.
      And if that's what you're looking for, we've got a list of the best ones from international manufacturers.
      But in terms of selection, the internet definitely has the brick-and-mortar
      shopping experience beat. Online, you have pretty much every store and style you can
      imagine just a few clicks away. You may not be able to test out a couch yourself when
      you shop online, but you can read reviews, and you can also search for the precise 
      item you want, narrowed down by your price range, all from the comfort of your own 
      home.
      </p>
      <Link to='/products' className='btn hero-btn'>
        shop now
      </Link>
    </article>
    <article className='img-container'>
      <img src={heroBcg} alt='nice table' className='main-img' />
      <img src={heroBcg2} alt='person working' className='accent-img' />
    </article>
  </Wrapper>
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`

export default Hero
