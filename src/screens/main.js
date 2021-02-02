import React from 'react';
import './../App.css'
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeEurope,faTerminal,faDesktop,faCalendar,faPhoneAlt,faEnvelope,faComment, faHome,faGraduationCap,faCode,faFileCode,faFolder,faMagic,faPencilRuler,faMapMarker, faPrint } from '@fortawesome/free-solid-svg-icons'

function Main() {
  
    const [opacidad, setopacidad] = React.useState(1)
    const [opacidad2, setopacidad2] = React.useState(0)
    const [flotante,setflotante] = React.useState('none')
    const [tamano, settamano] = React.useState(window.innerWidth)
    const [contacto, setcontacto] = React.useState('none')
    
    window.onresize = function () {
      settamano(window.innerWidth)
    }    
  
    React.useEffect(() => {
      if(tamano > 1200){
        window.onscroll = function() {
          setopacidad(1-(this.window.scrollY/1350))
          setopacidad2(0+(this.window.scrollY/1350))
          if(opacidad2 > 0.85){
            setflotante('inline-block')
          }else{
            setflotante('none')
          }
          if(this.window.scrollY>1850){
            setcontacto('flex')
          }else{
            setcontacto('none')
          }
        };
      }else{
        setflotante('block')
        window.onscroll = function() {
          setopacidad(1)
          setopacidad2(1)
        }
        setopacidad2(1)
        setopacidad(1)
        setcontacto('inline-block')
      }
  
    })
    
  
    return (
      <div className="App">
        <div className='info-introduccion-pc' style={{ opacity:opacidad }}>
              <h1>Juan David Jiménez</h1>
              <label>Desarrollador Multiplataforma Desarrollador Web</label>            
        </div>
        <div className='contenedor' style={{ opacity: opacidad2 }}>        
          <section id="seccion1">
            <div className="flotante" style={{display:flotante}}/>
            <div className='info-introduccion'>
              <h1>Juan David Jiménez</h1>
              <label>Desarrollador Multiplataforma Desarrollador Web</label>            
            </div>
            <label className="titulo">Información personal</label>
            <div className='seccion1-apartado'>              
              <b>
                <FontAwesomeIcon icon={faGlobeEurope} />
                <label>Lugar de nacimiento:</label>
              </b>
              <label>Granada, España</label>
            </div>
            <div className='seccion1-apartado'>
              <b>
                <FontAwesomeIcon icon={faCalendar} />
                <label>Fecha de nacimiento:</label>
              </b>
              <label>19 - 08 - 1995</label>
            </div>
            <div className='seccion1-apartado'>
              <b>
                <FontAwesomeIcon icon={faHome} />
                <label>Residencia actual:</label>
              </b>
              <label>Granada, Andalucía</label>
            </div>
            <div className='seccion1-apartado'>
              <b>
                <FontAwesomeIcon icon={faEnvelope} />
                <label>Email:</label>
              </b>
              <label>juand.jdjc@gmail.com</label>
            </div>
            <div className='seccion1-apartado'>
              <b>
                <FontAwesomeIcon icon={faPhoneAlt} />
                <label>Teléfono:</label>
              </b>
              <a href={"tel:600368342"}>+ 34 600 368 342</a>
            </div>
            <div className='seccion1-apartado'>
              <b>
                <FontAwesomeIcon icon={faComment} />
                <label>Idiomas:</label>
              </b>
              <label>Español, Inglés</label>
            </div>
            <div className='seccion1-apartado'>
              <b>
              <FontAwesomeIcon icon={faGraduationCap} />
                <label>Estudios:</label>
              </b>
              <label>Desarrollo de aplicaciones multiplataforma</label>
              <a href={"https://openwebinars.net/cert/37jda"} target='_blank'>Certificados Openwebinars</a>
            </div>
            
          </section>
          <section id="seccion2">
            <div className='seccion2-apartado'>
              <label className="titulo">Experiencia profesional</label>
              <div className="experiencia-cabecera">  
                <img src={require('./../images/ecope.png')} alt='ecope'/>              
                <div className='empresa'>
                  <label>Ecope</label>                  
                </div>                
                <div className='localizacion'><FontAwesomeIcon icon={faMapMarker} /><label>Santa Fe</label></div>
                <div className='localizacion'><FontAwesomeIcon icon={faCalendar} /><label>junio 2020 - actual</label></div>
              </div>
              <div className='contenido-experiencia'>
                <label className="titulo">Sitio Web de la empresa</label>
                <a href="https://www.ecope.es" target='blanck'>www.ecope.es</a>
                <label className="titulo">Desempeño</label>
                <label>
                  Estudiante en prácticas. En ese periodo, trabaje con JavaScript, Reactjs, React-Native, Wordpress
                </label>
                <label className='titulo' >Habilidades adquiridas</label>
                <label>
                  Trabajar en una empresa como esa, me dio la oportunidad de poner en práctica todo lo aprendido en mis años de
                  formación, además de aprender cómo se estructura una empresa, aprendí JavaScript, React, CSS de la mejor
                  forma posible. Con una plantilla joven y dinámica, sin duda a sido una gran experiencia.
                </label>
              </div>
            </div>
          </section>
          <section id="seccion3">
            <div className='seccion3-apartado'> 
              <label className='titulo'>Habilidades</label>
              <div className='skill'>
                <div className='skill-cabecera'>
                  <FontAwesomeIcon icon={faCode} />
                  <label>Lenguajes Desarrollo web</label>
                </div>
                <div className='skill-contenido'>
                  <label>Html</label>
                  <label>Css</label>
                  <label>Sass(.scss)</label>
                  <label>JavaScript/Jquery</label>
                  <label>Markdown</label>
                  <ul className='framework' >Frameworks:</ul>
                  <label>React</label>
                  <label>React-native</label>
                </div>
              </div>
              <div className='skill'>
                <div className='skill-cabecera'>
                  <FontAwesomeIcon icon={faFileCode} />
                  <label>Lenguajes Desarrollo Multiplataforma</label>
                </div>
                <div className='skill-contenido'>
                  <label>Java</label>
                  <label>Xml</label>
                  <label>Swift</label>
                  <label>PHP</label>
                </div>
              </div>
              <div className='skill'>
                <div className='skill-cabecera'>
                  <FontAwesomeIcon icon={faFolder} />
                  <label>Entornos de desarrollo</label>
                </div>
                <div className='skill-contenido'>
                  <label>Netbeans</label>
                  <label>Xcode</label>
                  <label>Android Studio</label>
                  <label>Visual Studio Code</label>
                  <label>Sublime Text</label>
                </div>
              </div>
              <div className='skill'>
                <div className='skill-cabecera'>
                  <FontAwesomeIcon icon={faTerminal} />
                  <label>Control de versiones</label>
                </div>
                <div className='skill-contenido'>
                  <label>Git(+ Github)</label>
                </div>
              </div>
              <div className='skill'>
                <div className='skill-cabecera'>
                  <FontAwesomeIcon icon={faMagic} />
                  <label>Software diseño gráfico</label>
                </div>
                <div className='skill-contenido'>
                  <label>Photoshop</label>
                  <label>Illustrator</label>
                </div>              
              </div>
              <div className='skill'>
                <div className='skill-cabecera'>
                  <FontAwesomeIcon icon={faDesktop} />
                  <label>OS</label>
                </div>
                <div className='skill-contenido'>
                  <label>Windows</label>
                  <label>Linux</label>
                  <label>Mac</label>
                </div>
              </div>
            </div>
          </section>
          <section id="seccion4">
          <div className='seccion2-apartado'>
              <label className="titulo">Metodología</label>
              <div className='contenido-experiencia'>
                <label className="titulo">Aprendizaje continuo y mejora</label>
                <label>
                  Creo que la base de un buen desarrollador es un deseo constante de aprender y seguir las nuevas 
                  tendencias. Soy un ávido lector de blogs relacionados con el desarrollo y los temas que leo pueden no 
                  estar relacionados exclusivamente con mi área de especialización, ya que también estoy muy interesado 
                  en el rendimiento, la experiencia del usuario y la usabilidad.
                </label>
                <label className="titulo">Diseño</label>
                <label>
                  Creo en un diseño centrado en el contenido, que anticipa las expectativas del usuario y que es simple en 
                  apariencia, pero ofrece interacciones efectivas y familiares. Como se suele decir: el contenido es el rey.
                </label>
                <label className='titulo' >Código</label>
                <label>
                  El código debe ser reutilizable, seco, legible y bien organizado. Hay muchas formas de lograr un objetivo, 
                  elijo el más corto y más elegante. Evito cuidadosamente la redundancia, me preocupo por el rendimiento y 
                  las mejores prácticas, y siempre tengo una amplia comprensión del contexto. Nunca me concentro exclusivamente 
                  en los detalles, sino que siempre trato de imaginar cómo se puede modificar una determinada pieza de código 
                  en futuras implementaciones y cómo puedo hacer que sea ágil y fácilmente interpretable por mi futuro yo u otros desarrolladores.
                </label>
              </div>
            </div>
          </section>
          <div className='contacto' style={{ display: contacto }}>
            <div className='llamame'>
              <div className='centrar'>
                <FontAwesomeIcon icon={faPhoneAlt} />
                <a href='tel:600368342'>Llamame</a>       
              </div>                 
            </div>
  
            <div className='contactame'>
              <div className='centrar'>
                <FontAwesomeIcon style={{ fill:'rgb(255, 255, 255)!important' }} icon={faEnvelope} />
                <a href='mailto:juand.jdjc@gmail.com'>Contáctame</a>      
              </div>                  
            </div>
  
            <div className='portafolio'>
              <div className='centrar'>
                <FontAwesomeIcon icon={faPencilRuler} />
                <Link to='/portafolio'>Portafolio</Link>    
              </div>                    
            </div>
  
            <div className='imprimir'>
              <div className='centrar'>
                <FontAwesomeIcon icon={faPrint} />
                <a style={{ cursor: 'pointer' }} onClick={()=>window.print()}>Imprimir CV</a>  
              </div>                      
            </div>
  
            <div className='referencias'>
              <img src={require('./../images/git.svg')} alt='github' onClick={()=>window.open('https://github.com/juand198')}/>
              <img src={require('./../images/linkedin.svg')} alt='linkedin' onClick={()=>window.open('https://www.linkedin.com/in/juan-david-jiménez-cáceres-65a169155')}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Main;
  