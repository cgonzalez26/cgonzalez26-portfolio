// Import images
import WebImage1 from '../images/Home_Freesalta.jpg';
import WebImage2 from '../images/Home_Secytec.jpg';
import WebImage3 from '../images/Login_SmsAdmin.jpg';
import WebImage4 from '../images/Home_libdelestudiante.jpg';

export const projectsData = [
	{
		id: 1,
		title: 'Web Site FreeSalta',
		category: 'Web Site',
		img: WebImage1,
		ProjectHeader: {
			title: 'Project Management',
			publishDate: 'Jul 26, 2021',
			tags: 'Frontend / Wordpress',
		},
		urlgit: 'https://github.com/cgonzalez26/FreeSalta',
	},
	{
		id: 2,
		title: 'Web Site Secytec',
		category: 'Web Site',
		img: WebImage2,
		urlgit: 'https://github.com/cgonzalez26/Secytec',
	},
	{
		id: 3,
		title: 'Sms Admin',
		category: 'Web Application',
		img: WebImage3,
		urlgit: 'https://github.com/cgonzalez26/SmsGestion',
	},
	{
		id: 4,
		title: 'Web Site Libreria del Estudiante',
		category: 'Web Site',
		img: WebImage4,
		urlgit: 'https://github.com/cgonzalez26/libreriadelestudiante.com',
	}
];
