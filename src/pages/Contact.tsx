import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageSquare, ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import SectionHeader from '../components/SectionHeader';

export default function Contact() {
  const directContacts = [
    {
      title: 'WhatsApp Contact',
      value: '0625481415',
      desc: 'Connect immediately for seat registration guidelines, payment schedules, or general support.',
      actionLabel: 'Chat on WhatsApp',
      actionUrl: 'https://wa.me/255625481415',
      color: 'border-emerald-500/10 hover:border-emerald-500/25',
      iconColor: 'text-emerald-400',
      btnBg: 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border-emerald-500/20',
      icon: <MessageSquare className="h-6 w-6" />
    },
    {
      title: 'Phone Line',
      value: '0625481415',
      desc: 'Speak directly with our team for immediate assistance during business hours.',
      actionLabel: 'Call 0625481415',
      actionUrl: 'tel:0625481415',
      color: 'border-brand-cyan/10 hover:border-brand-cyan/25',
      iconColor: 'text-brand-cyan',
      btnBg: 'bg-brand-cyan/10 hover:bg-brand-cyan/20 text-brand-cyan border-brand-cyan/20',
      icon: <Phone className="h-6 w-6" />
    },
    {
      title: 'Email Address',
      value: 'kobastarz@gmail.com',
      desc: 'Send us your inquiries, sponsorship details, or registration requirements anytime.',
      actionLabel: 'Email Us',
      actionUrl: 'mailto:kobastarz@gmail.com',
      color: 'border-brand-magenta/10 hover:border-brand-magenta/25',
      iconColor: 'text-brand-magenta',
      btnBg: 'bg-brand-magenta/10 hover:bg-brand-magenta/20 text-brand-magenta border-brand-magenta/20',
      icon: <Mail className="h-6 w-6" />
    },
    {
      title: 'Physical Location',
      value: 'Tosa, Iringa, Tanzania',
      desc: 'Our administrative hub and physical campus location.',
      actionLabel: 'View on Map',
      actionUrl: 'https://maps.google.com/?q=Tosa,Iringa,Tanzania',
      color: 'border-amber-500/10 hover:border-amber-500/25',
      iconColor: 'text-amber-400',
      btnBg: 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border-amber-500/20',
      icon: <MapPin className="h-6 w-6" />
    }
  ];

  return (
    <div id="contact-view" className="relative pt-28 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <section className="relative z-10 mb-12 p-6 md:p-8">
        <SectionHeader
          badge="Connect Safely"
          title="Contact Us"
          subtitle="Connect directly with our advisors. There are no redundant forms—reach out via your preferred channel."
          gradientType="emerald"
          titleClassName="text-5xl sm:text-6xl md:text-7xl font-black"
        />
      </section>

      {/* Vertical Stack List for All Devices */}
      <section className="relative z-10 px-4 md:px-8">
        <div className="flex flex-col space-y-6">
          {directContacts.map((contact, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <GlassCard hoverGlow={false} className={`p-6 border transition-all ${contact.color}`}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3.5 rounded-xl bg-white/5 border border-white/5 ${contact.iconColor} flex-shrink-0`}>
                      {contact.icon}
                    </div>
                    <div className="space-y-1 text-left">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 block">
                        {contact.title}
                      </span>
                      <h3 className="text-card-title text-white">
                        {contact.value}
                      </h3>
                      <p className="text-small text-gray-300 max-w-md">
                        {contact.desc}
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-full sm:w-auto flex-shrink-0">
                    <a
                      href={contact.actionUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex sm:inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl border border-white/10 hover:border-[#11FF62]/30 bg-white/5 hover:bg-white/10 text-btn tracking-wider uppercase transition-all cursor-pointer w-full sm:w-auto text-center"
                    >
                      <span className="bg-gradient-to-r from-[#11FF62] via-white to-[#F4FF12] bg-clip-text text-transparent">{contact.actionLabel}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-[#11FF62] group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Horizontal Social Media Icons Block below location */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-12 flex flex-col items-center space-y-4"
        >
          <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500">
            Connect with us on Social Media
          </span>
          <div className="flex justify-center space-x-4">
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all border border-blue-500 shadow-md hover:scale-110 cursor-pointer text-white"
              aria-label="TikTok"
            >
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.53.02C13.84 0 15.14 0 16.44 0c.08 1.53.63 3.02 1.59 4.23.95.12 1.93-.11 2.8-.52V7.24c-1.12.33-2.31.22-3.37-.29-.53-.29-.99-.7-1.35-1.19-.07 2.1-.01 4.19-.03 6.29-.02 1.34-.31 2.68-.89 3.89-.9 1.77-2.6 3.14-4.57 3.55-1.9.36-3.9-.06-5.46-1.18-1.57-1.11-2.58-2.92-2.73-4.87-.24-2.82 1.63-5.5 4.39-6.19 1.45-.34 3-.15 4.32.55V13.93c-1.32-.41-2.77-.13-3.83.74-.89.77-1.36 1.94-1.31 3.1.04 1.35.79 2.59 1.92 3.25 1.15.65 2.58.64 3.7-.04.91-.58 1.46-1.59 1.52-2.66-.02.3-.01.6-.01.9z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all border border-blue-500 shadow-md hover:scale-110 cursor-pointer text-white"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5 text-white" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all border border-blue-500 shadow-md hover:scale-110 cursor-pointer text-white"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5 text-white" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all border border-blue-500 shadow-md hover:scale-110 cursor-pointer text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-white" />
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
