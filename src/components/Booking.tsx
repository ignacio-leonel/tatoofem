import React, { useState } from 'react';
import { Calendar, Clock, MessageCircle, User, Mail, Phone } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    description: ''
  });

  const services = [
    'Manga Completa',
    'Media Manga',
    'Cover-Up / Tapar Tatuajes',
    'Tatuajes Femeninos',
    'Blackwork',
    'Diseños Personalizados',
    'Consulta Gratuita'
  ];

  const timeSlots = [
    '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendWhatsApp = () => {
    const message = `¡Hola! Me gustaría reservar un turno para tatuarme.

*Datos del cliente:*
• Nombre: ${formData.name}
• Email: ${formData.email}
• Teléfono: ${formData.phone}

*Detalles del servicio:*
• Servicio: ${formData.service}
• Fecha preferida: ${formData.date}
• Horario preferido: ${formData.time}

*Descripción del tatuaje:*
${formData.description}

¡Espero tu respuesta para coordinar los detalles!`;

    const whatsappUrl = `https://wa.me/5491123456789?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.service) {
      sendWhatsApp();
    }
  };

  return (
    <section id="turnos" className="py-20 bg-gradient-to-b from-purple-950/20 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Reservar Turno
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Completa el formulario y envía tu solicitud por WhatsApp. Te responderé a la brevedad 
              para coordinar tu cita.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-purple-300 mb-2">
                    <User className="inline mr-2" size={16} />
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                    placeholder="Tu nombre completo"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-purple-300 mb-2">
                    <Mail className="inline mr-2" size={16} />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-purple-300 mb-2">
                    <Phone className="inline mr-2" size={16} />
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                    placeholder="+54 9 11 1234-5678"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-medium text-purple-300 mb-2">
                    Servicio *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-purple-300 mb-2">
                    <Calendar className="inline mr-2" size={16} />
                    Fecha Preferida
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-sm font-medium text-purple-300 mb-2">
                    <Clock className="inline mr-2" size={16} />
                    Horario Preferido
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                  >
                    <option value="">Selecciona un horario</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}hs</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-purple-300 mb-2">
                  Descripción del Tatuaje
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all resize-none"
                  placeholder="Describe tu idea: estilo, tamaño, ubicación en el cuerpo, colores, referencias, etc. Mientras más detalles, mejor podremos ayudarte."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-700 hover:to-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/25 flex items-center mx-auto"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Enviar por WhatsApp
                </button>
                <p className="text-sm text-gray-400 mt-4">
                  * Campos obligatorios. Te responderemos dentro de 24hs.
                </p>
              </div>
            </form>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-purple-900/20 rounded-xl border border-purple-500/20">
              <Calendar className="text-purple-400 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold text-white mb-2">Horarios</h3>
              <p className="text-gray-300 text-sm">Lunes a Sábado<br />10:00 - 18:00hs</p>
            </div>
            
            <div className="text-center p-6 bg-purple-900/20 rounded-xl border border-purple-500/20">
              <Clock className="text-purple-400 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold text-white mb-2">Duración</h3>
              <p className="text-gray-300 text-sm">Sesiones de 2-6 horas<br />según el diseño</p>
            </div>
            
            <div className="text-center p-6 bg-purple-900/20 rounded-xl border border-purple-500/20">
              <MessageCircle className="text-purple-400 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-semibold text-white mb-2">Consulta</h3>
              <p className="text-gray-300 text-sm">Primera consulta<br />gratuita</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;