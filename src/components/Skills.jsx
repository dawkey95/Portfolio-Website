import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import colorSharp from '../assets/img/color-sharp.png';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const htmlPerc = 85;
const javascriptPerc = 65;
const gitPerc = 60;
const jsLibraryPerc = 55;
const responsiveWebPerc = 75;

const Skills = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<section className="skill" id="skills">
			<Container>
				<Row>
					<Col>
						<div className="skill-bx">
							<h2>Skills</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque corrupti
								laborum, consequuntur quam ipsa dolor earum aliquam labore dolore
								expedita unde suscipit nam quaerat tempora, eaque, eum accusantium
								recusandae commodi!
							</p>
							<Carousel
								responsive={responsive}
								infinite={true}
								className="skill-slider"
							>
								<div className="item">
									<div style={{ width: 150, height: 300 }}>
										<CircularProgressbar
											value={htmlPerc}
											text={`${htmlPerc}%`}
											styles={buildStyles({
												pathColor: `rgba(163, 22, 227, ${htmlPerc / 100})`
											})}
										/>
										<h5 style={{ paddingTop: 10 }}>HTML and CSS</h5>
									</div>
								</div>

								<div className="item">
									<div style={{ width: 150, height: 300 }}>
										<CircularProgressbar
											value={javascriptPerc}
											text={`${javascriptPerc}%`}
										/>
										<h5 style={{ paddingTop: 20 }}>Javascript</h5>
									</div>
								</div>

								<div className="item">
									<div style={{ width: 150, height: 300 }}>
										<CircularProgressbar
											value={gitPerc}
											text={`${gitPerc}%`}
											styles={buildStyles({
												pathColor: `rgba(163, 22, 227, ${htmlPerc / 100})`
											})}
										/>
										<h5 style={{ paddingTop: 20 }}>Git</h5>
									</div>
								</div>

								<div className="item">
									<div style={{ width: 150, height: 300 }}>
										<CircularProgressbar
											value={jsLibraryPerc}
											text={`${jsLibraryPerc}%`}
										/>
										<h5 style={{ paddingTop: 20 }}>JS Libraries</h5>
									</div>
								</div>

								<div className="item">
									<div style={{ width: 150, height: 300 }}>
										<CircularProgressbar
											value={responsiveWebPerc}
											text={`${responsiveWebPerc}%`}
											styles={buildStyles({
												pathColor: `rgba(163, 22, 227, ${htmlPerc / 100})`
											})}
										/>
										<h5 style={{ paddingTop: 20 }}>Responsive Web Design</h5>
									</div>
								</div>
							</Carousel>
						</div>
					</Col>
				</Row>
			</Container>
			<img className="background-image-left" src={colorSharp} alt="" />
		</section>
	);
};

export default Skills;
