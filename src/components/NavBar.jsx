import { useState, useEffect } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import logo from '../assets/img/panda_logo.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import 'animate.css'

const NavBar = () => {
	const [activeLink, setActiveLink] = useState('home');
	const [scrolled, setScrolled] = useState(false);

	const onUpdateActiveLink = (link) => {
		setActiveLink(link);
	};

	useEffect(() => {
		const onScroll = () => {
			window.scrollY < 50 ? setScrolled(true) : setScrolled(false);
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
			<Container>
				<Navbar.Brand href="#home">
					<img src={logo} alt="Logo" className="logo animate__animated animate__pulse" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav">
					<span className="navbar-toggler-icon"></span>
				</Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link
							href="#home"
							className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
							onClick={() => onUpdateActiveLink('home')}
						>
							Home
						</Nav.Link>
						<Nav.Link
							href="#skils"
							className={
								activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
							}
							onClick={() => onUpdateActiveLink('skills')}
						>
							Skills
						</Nav.Link>
						<Nav.Link
							href="#projects"
							className={
								activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
							}
							onClick={() => onUpdateActiveLink('projects')}
						>
							Projects
						</Nav.Link>
					</Nav>
					<span className="navbar-text">
						<div className="social-icon">
							<a
								href="https://www.linkedin.com/in/dawidkeyser/"
								target={'_blank'}
								rel={'noopener noreferrer'}
							>
								<LinkedInIcon style={{ color: 'white' }} className="s-icons" />
							</a>
							<a
								href="https://github.com/dawkey95"
								target={'_blank'}
								rel={'noopener noreferrer'}
							>
								<GitHubIcon sx={{ color: 'white' }} className="s-icons" />
							</a>
						</div>
						<button
							className="contact-me"
							onClick={() => {
								console.log('connect');
							}}
						>
							<span>Let's Connect</span>
						</button>
					</span>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
