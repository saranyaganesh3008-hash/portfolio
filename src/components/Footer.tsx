import { Linkedin, Mail, Phone } from 'lucide-react';
import { PROFILE } from '../data/profile';

export function Footer() {
  return (
    <footer className="bg-[#F8FAF8] border-t border-[#172A25]/12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 border border-[#176B57] bg-[#DFF4EC] text-[#176B57] font-mono text-xs font-semibold">
            {PROFILE.initials}
          </span>
          <div>
            <p className="font-display text-base font-semibold text-[#172A25]">{PROFILE.name}</p>
            <p className="text-xs text-[#64748B]">
              {PROFILE.title} · {PROFILE.skillsLine}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-[#64748B]">
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-1.5 hover:text-[#176B57] transition-colors"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            <span>Email</span>
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-[#176B57] transition-colors"
          >
            <Linkedin className="w-4 h-4" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`tel:${PROFILE.phone}`}
            className="inline-flex items-center gap-1.5 hover:text-[#176B57] transition-colors font-mono text-xs tabular-nums"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span>{PROFILE.phone}</span>
          </a>
        </div>

        <p className="text-xs text-[#64748B]">
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
      </div>
    </footer>
  );
}
