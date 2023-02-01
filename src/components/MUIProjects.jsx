import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

const MUIProjects = () => {
	const projects = [
		{
			title: 'Business Startup',
			description: 'Design and Development',
			imgUrl: 'src/assets/img/project-img1.png',
		},
		{
			title: 'Business Startup',
			description: 'Design and Development',
			imgUrl: 'src/assets/img/project-img2.png',
		},
		{
			title: 'Business Startup',
			description: 'Design and Development',
			imgUrl: 'src/assets/img/project-img3.png',
		},
	];

	return (
		<section className="project" id="project">
			<Container>
				<Grid container spacing={2}>
					<Grid xs={12}>
						<h2>Projects</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed accusantium
							repellendus quaerat a aliquid iure quia veniam perferendis saepe! Illum.
						</p>
					</Grid>
				</Grid>
			</Container>
		</section>
	);
};

export default MUIProjects;
