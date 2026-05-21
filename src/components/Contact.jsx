import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaClock } from 'react-icons/fa'
import { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulário enviado:', form)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Fale Conosco</h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-2"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">Estamos prontos para atender sua empresa com agilidade e excelência.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex gap-4 items-start">
              <FaMapMarkerAlt className="text-2xl text-secondary mt-1" />
              <div><h3 className="font-semibold text-primary">Matriz</h3><p className="text-gray-600">Av. Industrial, 1000 – Distrito Industrial, São Paulo – SP, CEP 08000-000</p></div>
            </div>
            <div className="flex gap-4 items-start">
              <FaPhoneAlt className="text-2xl text-secondary mt-1" />
              <div><h3 className="font-semibold text-primary">Telefone</h3><p className="text-gray-600">(11) 3456-7890</p></div>
            </div>
            <div className="flex gap-4 items-start">
              <FaEnvelope className="text-2xl text-secondary mt-1" />
              <div><h3 className="font-semibold text-primary">E-mail</h3><p className="text-gray-600">comercial@h2bplasticos.com.br</p></div>
            </div>
            <div className="flex gap-4 items-start">
              <FaClock className="text-2xl text-secondary mt-1" />
              <div><h3 className="font-semibold text-primary">Horário de atendimento</h3><p className="text-gray-600">Segunda a sexta, 8h às 18h</p></div>
            </div>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition-all shadow-md hover:shadow-xl"
            >
              <FaWhatsapp size={20} /> Atendimento via WhatsApp
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <input type="text" name="name" placeholder="Seu nome completo" value={form.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary" required />
              <input type="email" name="email" placeholder="Seu melhor e-mail" value={form.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary" required />
              <textarea name="message" rows="4" placeholder="Sua mensagem ou dúvida" value={form.message} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary" required></textarea>
              <button type="submit" className="w-full bg-accent hover:bg-amber-600 text-primary font-bold py-3 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-md">Enviar mensagem</button>
              {submitted && <p className="text-green-600 text-center mt-2">Mensagem enviada com sucesso! Entraremos em contato.</p>}
            </form>
            <div className="h-64 w-full">
              <iframe title="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.097123456789!2d-46.633308!3d-23.550520!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDMzJzAxLjkiUyA0NsKwMzgnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m0" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact