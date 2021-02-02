import React, { Fragment } from 'react';
import Tarjeta from './../components/tarjeta'
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';
import GetAppIcon from '@material-ui/icons/GetApp';
import IconButton from '@material-ui/core/IconButton/IconButton'
import './../App.css'

function Portafolio() { 

    const extensibleTourGuide = (
        <Fragment>
            <Typography paragraph>React,</Typography>
            <Typography paragraph>Css,</Typography>
            <Typography paragraph>JavaScript,</Typography>
            <Typography paragraph>Diseño web Responsivo</Typography>
            <Typography paragraph>Java</Typography>
            <Typography paragraph>Android Studio</Typography>
            <Typography paragraph>SQL</Typography>
            <Typography paragraph>Maps</Typography>
        </Fragment>
        
    )
    const contenidoTourguide = (
        <Typography variant="body2" color="textSecondary" component="p">
            Descubre una nueva forma de viajar con TourGuide. Dejate llevar por aquellas personas que realmente conocen bien el lugar,
            LOS RESIDENTES y descubre esos lugares mágicos y secretos que solo los residentes conocen. También podrás colaborar con el
            proyecto y actuar de guía para esas personas que quieran descubrir tu ciudad.
        </Typography>
    )


    const extensibleKarmeli = (
        <Fragment>
            <Typography paragraph>React,</Typography>
            <Typography paragraph>Css,</Typography>
            <Typography paragraph>JavaScript,</Typography>
            <Typography paragraph>Diseño web Responsivo</Typography>
        </Fragment>
        
    )
    const contenidoKarmeli = (
        <Typography variant="body2" color="textSecondary" component="p">
            Karmelimoda Joven y Karmelimoda Kids es una tienda de ropa de Alcaudete,Jaen que vende ropa desde niño hasta adulto. 
            Además vende trajes de boda y comuniones para niño y complementos. La página web fue creada para promocionarse de forma 
            on-line y añadir una pequeña tienda online.
        </Typography>
    )


    const extensibleAmigo = (
        <Fragment>
            <Typography paragraph>Android,</Typography>
            <Typography paragraph>SqLite,</Typography>
            <Typography paragraph>Java</Typography>
            <Typography paragraph>Android Studio</Typography>
        </Fragment>
        
    )
    const contenidoAmigo = (
        <Typography variant="body2" color="textSecondary" component="p">
            Es una aplicación desarrollada para Android en la que un usuario registra los correos de todos los participantes
            del amigo invisible y se envía un correo a cada participante con su amigo invisible. Se puede configurar la fecha,
            mensajes adicionales, etc
        </Typography>
    )

    return (
      <div className='portafolio-contenedor'>
        <div className='portafolio-atras'>
              
            <div className="loader-bg">
                <Link to='/'>
                    <ArrowBackIcon/>
                </Link>
                </div>
                <div className="drops">
                    <div className="drop1"></div>
                    <div className="drop2"></div>  
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="liquid">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="liquid" />
                    </filter>
                </defs>
                </svg>
        </div>
        <div className='portafolio-contenido'>
            <label className='portafolio-titulo'>Mi portafolio</label>
            <Tarjeta 
                contenido={contenidoAmigo} 
                extensible={extensibleAmigo}
                titulo="Amigo invisible"
                fecha="Diciembre 17, 2019"
                foto={require('./../images/Amigo-web.png')}
                avatar='A'
                icono={<IconButton aria-label="visit" onClick={()=>alert('Proximamente en la play store')}><GetAppIcon/></IconButton>}>
            </Tarjeta>
            <Tarjeta 
                contenido={contenidoTourguide} 
                extensible={extensibleTourGuide}
                titulo="TourGuide"
                fecha="Mayo 20, 2020"
                foto={require('./../images/Tourguide-web.png')}
                avatar='T'
                icono={<IconButton aria-label="visit" onClick={()=>window.open('http://apptourguide.ddns.net/')}><VisibilityIcon/></IconButton>}
                icono2={<IconButton aria-label="visit" onClick={()=>alert('Proximamente en la play store')}><GetAppIcon/></IconButton>}>
            </Tarjeta>
            <Tarjeta 
                contenido={contenidoKarmeli} 
                extensible={extensibleKarmeli}
                titulo="Karmeli moda joven y kids"
                fecha="Junio 18, 2020"
                foto={require('./../images/karmeli-web.png')}
                avatar='K'
                icono={<IconButton aria-label="visit" onClick={()=>window.open('https://karmelimoda.com/#/')}><VisibilityIcon/></IconButton>}>
            </Tarjeta>     
        </div>        
      </div>
    );
  }
  
  export default Portafolio;