import { useState } from 'react';

const scales = [
  { label: 'Display', size: '40px', weight: '900', class: 'text-[40px] font-black', sample: 'Grid.Pe Doorstep Cash' },
  { label: 'H1', size: '32px', weight: '700', class: 'text-[32px] font-bold', sample: 'Order your cash now' },
  { label: 'H2', size: '24px', weight: '700', class: 'text-[24px] font-bold', sample: 'Delivery in 30 minutes' },
  { label: 'H3', size: '20px', weight: '600', class: 'text-[20px] font-semibold', sample: 'Payment methods' },
  { label: 'H4', size: '18px', weight: '600', class: 'text-[18px] font-semibold', sample: 'Saved addresses' },
  { label: 'Body LG', size: '16px', weight: '500', class: 'text-[16px] font-medium', sample: 'Your order has been placed successfully.' },
  { label: 'Body', size: '14px', weight: '400', class: 'text-[14px] font-normal', sample: 'We deliver cash to your doorstep across Tier 2/3 cities.' },
  { label: 'Caption', size: '12px', weight: '400', class: 'text-[12px] font-normal', sample: 'Last updated 2 minutes ago' },
  { label: 'Overline', size: '12px', weight: '700', class: 'text-[12px] font-bold uppercase tracking-widest', sample: 'PAYMENT METHODS', uppercase: true },
];

const weights = [
  { w: 300, label: 'Light' },
  { w: 400, label: 'Regular' },
  { w: 500, label: 'Medium' },
  { w: 700, label: 'Bold' },
  { w: 900, label: 'Black' },
];

export function TypographyPage({ isDark }: { isDark: boolean }) {
  const [sampleText, setSampleText] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div>
      <h1 className="text-[40px] font-black mb-2 tracking-tight">Typography</h1>
      <p style={{ color: '#7E7E7E' }} className="text-[16px] mb-8">
        Grid.Pe uses Satoshi exclusively across all surfaces.
      </p>

      {/* Live preview input */}
      <div
        className="mb-10 p-5 rounded-2xl"
        style={{
          backgroundColor: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
          border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #E9EAEB',
        }}
      >
        <p className="text-[12px] font-bold uppercase tracking-widest mb-3" style={{ color: '#7E7E7E' }}>
          Live Preview Text
        </p>
        <input
          type="text"
          placeholder="Type something to preview all sizes..."
          value={sampleText}
          onChange={(e) => setSampleText(e.target.value)}
          className="w-full bg-transparent outline-none text-[16px]"
          style={{ color: isDark ? '#FFFFFF' : '#0A0A12' }}
        />
      </div>

      {/* Type scale */}
      <div className="mb-14 space-y-2">
        {scales.map((s) => (
          <div
            key={s.label}
            className="group flex items-center gap-4 p-5 rounded-2xl transition-all duration-200 cursor-pointer hover:scale-[1.01]"
            style={{
              backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
              border: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid #E9EAEB',
            }}
            onClick={() => copy(s.class, s.label)}
          >
            <div className="w-[80px] shrink-0">
              <p className="text-[11px] font-bold uppercase tracking-widest" style={{ color: '#5260FE' }}>{s.label}</p>
              <p className="text-[10px] font-mono mt-0.5" style={{ color: '#7E7E7E' }}>{s.size} / {s.weight}</p>
            </div>
            <div className="flex-1 overflow-hidden">
              <p
                style={{
                  fontSize: s.size,
                  fontWeight: s.weight,
                  textTransform: s.uppercase ? 'uppercase' : 'none',
                  letterSpacing: s.uppercase ? '0.1em' : 'normal',
                  fontFamily: 'Satoshi, sans-serif',
                  color: isDark ? '#FFFFFF' : '#0A0A12',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {sampleText || s.sample}
              </p>
            </div>
            <div
              className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-[12px] font-medium px-3 py-1 rounded-full"
              style={{ backgroundColor: '#5260FE', color: '#FFFFFF' }}
            >
              {copied === s.label ? '✓ Copied' : 'Copy class'}
            </div>
          </div>
        ))}
      </div>

      {/* Font weights */}
      <h2 className="text-[20px] font-bold mb-5">Font Weights</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-14">
        {weights.map(({ w, label }) => (
          <div
            key={w}
            className="group cursor-pointer p-5 rounded-2xl text-center transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: isDark ? 'rgba(255,255,255,0.04)' : '#FFFFFF',
              border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #E9EAEB',
            }}
            onClick={() => copy(`font-[${w}]`, `w${w}`)}
          >
            <p style={{ fontWeight: w, fontSize: '36px', fontFamily: 'Satoshi', color: isDark ? '#FFFFFF' : '#0A0A12' }} className="mb-2">Ag</p>
            <p className="text-[13px] font-bold" style={{ color: isDark ? '#FFFFFF' : '#0A0A12' }}>{label}</p>
            <p className="text-[11px] font-mono mt-0.5" style={{ color: '#7E7E7E' }}>{w}</p>
            <p
              className="text-[10px] mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: '#5260FE' }}
            >
              {copied === `w${w}` ? '✓ Copied!' : 'Click to copy'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
