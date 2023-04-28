import { motion } from 'framer-motion';
//import { Link } from 'react-router-dom';
import { FiGithub } from 'react-icons/fi';

const socialLink = 
	{
		id: 1,
		icon: <FiGithub />,		
	}
;

const ProjectSingle = ({ title, category, image, urlgit }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>			
			<div className="rounded-xl shadow-lg hover:shadow-xl mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
				<div>
					<img
						src={image}
						className="rounded-t-xl border-none"
						alt="Single Project"
					/>
				</div>
				<div className="text-center px-4 py-6">
					<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
						{title}
					</p>
					<span className="text-lg text-ternary-dark dark:text-ternary-light">
						{category}
					</span>
					<ul className="flex justify-center">
						<a
							href={urlgit}
							target="__blank"
							key={socialLink.id}
							className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
						>
							<i className="text-xl sm:text-2xl md:text-3xl">
								{socialLink.icon}
							</i>
						</a>
					</ul>
				</div>
			</div>			
		</motion.div>
	);
};
//<Link to="/projects/single-project" aria-label="Single Project">
export default ProjectSingle;
