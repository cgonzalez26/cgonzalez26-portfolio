import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';
import emailjs from "emailjs-com";
import { useRef } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

//import Alert from '../reusable/Alerts'; con react-boostrap

const ContactForm = () => {
	const form = useRef();

	const notifySuccess = () => {
		console.log('entro msje exito');
        toast.success('¡Tu mensaje ha sido enviado exitosamente!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    const notifyError = () => {
		console.log('entro msje error');
        toast.error('Algo salió mal. Por favor, inténtelo de nuevo más tarde', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    };

	const sendEmail = (e) => {
		e.preventDefault();
		const f = e.target; //form
		emailjs
			.sendForm(
				"service_3qnw1sq",
				"template_7v8ytj3",
				form.current,
				"n1UBScCpyDD7MfpEW"
			)
			.then(
				(result) => {
					console.log(result.text);
					f.reset();
					//alert("SUCCESS!");
					notifySuccess();
				},
				(error) => {					
					console.log(error.text);
					notifyError();
					//alert("FAILED...", error);
				}
			);
	};

	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<ToastContainer />
				<form
					ref={form} onSubmit={sendEmail}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Formulario de Contacto
					</p>
					
					<FormInput
						inputLabel="Nombre"
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="name"
						placeholderText="Tu Nombre"
						ariaLabelName="Name"
					/>
					<FormInput
						inputLabel="E-mail"
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="email"
						placeholderText="Tu E-mail"
						ariaLabelName="Email"
					/>
					<FormInput
						inputLabel="Tema"
						labelFor="subject"
						inputType="text"
						inputId="subject"
						inputName="subject"
						placeholderText="Tema"
						ariaLabelName="Subject"
					/>

					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							Mensaje
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols="14"
							rows="6"
							aria-label="Message"
						></textarea>
					</div>

					<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
						<Button
							title="Enviar"
							type="submit"
							aria-label="Enviar"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
