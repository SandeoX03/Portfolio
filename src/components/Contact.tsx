import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { HiMail, HiLocationMarker, HiPaperAirplane } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import { personalInfo } from "../data/portfolio";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <SectionWrapper id="contact" className="section-alt">
      <SectionHeading
        label="Contact"
        title="Let's connect"
        description="Whether it's a collaboration, internship opportunity, or just a friendly hello — I'd love to hear from you."
      />

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <p className="text-[#475569] leading-relaxed">
            I'm currently open to internships, cybersecurity projects, and networking opportunities.
            Based in Kathmandu and studying at Taylor's University in Malaysia — available for remote
            collaboration worldwide.
          </p>

          <div className="space-y-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="card flex items-center gap-4 p-4 group !rounded-xl"
            >
              <div className="icon-box h-11 w-11 shrink-0">
                <HiMail size={20} />
              </div>
              <div>
                <p className="text-xs text-[#64748b] uppercase tracking-wider font-medium">Email</p>
                <p className="text-sm text-[#0f172a] font-medium group-hover:text-[#1e40af] transition-colors">
                  {personalInfo.email}
                </p>
              </div>
            </a>

            <div className="card-flat flex items-center gap-4 p-4">
              <div className="icon-box h-11 w-11 shrink-0">
                <HiLocationMarker size={20} />
              </div>
              <div>
                <p className="text-xs text-[#64748b] uppercase tracking-wider font-medium">Location</p>
                <p className="text-sm text-[#0f172a] font-medium">{personalInfo.location}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card p-6 md:p-8 space-y-5"
        >
          <div>
            <label htmlFor="name" className="block text-xs text-[#64748b] uppercase tracking-wider font-medium mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="input-field"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs text-[#64748b] uppercase tracking-wider font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="input-field"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs text-[#64748b] uppercase tracking-wider font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="input-field resize-none"
              placeholder="Tell me about your project or opportunity..."
            />
          </div>

          <button type="submit" className="btn-primary w-full justify-center">
            <HiPaperAirplane />
            {submitted ? "Opening email client..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
