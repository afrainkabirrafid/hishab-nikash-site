import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { DownloadCTA } from '@/components/sections/DownloadCTA';
import {
  User,
  Mail,
  Phone,
  Globe,
  Facebook,
  Linkedin,
  Code,
  Target,
  Heart,
} from 'lucide-react';

const contactInfo = [
  {
    icon: User,
    label: 'নাম',
    value: 'Afrain Kabir Rafid',
    href: null,
  },
  {
    icon: Mail,
    label: 'ইমেইল',
    value: 'afrainkabir3322@gmail.com',
    href: 'mailto:afrainkabir3322@gmail.com',
  },
  {
    icon: Phone,
    label: 'ফোন / WhatsApp',
    value: '+880 1327-068809',
    href: 'tel:+8801327068809',
  },
  {
    icon: Globe,
    label: 'পোর্টফোলিও',
    value: 'afrainkabirrafid.qzz.io',
    href: 'https://afrainkabirrafid.qzz.io/',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    value: 'facebook.com/afrainkabirrafid',
    href: 'https://facebook.com/afrainkabirrafid',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/afrainkabir',
    href: 'https://linkedin.com/in/afrainkabir',
  },
];

const values = [
  {
    icon: Target,
    title: 'মিশন',
    description:
      'বাংলাদেশের প্রতিটি মানুষের কাছে সহজলভ্য ও নিরাপদ ফাইন্যান্স ম্যানেজমেন্ট টুল পৌঁছে দেওয়া।',
  },
  {
    icon: Heart,
    title: 'ভিশন',
    description:
      'ডিজিটাল বাংলাদেশে প্রত্যেকের ব্যক্তিগত ফাইন্যান্সের দায়িত্ব নিজের হাতে।',
  },
  {
    icon: Code,
    title: 'মান',
    description:
      'মানসম্মত, নিরাপদ ও ব্যবহারকারী-কেন্দ্রিক অ্যাপ তৈরি করা যা মানুষের জীবন সহজ করে।',
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-16 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Code className="w-4 h-4" />
                <span>Rubie Corp.</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                আমাদের সম্পর্কে
                <span className="text-primary block mt-2">
                  হিসাব নিকাশের পেছনের মানুষ
                </span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground mb-8">
                হিসাব নিকাশ তৈরি করা হয়েছে বাংলাদেশের মানুষের প্রয়োজন মাথায়
                রেখে। আমরা বিশ্বাস করি সবার জন্য সহজ ও নিরাপদ ফাইন্যান্স
                ম্যানেজমেন্ট অ্যাপ থাকা উচিত।
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-150" />
                <img
                  src="images/logo.jpg"
                  alt="হিসাব নিকাশ লোগো"
                  className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-3xl shadow-2xl"
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
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              প্রতিষ্ঠাতা
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 border border-border text-center animate-fade-in-up">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl scale-110" />
              <img
                src="images/founder.jpg"
                alt="Afrain Kabir Rafid - Founder, Rubie Corp."
                className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
              />
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-2">
              Afrain Kabir Rafid
            </h3>
            <p className="text-primary font-medium mb-4">
              Founder, Rubie Corp.
            </p>

            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              একজন প্যাশনেট ডেভেলপার যিনি বাংলাদেশের মানুষের জন্য কাজ করতে
              ভালোবাসেন। হিসাব নিকাশ তৈরির পেছনের উদ্দেশ্য — সবার জন্য সহজ ও
              নিরাপদ ফাইন্যান্স ম্যানেজমেন্ট।
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://rafid2005.github.io/Portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>Portfolio</span>
              </a>
              <a
                href="https://facebook.com/afrainkabirrafid"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 transition-colors"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </a>
              <a
                href="https://linkedin.com/in/afrainkabir"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-700/10 text-blue-700 hover:bg-blue-700/20 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              আমাদের মূল্যবোধ
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              যে মূল্যবোধ আমাদের কাজ পরিচালিত করে
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-white border border-border text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              যোগাযোগ
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              যেকোনো প্রশ্ন, পরামর্শ বা ফিডব্যাকের জন্য যোগাযোগ করুন
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 lg:p-8 border border-border">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith('http')
                            ? '_blank'
                            : undefined
                        }
                        rel={
                          item.href.startsWith('http')
                            ? 'noopener noreferrer'
                            : undefined
                        }
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <DownloadCTA />

      <Footer />
    </div>
  );
}
