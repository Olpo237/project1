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
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias similique, praesentium reprehenderit officiis ratione nemo minima ullam dolor sint consequatur? Molestias aliquam ratione quas architecto fugiat tempora voluptatum omnis, commodi debitis dolorum, voluptatem nihil necessitatibus similique doloremque aperiam tenetur. Ipsam.'
    },

    {
    avatar: AVTR2,
    name:'Olpo Dominic',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias similique, praesentium reprehenderit officiis ratione nemo minima ullam dolor sint consequatur? Molestias aliquam ratione quas architecto fugiat tempora voluptatum omnis, commodi debitis dolorum, voluptatem nihil necessitatibus similique doloremque aperiam tenetur. Ipsam.'
    },

    {
    avatar: AVTR3,
    name:'Robert Greene',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias similique, praesentium reprehenderit officiis ratione nemo minima ullam dolor sint consequatur? Molestias aliquam ratione quas architecto fugiat tempora voluptatum omnis, commodi debitis dolorum, voluptatem nihil necessitatibus similique doloremque aperiam tenetur. Ipsam.'
    },

    {
    avatar: AVTR4,
    name:'Sih Larry',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias similique, praesentium reprehenderit officiis ratione nemo minima ullam dolor sint consequatur? Molestias aliquam ratione quas architecto fugiat tempora voluptatum omnis, commodi debitis dolorum, voluptatem nihil necessitatibus similique doloremque aperiam tenetur. Ipsam.'
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