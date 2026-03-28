import { Facebook, Linkedin, Mail, Phone, Globe, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  product: [
    { href: 'features.html', label: 'সুবিধাসমূহ' },
    { href: 'offline.html', label: 'অফলাইন সুবিধা' },
    { href: 'privacy.html', label: 'গোপনীয়তা নীতি' },
    { href: 'download.html', label: 'ডাউনলোড' },
  ],
  company: [
    { href: 'about.html', label: 'আমাদের সম্পর্কে' },
    { href: 'about.html#contact', label: 'যোগাযোগ' },
  ],
  legal: [
    { href: 'privacy.html', label: 'গোপনীয়তা নীতি' },
    { href: 'privacy.html#terms', label: 'শর্তাবলী' },
  ],
};

const socialLinks = [
  { href: 'https://facebook.com/afrainkabirrafid', icon: Facebook, label: 'Facebook', color: 'hover:bg-blue-500/20 hover:text-blue-400' },
  { href: 'https://linkedin.com/in/afrainkabir', icon: Linkedin, label: 'LinkedIn', color: 'hover:bg-sky-500/20 hover:text-sky-400' },
  { href: 'mailto:afrainkabir3322@gmail.com', icon: Mail, label: 'Email', color: 'hover:bg-primary/20 hover:text-primary' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 relative overflow-hidden">
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2"
        style={{
          width: 600, height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(79,70,229,0.4), transparent)',
        }}
      />
      {/* Background dots */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="index.html" className="flex items-center gap-3 mb-5 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/40 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src="images/logo.jpg"
                  alt="হিসাব নিকাশ"
                  className="relative w-10 h-10 rounded-xl"
                />
              </div>
              <div>
                <span className="text-lg font-bold text-white block leading-tight">হিসাব নিকাশ</span>
                <span className="text-xs text-slate-500 tracking-widest uppercase">Hishab Nikash</span>
              </div>
            </a>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              বাংলাদেশের সেরা অফলাইন ব্যক্তিগত ফাইন্যান্স অ্যাপ। আপনার টাকার পূর্ণ নিয়ন্ত্রণ এখন আপনার হাতে।
            </p>
            <div className="flex items-center gap-2.5">
              {socialLinks.map(({ href, icon: Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`p-2 rounded-lg bg-slate-800/80 transition-all duration-200 ${color}`}
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">প্রোডাক্ট</h3>
            <ul className="space-y-2.5">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-slate-500 hover:text-white transition-colors duration-200 flex items-center gap-1 group">
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">কোম্পানি</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-slate-500 hover:text-white transition-colors duration-200 flex items-center gap-1 group">
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">যোগাযোগ</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:afrainkabir3322@gmail.com" className="text-sm text-slate-500 hover:text-white transition-colors flex items-center gap-2.5 group">
                  <Mail className="w-4 h-4 text-slate-600 group-hover:text-primary transition-colors" />
                  afrainkabir3322@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+8801327068809" className="text-sm text-slate-500 hover:text-white transition-colors flex items-center gap-2.5 group">
                  <Phone className="w-4 h-4 text-slate-600 group-hover:text-primary transition-colors" />
                  +880 1327-068809
                </a>
              </li>
              <li>
                <a href="https://afrainkabirrafid.qzz.io/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-white transition-colors flex items-center gap-2.5 group">
                  <Globe className="w-4 h-4 text-slate-600 group-hover:text-primary transition-colors" />
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-600 text-center md:text-left">
              © {currentYear} হিসাব নিকাশ (Hishab Nikash)। সর্বস্বত্ব সংরক্ষিত।
            </p>
            <p className="text-xs text-slate-600">
              তৈরি করেছেন{' '}
              <a
                href="https://afrainkabirrafid.qzz.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors"
              >
                Afrain Kabir Rafid
              </a>
              {' '}• Rubie Corp.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
