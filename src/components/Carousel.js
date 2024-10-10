import Carousel from 'react-bootstrap/Carousel';
import '../css/Carousel.css'

export default function UncontrolledCarousel() {
  return (
    <Carousel className='custom-carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100" // Estilo para que a imagem ocupe toda a largura do carousel
          src="https://wallpaperaccess.com/full/235811.jpg" // Substitua pela URL da sua imagem
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" // Estilo para que a imagem ocupe toda a largura do carousel
          src="https://assets.ur.se/id/227507/images/1_xl.jpg" // Substitua pela URL da sua imagem
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" // Estilo para que a imagem ocupe toda a largura do carousel
          src="https://th.bing.com/th/id/R.e951b584a3b5824e55bf961cfac02a0a?rik=aKYobqWZcvRPLg&riu=http%3a%2f%2fwww.tz-job.com%2fwp-content%2fuploads%2f2023%2f02%2fa134d70a7ea11e8d79dacc8bb27a237d-44.png&ehk=f8LT46pO4BOz%2fL1sUW1NU0pljFjADlLDCRjckoDSEe0%3d&risl=&pid=ImgRaw&r=0" // Substitua pela URL da sua imagem
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
