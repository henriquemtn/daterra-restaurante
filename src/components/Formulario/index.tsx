import { useState } from 'react';
import FadeInOnScroll from "../../scripts/fadeInOnScroll";
import CustomButton from "../Button";
import emailjs from "emailjs-com"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Formulario() {

    const initialFormData = {
        name: "",
        tel: "",
        email: "",
        message: "",
    };

    const [formData, setFormData] = useState(initialFormData);

    const resetForm = () => {
        setFormData(initialFormData);
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const isValidFormData = () => {
        return formData.name && formData.email && formData.message;
      };          

    const sendMail = () => {
        emailjs.init("FBtadcftC0yLwxsYB");  

        if (!isValidFormData()) {
            toast.error("Preencha todos os campos obrigatórios.");
            return;
          }

        var params = {
            name: formData.name,
            to: "daterra.restaurantenatural@gmail.com",
            subject: "Contato do site",
            replyto: formData.email,
            message: formData.message,
            email: formData.email,
            number: formData.tel,
        };

        var serviceID = "service_fb0pxbf";
        var templateID = "template_2wjg80e";

        emailjs
            .send(serviceID, templateID, params)
            .then((_res) => {
                toast.success("Email enviado com sucesso!");
                resetForm();
                console.log("Email enviado");
            })
            .catch((error) => {
                toast.error("Ocorreu um erro ao enviar o email.");
                console.error("Erro ao enviar o email:", error);
            });
    };

    const handleEnviarClick = () => {
        sendMail();
    };

    return (
        <section className="text-gray-600 body-font relative">
            <FadeInOnScroll>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Entre em contato</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Entre em contato pelo Telefone: (48) 3025-2305.
                            <br></br>
                            ou se preferir envie um email preenchendo os campos abaixo:</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nome</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-dtverde focus:bg-white focus:ring-2 focus:ring-green-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="tel" className="leading-7 text-sm text-gray-600">Telefone</label>
                                    <input
                                        type="tel"
                                        id="tel"
                                        name="tel"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-dtverde focus:bg-white focus:ring-2 focus:ring-green-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        value={formData.tel}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-dtverde focus:bg-white focus:ring-2 focus:ring-green-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Mensagem</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-dtverde focus:bg-white focus:ring-2 focus:ring-green-100 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full flex justify-center">
                                <div onClick={handleEnviarClick} >
                                    <CustomButton title="Enviar" width="250px" backgroundColor="#222" hoverColor="#222" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInOnScroll>
        </section>
    );
}