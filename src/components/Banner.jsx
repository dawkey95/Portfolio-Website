import { Col, Row, Container } from 'react-bootstrap';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import HeaderImage from '../assets/img/panda-astronaut.png';

const Banner = () => {
	return (
		<section className="banner" id="home">
			<Container>
				<Row className="align-items-center">
					<Col xs={12} md={6} xl={7}>
						<span className="tagline"> Welcome to my Portfolio</span>
						<h1>
							{`Hi I'm Dawid `}
							<span className="wrap">web developer</span>
						</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit id atque
							fuga ipsum. Esse sint voluptatum minima consequatur tempora eos
							reiciendis nulla labore? Sint, excepturi totam porro obcaecati quisquam
							atque!
						</p>
						<button
							onClick={() => {
								console.log('This is clicked');
							}}
						>
							Let's Connect
							<ArrowCircleRightIcon />
						</button>
					</Col>
					<Col xs={12} md={6} xl={5}>
            <img src={HeaderImage} alt="Header Image" />
          </Col>
				</Row>
			</Container>
		</section>
	);
};

export default Banner;
