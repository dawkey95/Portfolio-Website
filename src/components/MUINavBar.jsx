import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SendIcon from '@mui/icons-material/Send';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import PropTypes from 'prop-types';
import logo from '../assets/img/panda_logo.png';
import ShootingStars from './effects/ShootingStars';

const pages = ['home', 'skills', 'projects'];

function HideOnScroll(props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
	});

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func,
};

const ResponsiveAppBar = (props) => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<HideOnScroll {...props}>
			<AppBar position="fixed" color="transparent" elevation={0}>
				<Container maxWidth="100vw" sx={{ m: 'auto' }}>
					<Toolbar disableGutters>
						<Box
							className="navbar-logo"
							sx={{ width: '6em', display: { xs: 'flex', md: 'flex' } }}
						>
							<img src={logo} alt="Logo" className="logo animate__pulse" />
						</Box>

						<Box
							justifyContent="flex-end"
							sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, m: 5 }}
						>
							<IconButton
								size="large"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none' },
								}}
							>
								{pages.map((page) => (
									<MenuItem key={page} onClick={handleCloseNavMenu}>
										<Link color="inherit" underline="none" href={`#${page}`}>
											{page.charAt(0).toUpperCase() + page.slice(1)}
										</Link>
									</MenuItem>
								))}
							</Menu>
						</Box>

						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							{pages.map((page) => (
								<Button
									key={page}
									onClick={handleCloseNavMenu}
									sx={{ color: 'white', my: 2, display: 'block' }}
								>
									<Link
										sx={{
											color: 'inherit',
											textDecoration: 'none',
											'&:hover': {
												color: 'rgb(190, 196, 192)',
											},
										}}
										href={`#${page}`}
									>
										{page.charAt(0).toUpperCase() + page.slice(1)}
									</Link>
								</Button>
							))}
						</Box>

						<Box
							justifyContent="flex-end"
							sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, mr: 5 }}
						>
							<Button
								variant="outlined"
								endIcon={<SendIcon />}
								color="inherit"
								onClick={() => {
									console.log('To be connected...');
								}}
							>
								Let's Connect
							</Button>
						</Box>
					</Toolbar>
				</Container>
				<ShootingStars />
			</AppBar>
		</HideOnScroll>
	);
};
export default ResponsiveAppBar;
