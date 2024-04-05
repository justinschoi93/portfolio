import React from "react";
import "./services.css";
import {FiCheck} from "react-icons/fi";

function Services() {
  return (
    <section id='services'>
      <h5>What I Can Do</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3> Service X</h3>
          </div>

          <ul className='service__list'>
            <li><FiCheck className='service__list-icon'/>
                <p>Cillum dolore adipisicing Lorem ad occaecat laborum pariatur id eu ullamco ad dolore cupidatat.</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
                <p>Non ut irure dolor occaecat minim ea occaecat pariatur elit pariatur est dolor elit.</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
                <p>Magna proident officia veniam nisi.</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
                <p>Adipisicing aliqua culpa ea fugiat nisi sit.</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
                <p>Eiusmod est aute anim qui est fugiat quis esse nisi incididunt sint irure excepteur eu.</p>
            </li>
          </ul>
        </article>

        {/* START WEB DEVELOPMENT */}

        <article className='service'>
          <div className="service__head">
            <h3> Web Development</h3>
          </div>

          <ul className='service__list'>
            <li><FiCheck className='service__list-icon'/>
                <p>Qui qui Lorem nulla dolor qui amet.</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
                <p>Est est enim Lorem sunt fugiat.</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
                <p>Pariatur irure do sit do qui labore reprehenderit voluptate exercitation voluptate.</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
                <p>Incididunt nisi quis officia sunt esse veniam id anim excepteur et.</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
                <p>Ea cillum aliquip fugiat et id aute.</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
                <p>Nulla sunt incididunt in adipisicing duis.</p>
            </li>
          </ul>
        </article>

        {/* START OF CONTENT CREATION */}

        <article className='service'>
          <div className="service__head">
            <h3> Creative Collaboration</h3>
          </div>

          <ul className='service__list'>
            <li><FiCheck className='service__list-icon'/>
                <p>Anim ad labore esse cupidatat ipsum officia veniam.</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
                <p>Adipisicing do dolore ad reprehenderit aute sint veniam reprehenderit aliqua.</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
                <p>Fugiat deserunt veniam do dolor non nostrud magna consequat voluptate reprehenderit sunt.</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
                <p>Cupidatat do minim minim tempor culpa aute reprehenderit.</p>
            </li>
            <li><FiCheck className='service__list-icon'/>
                <p>Esse id irure excepteur aute minim non anim consequat dolore ullamco cillum.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services;