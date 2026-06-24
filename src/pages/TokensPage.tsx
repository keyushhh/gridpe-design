import { useState } from 'react';

function CopyableRow({ label, value, desc, preview, isDark }: {
  label: string; value: string; desc: string; preview?: React.ReactNode; isDark: boolean;
}) {
  const [copied, setCopied] = useState(false);
  return (
    <div
      className="group flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-200 hover:scale-[1.01]"
      style={{
        backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : '#FFFFFF',
        border: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid #E9EAEB',
      }}
      onClick={() => { navigator.clipboard.writeText(value); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
    >
      <div className="w-[60px] shrink-0">
        <p className="text-[12px] font-bold" style={{ color: '#5260FE' }}>{label}</p>
      </div>
      {preview && <div className="shrink-0">{preview}</div>}
      <div className="flex-1">
        <p className="text-[13px] font-mono font-bold" style={{ color: isDark ? '#FFFFFF' : '#0A0A12' }}>{value}</p>
        <p className="text-[11px]" style={{ color: '#7E7E7E' }}>{desc}</p>
      </div>
      <div
        className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-[11px] font-bold px-3 py-1 rounded-full"
        style={{ backgroundColor: copied ? '#1CB956' : '#5260FE', color: '#FFFFFF' }}
      >
        {copied ? '✓' : 'Copy'}
      </div>
    </div>
  );
}

export function TokensPage({ isDark }: { isDark: boolean }) {
  return (
    <div>
      <h1 className="text-[40px] font-black mb-2 tracking-tight">Tokens</h1>
      <p style={{ color: '#7E7E7E' }} className="text-[16px] mb-10">
        Spacing, border radius, and shadow tokens. Click any row to copy the value.
      </p>

      <div className="mb-14">
        <h2 className="text-[20px] font-bold mb-5">Spacing</h2>
        <div className="space-y-2">
          {[
            { label: 'xs', value: '4px', desc: 'Icon gaps, tight spacing' },
            { label: 'sm', value: '8px', desc: 'Component internal padding' },
            { label: 'md', value: '16px', desc: 'Section padding, card padding' },
            { label: 'lg', value: '20px', desc: 'Page horizontal padding (px-[20px])' },
            { label: 'xl', value: '24px', desc: 'Section gaps' },
            { label: '2xl', value: '26px', desc: 'Bottom bar top padding (pt-[26px])' },
            { label: '3xl', value: '32px', desc: 'Large section gaps' },
            { label: '4xl', value: '48px', desc: 'Page safe top padding' },
          ].map((t) => (
            <CopyableRow
              key={t.label}
              label={t.label}
              value={t.value}
              desc={t.desc}
              isDark={isDark}
              preview={
                <div
                  className="rounded"
                  style={{ width: t.value, height: '20px', minWidth: '4px', backgroundColor: '#5260FE', opacity: 0.7 }}
                />
              }
            />
          ))}
        </div>
      </div>

      <div className="mb-14">
        <h2 className="text-[20px] font-bold mb-5">Border Radius</h2>
        <div className="space-y-2">
          {[
            { label: 'full', value: '9999px', desc: 'Buttons, pills, inputs, status dots' },
            { label: '2xl', value: '16px', desc: 'Cards, bottom sheets, page cards' },
            { label: 'xl+', value: '13px', desc: 'Inner cards, order cards' },
            { label: 'xl', value: '12px', desc: 'Small cards, dropdowns' },
            { label: 'lg', value: '8px', desc: 'Tags, badges, code blocks' },
          ].map((t) => (
            <CopyableRow
              key={t.label}
              label={t.label}
              value={t.value}
              desc={t.desc}
              isDark={isDark}
              preview={
                <div
                  style={{
                    width: '48px',
                    height: '32px',
                    borderRadius: t.value,
                    backgroundColor: 'rgba(82,96,254,0.2)',
                    border: '2px solid #5260FE',
                  }}
                />
              }
            />
          ))}
        </div>
      </div>

      <div className="mb-14">
        <h2 className="text-[20px] font-bold mb-5">Shadows</h2>
        <div className="space-y-2">
          {[
            { label: 'primary', value: '0 0 10px rgba(82,96,254,0.5)', desc: 'Progress bar glow, primary elements', color: '#5260FE' },
            { label: 'success', value: '0 0 8px rgba(28,185,86,0.5)', desc: 'Active / delivered status dots', color: '#1CB956' },
            { label: 'warning', value: '0 0 8px rgba(250,204,21,0.5)', desc: 'Pending status dots', color: '#FACC15' },
            { label: 'error', value: '0 0 8px rgba(239,68,68,0.5)', desc: 'Cancelled status dots', color: '#EF4444' },
            { label: 'review', value: '0 0 8px rgba(234,179,8,0.5)', desc: 'In-review status dots', color: '#EAB308' },
          ].map((t) => (
            <CopyableRow
              key={t.label}
              label={t.label}
              value={t.value}
              desc={t.desc}
              isDark={isDark}
              preview={
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    backgroundColor: t.color,
                    boxShadow: t.value,
                  }}
                />
              }
            />
          ))}
        </div>
      </div>

      <div className="mb-14">
        <h2 className="text-[20px] font-bold mb-5">Height Scale</h2>
        <div className="space-y-2">
          {[
            { label: 'input', value: '48px', desc: 'Standard input height, md button height' },
            { label: 'button-lg', value: '52px', desc: 'Large button height (success/pro screens)' },
            { label: 'header', value: '64px', desc: 'Page header / nav bar height' },
            { label: 'tab', value: '56px', desc: 'Bottom navigation bar height' },
          ].map((t) => (
            <CopyableRow
              key={t.label}
              label={t.label}
              value={t.value}
              desc={t.desc}
              isDark={isDark}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
