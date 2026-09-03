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
    <SectionWrapper id="contact" className="border-t border-[var(--color-line)]">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 min-w-0">
        <div className="lg:col-span-5">
          <p className="label-text mb-3">Contact</p>
          <h2 className="font-serif text-[1.75rem] md:text-4xl font-medium tracking-tight text-[var(--color-ink)] leading-snug mb-6">
            Let's build something useful.
          </h2>
          <p className="text-[var(--color-ink-2)] leading-relaxed mb-10">
            Open to internships, cybersecurity projects, and conversations. Based in Kathmandu,
            studying at Taylor's University — available for remote work.
          </p>

          <ul className="space-y-4 text-sm">
            <li>
              <span className="block label-text mb-1">Email</span>
              <a href={`mailto:${personalInfo.email}`} className="text-link break-all">
                {personalInfo.email}
              </a>
            </li>
            <li>
              <span className="block label-text mb-1">GitHub</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link break-all"
              >
                github.com/SandeoX03
              </a>
            </li>
            <li>
              <span className="block label-text mb-1">LinkedIn</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link break-all"
              >
                linkedin.com/in/sushant-tandukar
              </a>
            </li>
            <li>
              <span className="block label-text mb-1">Location</span>
              <span className="text-[var(--color-ink)]">{personalInfo.location}</span>
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-8 min-w-0">
          <div>
            <label htmlFor="name" className="label-text block mb-2">
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
            <label htmlFor="email" className="label-text block mb-2">
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
            <label htmlFor="message" className="label-text block mb-2">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="input-field resize-none"
              placeholder="What would you like to talk about?"
            />
          </div>

          <button type="submit" className="btn-primary">
            {submitted ? "Opening email client..." : "Send message"}
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
}
