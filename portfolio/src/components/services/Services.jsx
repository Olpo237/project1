import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
    return(
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className='container services__container'>
                <article className='service'>
                    <div className='service__head'>
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Design A UI from scratch</p>

                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Cross platform Design</p>
                            
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Java UI</p>
                            
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>C++ UI</p>
                            
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Web UI</p>
                            
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>IOS Design</p>
                            
                        </li>
                    </ul>
                </article>
                {/*END OF UI*/}

                <article className='service'>
                    <div className='service__head'>
                        <h3>Web Development</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Build content with HTML</p>

                        </li>
                        
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Styling with CSS</p>
                            
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Adding Animation with Javascript</p>
                            
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Use Reactjs</p>
                            
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Experienced in Angula</p>
                            
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Fullstack</p>
                            
                        </li>
                    </ul>
                </article>
                {/*END OF Web Dev*/}

                <article className='service'>
                    <div className='service__head'>
                        <h3>Content Creation</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Create Youtube content</p>

                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Create tiktok content</p>
                            
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Manage instagram pages</p>
                            
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Manage Facebook pages</p>
                            
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Create Twitter content</p>
                            
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Only fans manager</p>
                            
                        </li>
                    </ul>
                </article>
                {/*END OF UI*/}
            </div>
        </section>
    )
}

export default Services