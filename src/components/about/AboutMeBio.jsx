import profileImage from '../../images/profile.jpg';
//import { useContext } from 'react';
//import AboutMeContext from '../../context/AboutMeContext';
import { useTranslation } from 'react-i18next';

const AboutMeBio = () => {
	//const { aboutMe } = useContext(AboutMeContext);
	const { t } = useTranslation();

	//const aboutMe = t('aboutMe');
	
	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<img src={profileImage} className="rounded-lg w-96" alt="" />
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
				<p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
					{t('aboutMe.bio')}
				</p>
			</div>
		</div>
	);
};

export default AboutMeBio;
