import { useState, type FormEvent } from "react";
import SectionWrapper from "./SectionWrapper";
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
    <SectionWrapper id="contact" className="border-t border-white/10">
      <div className="glass-panel rounded-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
        {/* Subtle accent backdrop glow inside contact card */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 min-w-0">
          <div className="lg:col-span-5 min-w-0">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              <p className="label-text">Get in Touch</p>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-4">
              Let's build something secure & scalable.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              Open to cybersecurity internships, cloud architecture projects, and technical opportunities. Based in Kathmandu, studying at Taylor's University — available for remote roles.
            </p>

            <ul className="space-y-4 text-xs sm:text-sm">
              <li className="glass-card p-3.5 flex flex-col gap-1">
                <span className="label-text text-[0.68rem]">Direct Email</span>
                <a href={`mailto:${personalInfo.email}`} className="text-emerald-400 font-mono font-medium hover:underline break-all">
                  {personalInfo.email}
                </a>
              </li>

              <li className="glass-card p-3.5 flex flex-col gap-1">
                <span className="label-text text-[0.68rem]">GitHub Profile</span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-mono font-medium hover:underline break-all"
                >
                  github.com/SandeoX03 ↗
                </a>
              </li>

              <li className="glass-card p-3.5 flex flex-col gap-1">
                <span className="label-text text-[0.68rem]">LinkedIn Network</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-mono font-medium hover:underline break-all"
                >
                  linkedin.com/in/sushant-tandukar-b415513a2 ↗
                </a>
              </li>

              <li className="glass-card p-3.5 flex flex-col gap-1">
                <span className="label-text text-[0.68rem]">Base Location</span>
                <span className="text-slate-200 font-mono">{personalInfo.location}</span>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-6 min-w-0 flex flex-col justify-between">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="label-text block mb-2 text-slate-300">
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
                <label htmlFor="email" className="label-text block mb-2 text-slate-300">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="input-field"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="label-text block mb-2 text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="input-field resize-none"
                  placeholder="What would you like to discuss or collaborate on?"
                />
              </div>
            </div>

            <button type="submit" className="btn-primary w-full sm:w-auto self-start mt-2">
              {submitted ? "Opening email client..." : "Send Message ↗"}
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
