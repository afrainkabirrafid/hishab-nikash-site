import { Facebook, Linkedin, Mail, Phone, Globe } from 'lucide-react';

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

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="index.html" className="flex items-center gap-3 mb-4">
              <img
                src="images/logo.jpg"
                alt="হিসাব নিকাশ"
                className="w-10 h-10 rounded-xl"
              />
              <div>
                <span className="text-lg font-bold text-white block leading-tight">
                  হিসাব নিকাশ
                </span>
                <span className="text-xs text-slate-400">Hishab Nikash</span>
              </div>
            </a>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              বাংলাদেশের সেরা অফলাইন ব্যক্তিগত ফাইন্যান্স অ্যাপ। আপনার টাকার পূর্ণ নিয়ন্ত্রণ এখন আপনার হাতে।
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com/afrainkabirrafid"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/afrainkabir"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:afrainkabir3322@gmail.com"
                className="p-2 rounded-lg bg-slate-800 hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">প্রোডাক্ট</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">কোম্পানি</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">যোগাযোগ</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:afrainkabir3322@gmail.com"
                  className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  afrainkabir3322@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801327068809"
                  className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  +880 1327-068809
                </a>
              </li>
              <li>
                <a
                  href="https://afrainkabirrafid.qzz.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Globe className="w-4 h-4" />
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 text-center md:text-left">
            © {currentYear} হিসাব নিকাশ (Hishab Nikash)। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p className="text-sm text-slate-500">
            তৈরি করেছেন{' '}
            <a
              href="https://afrainkabirrafid.qzz.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Afrain Kabir Rafid
            </a>
            {' '}• Rubie Corp.
          </p>
        </div>
      </div>
    </footer>
  );
}
