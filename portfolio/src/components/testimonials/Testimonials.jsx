import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/ava1.jpg'
import AVTR2 from '../../assets/ava2.png'
import AVTR3 from '../../assets/ava3.jpg'
import AVTR4 from '../../assets/ava4.jpg'



const data = [
    {
    avatar: AVTR1,
    name:'Leon Napoleon',
    review: 'I contacted olpo to build me my first professional website and i was very satisfied by his result he is such a good developper.'
    },

    {
    avatar: AVTR2,
    name:'Olpo Dominic',
    review: 'Nowadays to find a developper as olpo is dificult, he designed me my first software for the management of my school records.'
    },

    {
    avatar: AVTR3,
    name:'Robert Greene',
    review: 'I will recommend to everybody wishing any service to contact Olpo for a fast a precise service .'
    },

    {
    avatar: AVTR4,
    name:'Sih Larry',
    review: 'Only one word can describe him, best.'
    },


]

const Testimonials = () => {
    return(
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <div className="container testimonials__container">
               {
                data.map(({avatar,name,review}, index) => {
                    return(
                    <article key={index} className='testimonial'>
                    <div className='client__avatar'>
                        <img src={avatar} alt='fdsfdf' />                   
                    </div>
                    <div>
                        <h5 className='client__name'>{name}</h5>
                        <small className='client__review'>{review}</small>
                    </div> 
                    </article>
                    )
                } )
               } 
               
            </div>
        </section>
    )
}

export default Testimonials