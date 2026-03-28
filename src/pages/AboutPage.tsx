import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { DownloadCTA } from '@/components/sections/DownloadCTA';
import {
  User, Mail, Phone, Globe,
  Facebook, Linkedin, Code, Target, Heart,
} from 'lucide-react';

const contactInfo = [
  { icon: User,     label: 'নাম',             value: 'Afrain Kabir Rafid',              href: null },
  { icon: Mail,     label: 'ইমেইল',           value: 'afrainkabir3322@gmail.com',        href: 'mailto:afrainkabir3322@gmail.com' },
  { icon: Phone,    label: 'ফোন / WhatsApp',  value: '+880 1327-068809',                href: 'tel:+8801327068809' },
  { icon: Globe,    label: 'পোর্টফোলিও',      value: 'afrainkabirrafid.qzz.io',          href: 'https://afrainkabirrafid.qzz.io/' },
  { icon: Facebook, label: 'Facebook',         value: 'facebook.com/afrainkabirrafid',   href: 'https://facebook.com/afrainkabirrafid' },
  { icon: Linkedin, label: 'LinkedIn',         value: 'linkedin.com/in/afrainkabir',     href: 'https://linkedin.com/in/afrainkabir' },
];

const values = [
  {
    icon: Target,
    title: 'মিশন',
    description: 'বাংলাদেশের প্রতিটি মানুষের কাছে সহজলভ্য ও নিরাপদ ফাইন্যান্স ম্যানেজমেন্ট টুল পৌঁছে দেওয়া।',
    color: 'bg-blue-500/8 text-blue-600 border-blue-500/12',
  },
  {
    icon: Heart,
    title: 'ভিশন',
    description: 'ডিজিটাল বাংলাদেশে প্রত্যেকের ব্যক্তিগত ফাইন্যান্সের দায়িত্ব নিজের হাতে।',
    color: 'bg-rose-500/8 text-rose-600 border-rose-500/12',
  },
  {
    icon: Code,
    title: 'মান',
    description: 'মানসম্মত, নিরাপদ ও ব্যবহারকারী-কেন্দ্রিক অ্যাপ তৈরি করা যা মানুষের জীবন সহজ করে।',
    color: 'bg-primary/8 text-primary border-primary/12',
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-16 gradient-hero relative overflow-hidden">
        <div
          className="blob-decoration"
          style={{ width: 450, height: 450, background: 'radial-gradient(circle, rgba(79,70,229,0.1), transparent 70%)', top: '-80px', right: '-60px' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full shimmer text-primary text-sm font-medium mb-6 border border-primary/14 animate-fade-in-up">
                <Code className="w-4 h-4" />
                <span>Rubie Corp.</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] mb-5 animate-fade-in-up stagger-1">
                <span className="text-foreground">আমাদের সম্পর্কে</span>
                <span className="gradient-text block mt-2">হিসাব নিকাশের পেছনের মানুষ</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed animate-fade-in-up stagger-2">
                হিসাব নিকাশ তৈরি করা হয়েছে বাংলাদেশের মানুষের প্রয়োজন মাথায় রেখে। আমরা বিশ্বাস করি সবার জন্য সহজ ও নিরাপদ ফাইন্যান্স ম্যানেজমেন্ট অ্যাপ থাকা উচিত।
              </p>
            </div>

            <div className="flex justify-center animate-scale-in stagger-2">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-150 animate-blob" />
                <img
                  src="images/logo.jpg"
                  alt="হিসাব নিকাশ লোগো"
                  className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-3xl shadow-[0_30px_80px_rgba(79,70,229,0.25)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">প্রতিষ্ঠাতা</h2>
            <div className="glow-divider max-w-xs mx-auto mt-4" />
          </div>

          <div className="glass-card rounded-2xl p-10 lg:p-14 text-center animate-fade-in-up">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-7">
              <div className="absolute inset-0 bg-primary/25 rounded-full blur-2xl scale-125 animate-pulse-glow" />
              <img
                src="images/founder.jpg"
                alt="Afrain Kabir Rafid - Founder, Rubie Corp."
                className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-[0_12px_40px_rgba(79,70,229,0.2)]"
              />
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-1">Afrain Kabir Rafid</h3>
            <p className="gradient-text font-semibold mb-5 text-base">Founder, Rubie Corp.</p>

            <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed text-sm">
              একজন প্যাশনেট ডেভেলপার যিনি বাংলাদেশের মানুষের জন্য কাজ করতে ভালোবাসেন। হিসাব নিকাশ তৈরির পেছনের উদ্দেশ্য — সবার জন্য সহজ ও নিরাপদ ফাইন্যান্স ম্যানেজমেন্ট।
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="https://rafid2005.github.io/Portfolio/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/8 text-primary hover:bg-primary/16 border border-primary/14 transition-all duration-200 text-sm font-medium">
                <Globe className="w-4 h-4" /> Portfolio
              </a>
              <a href="https://facebook.com/afrainkabirrafid" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/8 text-blue-600 hover:bg-blue-500/16 border border-blue-500/14 transition-all duration-200 text-sm font-medium">
                <Facebook className="w-4 h-4" /> Facebook
              </a>
              <a href="https://linkedin.com/in/afrainkabir" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-700/8 text-sky-700 hover:bg-sky-700/16 border border-sky-700/14 transition-all duration-200 text-sm font-medium">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24" style={{ background: 'hsl(240 6% 98%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">আমাদের মূল্যবোধ</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">যে মূল্যবোধ আমাদের কাজ পরিচালিত করে</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 lg:gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-7 rounded-2xl bg-white border border-border hover:border-primary/20 hover:shadow-[0_8px_28px_rgba(79,70,229,0.09)] text-center transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 border ${value.color}`}>
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">যোগাযোগ</h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">যেকোনো প্রশ্ন, পরামর্শ বা ফিডব্যাকের জন্য যোগাযোগ করুন</p>
          </div>

          <div className="bg-white rounded-2xl p-7 lg:p-10 border border-border shadow-[0_4px_24px_rgba(79,70,229,0.06)]">
            <div className="grid sm:grid-cols-2 gap-5">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-primary/3 transition-colors animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4.5 h-4.5 text-primary" style={{ width: '1.1rem', height: '1.1rem' }} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5 font-medium uppercase tracking-wide">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm text-foreground font-semibold hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground font-semibold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DownloadCTA />
      <Footer />
    </div>
  );
}
