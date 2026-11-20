import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Check, Copy, ExternalLink, Linkedin, Mail, Phone, Send } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { PROFILE } from '../data/profile';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | 'draft' | null>(null);
  const [formNotice, setFormNotice] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const handleCopy = async (text: string, field: 'email' | 'phone' | 'draft') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2400);
    } catch {
      // Clipboard API unavailable
    }
  };

  const buildMailtoHref = () => {
    const subject = encodeURIComponent(
      name.trim()
        ? `Data Analytics Inquiry from ${name.trim()}`
        : 'Data Analytics Inquiry via Portfolio'
    );
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`
    );
    return `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setFormNotice(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setFormError('Please fill in your name, email address, and message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setFormError('Please enter a valid email address.');
      return;
    }

    const mailtoLink = document.createElement('a');
    mailtoLink.href = buildMailtoHref();
    mailtoLink.click();

    setFormNotice(
      'Your email application has been opened with a pre-filled draft to saranyaganesh3008@gmail.com. You can also copy the message below.'
    );
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-t border-[#172A25]/12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeading
          indexLabel="06"
          kicker="Contact"
          title="Let's Connect"
          description={PROFILE.contactIntro}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden border border-[#172A25]/12 shadow-[0_14px_34px_-18px_rgba(23,107,87,0.12)]">
          {/* Left Panel: Ruled Direct Contact Directory */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-[#F8FAF8] p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-[#172A25]/15 flex flex-col justify-between gap-8"
          >
            <div>
              <p className="font-mono text-xs font-semibold text-[#176B57] uppercase tracking-wider mb-4">
                Direct Directory
              </p>

              <dl className="divide-y divide-[#172A25]/10 border-t border-[#172A25]/10">
                <div className="py-4 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <dt className="text-xs text-[#64748B]">Email</dt>
                    <dd className="mt-0.5 text-sm font-semibold text-[#172A25] break-all">
                      {PROFILE.email}
                    </dd>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(PROFILE.email, 'email')}
                    className="p-2 text-[#64748B] hover:text-[#176B57] transition-colors cursor-pointer shrink-0"
                    aria-label="Copy email address"
                  >
                    {copiedField === 'email' ? (
                      <Check className="w-4 h-4 text-[#176B57]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div className="py-4 flex items-center justify-between gap-3">
                  <div>
                    <dt className="text-xs text-[#64748B]">Phone</dt>
                    <dd className="mt-0.5 font-mono text-sm font-semibold text-[#172A25] tabular-nums">
                      {PROFILE.phone}
                    </dd>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(PROFILE.phone, 'phone')}
                    className="p-2 text-[#64748B] hover:text-[#176B57] transition-colors cursor-pointer shrink-0"
                    aria-label="Copy phone number"
                  >
                    {copiedField === 'phone' ? (
                      <Check className="w-4 h-4 text-[#176B57]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div className="py-4">
                  <dt className="text-xs text-[#64748B]">LinkedIn</dt>
                  <dd className="mt-0.5">
                    <a
                      href={PROFILE.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#176B57] hover:underline break-all"
                    >
                      <span>Saranya Ganesan</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-2.5">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-2.5 rounded-lg bg-[#176B57] hover:bg-[#125444] text-white text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>Email Me</span>
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-2.5 rounded-lg bg-white hover:bg-[#DFF4EC] text-[#172A25] text-sm font-semibold border border-[#172A25]/20 transition-colors whitespace-nowrap shrink-0"
              >
                <Linkedin className="w-4 h-4 text-[#176B57]" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`tel:${PROFILE.phone}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-2.5 rounded-lg bg-white hover:bg-[#DFF4EC] text-[#172A25] text-sm font-semibold border border-[#172A25]/20 transition-colors whitespace-nowrap shrink-0"
              >
                <Phone className="w-4 h-4 text-[#176B57]" aria-hidden="true" />
                <span>Call Me</span>
              </a>
            </div>
          </motion.div>

          {/* Right Panel: Minimalist Ruled Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white p-6 sm:p-8"
          >
            <h3 className="font-display text-2xl font-semibold text-[#172A25]">
              Compose an Inquiry
            </h3>
            <p className="mt-1 text-sm text-[#64748B]">
              Submitting opens a pre-addressed draft in your email client to{' '}
              <span className="font-medium text-[#172A25]">{PROFILE.email}</span>.
            </p>

            <form onSubmit={handleFormSubmit} className="mt-6 space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-xs font-medium text-[#64748B] uppercase tracking-wider mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-[#F8FAF8] border border-[#172A25]/15 text-[#172A25] placeholder:text-[#64748B]/70 text-sm focus:outline-none focus:border-[#176B57] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-xs font-medium text-[#64748B] uppercase tracking-wider mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full min-h-[44px] px-3.5 py-2.5 rounded-lg bg-[#F8FAF8] border border-[#172A25]/15 text-[#172A25] placeholder:text-[#64748B]/70 text-sm focus:outline-none focus:border-[#176B57] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-xs font-medium text-[#64748B] uppercase tracking-wider mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details about the opportunity, analytics project, or collaboration..."
                  className="w-full px-3.5 py-3 rounded-lg bg-[#F8FAF8] border border-[#172A25]/15 text-[#172A25] placeholder:text-[#64748B]/70 text-sm focus:outline-none focus:border-[#176B57] focus:bg-white transition-colors resize-y"
                />
              </div>

              {formError && (
                <p role="alert" className="text-sm text-red-700 bg-red-50 px-4 py-2.5 rounded-lg border border-red-200">
                  {formError}
                </p>
              )}

              {formNotice && (
                <div
                  role="status"
                  className="text-sm text-[#176B57] bg-[#DFF4EC]/75 px-4 py-3 rounded-lg border border-[#176B57]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <span>{formNotice}</span>
                  <button
                    type="button"
                    onClick={() =>
                      handleCopy(
                        `To: ${PROFILE.email}\nFrom: ${name} (${email})\n\n${message}`,
                        'draft'
                      )
                    }
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white text-[#176B57] text-xs font-semibold border border-[#176B57]/25 hover:bg-[#F8FAF8] cursor-pointer whitespace-nowrap shrink-0"
                  >
                    {copiedField === 'draft' ? (
                      <>
                        <Check className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Copied Draft</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Copy Draft</span>
                      </>
                    )}
                  </button>
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 rounded-lg bg-[#176B57] hover:bg-[#125444] text-white text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#176B57]"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span>Compose Email</span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleCopy(
                      `To: ${PROFILE.email}\nName: ${name || '-'}\nEmail: ${email || '-'}\n\n${message || ''}`,
                      'draft'
                    )
                  }
                  className="inline-flex items-center justify-center sm:justify-start gap-1.5 py-2 text-sm font-medium text-[#64748B] hover:text-[#176B57] transition-colors cursor-pointer"
                >
                  {copiedField === 'draft' ? (
                    <>
                      <Check className="w-4 h-4 text-[#176B57]" aria-hidden="true" />
                      <span className="text-[#176B57]">Copied message text</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" aria-hidden="true" />
                      <span>Copy message text</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
