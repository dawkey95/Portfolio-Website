import { useState, useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Container from '@mui/material/Container';
// import { Col, Row, Container } from 'react-bootstrap';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import HeaderImage from '../assets/img/panda-astronaut.png';

const MUIBanner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState('');
	const [delta, setDelta] = useState(300);
	const toRotate = ['Web Developer...', 'Web Designer...', 'Gamer...'];
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
				<Grid container spacing={2}>
					<Grid xs={6} md={8}>
						<p>xs=6 md=8</p>
					</Grid>
					<Grid xs={6} md={4}>
						<p>xs=6 md=4</p>
					</Grid>
					<Grid xs={6} md={4}>
						<p>xs=6 md=4</p>
					</Grid>
					<Grid xs={6} md={8}>
						<p>xs=6 md=8</p>
					</Grid>
				</Grid>
			</Container>

			{/* <Container>
				<Row className="align-items-center">
					<Col xs={12} md={6} xl={7}>
						<span className="tagline">Welcome to my Portfolio</span>
						<h1>
							{`Hi I'm Dawid `}
							<br></br>
							<span className="wrap span-text">{text}</span>
						</h1>
						<p className="about-me">
							I am an aspiring web developer with a keen interest in front-end
							technologies. I believe we can never know enough and so I am on a journey
							of learning, to better myself and constantly be pushing myself forward
							into the...
							<em>
								<h4>unknown</h4>
							</em>
						</p>
						<p className="quote">
							“For the things we have to learn before we can do them, we learn by doing
							them.” ― Aristotle
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
			</Container> */}
		</section>
	);
};

export default MUIBanner;
