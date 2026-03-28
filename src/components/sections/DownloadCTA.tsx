import { Download, Shield, WifiOff, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function DownloadCTA() {
  return (
    <section className="relative py-20 lg:py-28 gradient-primary overflow-hidden noise-overlay">
      {/* Decorative ring */}
      <div
        className="absolute"
        style={{
          width: 600, height: 600,
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '50%',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      />
      <div
        className="absolute"
        style={{
          width: 900, height: 900,
          border: '1px solid rgba(255,255,255,0.04)',
          borderRadius: '50%',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white/90 text-sm font-medium mb-6 border border-white/20 animate-fade-in-up">
          <Zap className="w-3.5 h-3.5" />
          <span>সম্পূর্ণ বিনামূল্যে</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 animate-fade-in-up stagger-1">
          আজই ডাউনলোড করুন হিসাব নিকাশ
        </h2>
        <p className="text-base sm:text-lg text-white/75 mb-10 max-w-2xl mx-auto animate-fade-in-up stagger-2">
          সম্পূর্ণ বিনামূল্যে। কোনো বিজ্ঞাপন নয়। আপনার ডেটা শুধুমাত্র আপনার ডিভাইসে।
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-in-up stagger-3">
          <a href="download.html">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/95 gap-2 px-8 py-6 text-base font-semibold shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.28)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <Download className="w-5 h-5" />
              <span>APK ডাউনলোড করুন</span>
            </Button>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up stagger-4">
          <div className="trust-item text-sm text-white/85">
            <WifiOff className="w-4 h-4" />
            <span>অফলাইন কাজ করে</span>
          </div>
          <div className="trust-item text-sm text-white/85">
            <Shield className="w-4 h-4" />
            <span>১০০% নিরাপদ</span>
          </div>
          <div className="trust-item text-sm text-white/85">
            <Download className="w-4 h-4" />
            <span>ফ্রি ডাউনলোড</span>
          </div>
        </div>
      </div>
    </section>
  );
}
