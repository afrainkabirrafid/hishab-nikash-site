import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: 'index.html', label: 'হোম', labelEn: 'Home' },
  { href: 'features.html', label: 'সুবিধা', labelEn: 'Features' },
  { href: 'offline.html', label: 'অফলাইন', labelEn: 'Offline' },
  { href: 'privacy.html', label: 'গোপনীয়তা', labelEn: 'Privacy' },
  { href: 'download.html', label: 'ডাউনলোড', labelEn: 'Download' },
  { href: 'about.html', label: 'আমাদের সম্পর্কে', labelEn: 'About' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_32px_rgba(79,70,229,0.08)] border-b border-white/60'
          : 'bg-transparent'
      }`}
      style={{ transitionDuration: '350ms' }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="index.html" className="flex items-center gap-2.5 lg:gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-xl blur-md scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src="images/logo.jpg"
                alt="হিসাব নিকাশ লোগো"
                className="relative w-9 h-9 lg:w-11 lg:h-11 rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base lg:text-lg font-bold text-foreground leading-tight tracking-tight">
                হিসাব নিকাশ
              </span>
              <span className="text-[9px] lg:text-[11px] text-muted-foreground leading-tight tracking-widest uppercase">
                Hishab Nikash
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3.5 py-2 text-sm font-medium text-foreground/70 hover:text-primary rounded-lg hover:bg-primary/6 transition-all duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition-all duration-200 group-hover:w-4" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a href="download.html">
              <Button className="bg-primary hover:bg-primary/90 text-white gap-2 shadow-[0_4px_14px_rgba(79,70,229,0.35)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.5)] transition-all duration-200">
                <Download className="w-4 h-4" />
                <span>ডাউনলোড করুন</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-primary/8 transition-colors"
            aria-label={isOpen ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন'}
          >
            <span className={`block transition-all duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
              {isOpen
                ? <X className="w-5 h-5 text-foreground" />
                : <Menu className="w-5 h-5 text-foreground" />
              }
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <>
            <div
              className="fixed inset-0 top-16 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <div className="lg:hidden fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-2xl border-t border-white/60 shadow-[0_20px_60px_rgba(79,70,229,0.12)] z-50 max-h-[calc(100vh-4rem)] overflow-y-auto">
              <div className="px-4 py-5">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="flex items-center justify-between px-4 py-3 text-base font-medium text-foreground/75 hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{link.label}</span>
                      <span className="text-xs text-muted-foreground">{link.labelEn}</span>
                    </a>
                  ))}
                  <div className="pt-4 mt-2 border-t border-border">
                    <a href="download.html" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white gap-2 py-6 shadow-[0_4px_14px_rgba(79,70,229,0.35)]">
                        <Download className="w-5 h-5" />
                        <span>ডাউনলোড করুন</span>
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
