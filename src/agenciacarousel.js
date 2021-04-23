import React, { useState } from 'react';

import './App.scss';
import { Carousel } from "react-bootstrap";
import BotonSaberMas from './botonsabermas';
import { HashLink as Link } from 'react-router-hash-link';


function Agenciacarousel() {
  
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.postimg.cc/hz3nRjCr/0.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Todo lo que hacemos por ti, nuestro éxito</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.postimg.cc/TKX66BcZ/1.jpg"          
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Tecnología exclusiva</h3>
            <p className="carousel-description">Contamos con una herramienta tecnológica desarrollada especialmente para cubrir las necesidades de nuestros clientes.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.postimg.cc/PLSs1Jkj/2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Rentabilidad</h3>
            <p className="carousel-description">Ponemos a tu disposición las mejores condiciones para cada producto y la mejores herramientas de reserva gracias a una intranet que dispone de todas las opciones de buscadores, vuelos, hoteles y vuelo + hotel</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.postimg.cc/8sjDBR5n/3.jpg"
            alt="Forth slide"
          />

          <Carousel.Caption>
            <h3>Web y App propias</h3>
            <p className="carousel-description">Cada agencia tiene su propia web y APP personalizables para la venta: podrás ofrecer a tus clientes tus propias ofertas o productos propios con salidas desde tu zona.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.postimg.cc/MfMS6SN8/4.jpg"       
            alt="Fifth slide"
          />

          <Carousel.Caption>
            <h3>Rappeles</h3>
            <p className="carousel-description">Los rappeles ofrecidos por las mayoristas serán repartidos de manera porcentual en función de las ventas de cada oficina en caso de consecución. Enviamos informes trismestrales para analizar la situación de cada uno y, así, fomentar el trabajo en equipo para la consecución de los mismos.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.postimg.cc/mzhxj4bF/5.jpg"
            alt="Sixth slide"
          />

          <Carousel.Caption>
            <h3>Nuestro cliente eres tú</h3>
            <p className="carousel-description">Tenemos el máximo respeto por las agencias, por eso nunca contactaremos con tus clientes.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.postimg.cc/7bd4B5JP/6.jpg"         
            alt="Seventh slide"
          />

          <Carousel.Caption>
            <h3>Identidad</h3>
            <p className="carousel-description">byTour es un grupo turístico formado por agentes de viajes, y sabemos que al agente independiente no le gusta perder su identidad con su proveedor.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.postimg.cc/DWv3WsH6/7.jpg"
            alt="Eigth slide"
          />

          <Carousel.Caption>
            <h3>Apoyo a agencias</h3>
            <p className="carousel-description">Contamos con un departamento específico para el Apoyo a Agencias, compuesto por profesionales muy expertos que, con el apoyo y buenas relaciones con los proveedores del sector.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.postimg.cc/8jvSxTLR/8.jpg"     
            alt="Ninth slide"
          />

          <Carousel.Caption>
            <h3>Formación</h3>
            <p className="carousel-description">Contamos con una escuela de formación propia especializada en turismo (EFI Escuela de Formación Internacional), llevamos años formando personas que quieren formar parte del mundo del turismo.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.postimg.cc/0zdq2ZWr/9.jpg"
            alt="Tenth slide"
          />

          <Carousel.Caption>
            <h3>Multidestino</h3>
            <p className="carousel-description">Creada por agentes de viajes que conocen a la perfección los problemas reales al diseñar un viaje, contams con una herramienta multidestino con nueva usabilidad y preparada para ser realmente útil en tu agencia de viajes.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Link to="/nuestra-tecnologia-exclusiva">
        <BotonSaberMas/>
      </Link>
    </>
  );
}

export default Agenciacarousel;
