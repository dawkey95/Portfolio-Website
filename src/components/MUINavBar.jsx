import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
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

const pages = ['Home', 'Skills', 'Projects'];
const pageLink = ['#home', '#skills', '#projects'];

function HideOnScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
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
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
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
				<Container maxWidth="100vw" sx={{m: 'auto'}}>
					<Toolbar disableGutters>
						<Box
							className="navbar-logo"
							sx={{ width: '10em',  display: { xs: 'none', md: 'flex' } }}
						>
							<img src={logo} alt="Logo" className="logo animate__pulse" />
						</Box>

						<Box
							justifyContent="flex-end"
							sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, m: 5 }}
						>
							<IconButton
								size="large"
								aria-label="account of current user"
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
										<Typography textAlign="center">{page}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>

						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							{pages.map((page) => (
								<Button
									key={page}
									onClick={handleCloseNavMenu}
									sx={{ my: 2, color: 'white', display: 'block' }}
								>
									{page}
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
