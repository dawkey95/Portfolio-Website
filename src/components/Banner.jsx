import { useState, useEffect } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import HeaderImage from '../assets/img/panda-astronaut.png';

const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState('');
	const [delta, setDelta] = useState(300 );
	const toRotate = ['Web Developer', 'Web Designer', 'Gamer'];
	const period = 2000;

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
	}, [text]);

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setDelta(period);
		} else if (isDeleting && updatedText === '') {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setDelta(500);
		}
	};

	return (
		<section className="banner" id="home">
			<Container>
				<Row className="align-items-center">
					<Col xs={12} md={6} xl={7}>
						<span className="tagline">Welcome to my Portfolio</span>
						<h1>
							{`Hi I'm Dawid `}
              <br></br>
							<span className="wrap span-text">{text}</span>
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
						<img src={HeaderImage} alt="Header" />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Banner;
