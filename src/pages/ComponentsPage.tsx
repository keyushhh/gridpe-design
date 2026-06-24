import { useState } from 'react';
import { GpButton, GpSectionLabel, GpStatusDot } from '@gridpe-app/ui';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-16">
      <h2 className="text-[24px] font-bold mb-6">{title}</h2>
      {children}
    </div>
  );
}

function CodeBlock({ code, isDark }: { code: string; isDark: boolean }) {
  const [copied, setCopied] = useState(false);
  return (
    <div
      className="relative mt-4 p-5 rounded-2xl font-mono text-[13px] leading-relaxed"
      style={{
        backgroundColor: isDark ? '#05050B' : '#F0F0F0',
        border: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid #E9EAEB',
        color: isDark ? '#a78bfa' : '#5260FE',
      }}
    >
      <button
        onClick={() => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
        className="absolute top-3 right-3 text-[11px] font-bold px-3 py-1 rounded-full transition-all"
        style={{ backgroundColor: copied ? '#1CB956' : '#5260FE', color: '#FFFFFF' }}
      >
        {copied ? '✓ Copied' : 'Copy'}
      </button>
      <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{code}</pre>
    </div>
  );
}

export function ComponentsPage({ isDark }: { isDark: boolean }) {
  const [btnVariant, setBtnVariant] = useState<'primary' | 'secondary' | 'destructive'>('primary');
  const [btnSize, setBtnSize] = useState<'md' | 'lg'>('md');
  const [btnLoading, setBtnLoading] = useState(false);
  const [btnFull, setBtnFull] = useState(true);
  const [btnText, setBtnText] = useState('Order Cash');

  const buttonVariants = {
    primary: 'bg-[#5260FE] text-white hover:opacity-90',
    secondary: `border text-current hover:opacity-80 ${isDark ? 'border-white/20' : 'border-[#E9EAEB]'}`,
    destructive: 'bg-[#EF4444] text-white hover:opacity-90',
  };

  const handleBtnClick = () => {
    setBtnLoading(true);
    setTimeout(() => setBtnLoading(false), 2000);
  };

  return (
    <div>
      <h1 className="text-[40px] font-black mb-2 tracking-tight">Components</h1>
      <p style={{ color: '#7E7E7E' }} className="text-[16px] mb-10">
        Live interactive previews of all Grid.Pe UI components.
      </p>

      <Section title="GpButton">
        {/* Interactive playground */}
        <div
          className="p-6 rounded-2xl mb-4"
          style={{
            backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
            border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #E9EAEB',
          }}
        >
          <p className="text-[12px] font-bold uppercase tracking-widest mb-5" style={{ color: '#5260FE' }}>
            ⚡ Interactive Playground
          </p>

          {/* Controls */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {/* Variant */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: '#7E7E7E' }}>Variant</p>
              <div className="flex flex-col gap-1">
                {(['primary', 'secondary', 'destructive'] as const).map((v) => (
                  <button
                    key={v}
                    onClick={() => setBtnVariant(v)}
                    className="px-3 py-1.5 rounded-lg text-[12px] font-medium text-left transition-all"
                    style={{
                      backgroundColor: btnVariant === v ? '#5260FE' : isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
                      color: btnVariant === v ? '#FFFFFF' : isDark ? '#FFFFFF' : '#0A0A12',
                    }}
                  >{v}</button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: '#7E7E7E' }}>Size</p>
              <div className="flex flex-col gap-1">
                {(['md', 'lg'] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setBtnSize(s)}
                    className="px-3 py-1.5 rounded-lg text-[12px] font-medium text-left transition-all"
                    style={{
                      backgroundColor: btnSize === s ? '#5260FE' : isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
                      color: btnSize === s ? '#FFFFFF' : isDark ? '#FFFFFF' : '#0A0A12',
                    }}
                  >
                    {s === 'md' ? 'Medium (48px)' : 'Large (52px)'}
                  </button>
                ))}
              </div>
            </div>

            {/* Options */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: '#7E7E7E' }}>Options</p>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={btnFull} onChange={(e) => setBtnFull(e.target.checked)} />
                  <span className="text-[12px]" style={{ color: isDark ? '#FFFFFF' : '#0A0A12' }}>Full Width</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={btnLoading} onChange={(e) => setBtnLoading(e.target.checked)} />
                  <span className="text-[12px]" style={{ color: isDark ? '#FFFFFF' : '#0A0A12' }}>Loading</span>
                </label>
              </div>
            </div>

            {/* Label */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: '#7E7E7E' }}>Label</p>
              <input
                type="text"
                value={btnText}
                onChange={(e) => setBtnText(e.target.value)}
                className="w-full px-3 py-2 rounded-lg text-[12px] bg-transparent outline-none"
                style={{
                  border: isDark ? '1px solid rgba(255,255,255,0.15)' : '1px solid #E9EAEB',
                  color: isDark ? '#FFFFFF' : '#0A0A12',
                }}
              />
            </div>
          </div>

          {/* Live preview */}
          <div
            className="p-6 rounded-xl flex items-center justify-center min-h-[100px]"
            style={{ backgroundColor: isDark ? '#0A0A12' : '#F0F2FF' }}
          >
            <button
              onClick={handleBtnClick}
              className={`rounded-full active:scale-95 transition-all font-sans font-medium text-[16px] flex items-center justify-center ${buttonVariants[btnVariant]} ${btnFull ? 'w-full' : 'px-10'}`}
              style={{ height: btnSize === 'md' ? '48px' : '52px' }}
            >
              {btnLoading ? (
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
              ) : btnText}
            </button>
          </div>
        </div>

        <CodeBlock isDark={isDark} code={`import { GpButton } from '@/components/ui/GpButton';\n\n<GpButton\n  variant="${btnVariant}"\n  size="${btnSize}"\n  fullWidth={${btnFull}}\n  isLoading={${btnLoading}}\n  onClick={handler}\n>\n  ${btnText}\n</GpButton>`} />
      </Section>

      <Section title="GpStatusDot">
        <div
          className="p-6 rounded-2xl"
          style={{
            backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
            border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #E9EAEB',
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { status: 'active', label: 'Active', color: '#1CB956', shadow: 'rgba(28,185,86,0.5)' },
              { status: 'pending', label: 'Pending', color: '#FACC15', shadow: 'rgba(250,204,21,0.5)' },
              { status: 'review', label: 'In Review', color: '#EAB308', shadow: 'rgba(234,179,8,0.5)' },
              { status: 'cancelled', label: 'Cancelled', color: '#EF4444', shadow: 'rgba(239,68,68,0.5)' },
              { status: 'warning', label: 'Warning', color: '#FF9500', shadow: 'rgba(255,149,0,0.5)' },
              { status: 'delivered', label: 'Delivered', color: '#1CB956', shadow: 'rgba(28,185,86,0.5)' },
            ].map(({ status, label, color, shadow }) => (
              <div key={status} className="flex items-center gap-3 p-4 rounded-xl"
                style={{ backgroundColor: isDark ? 'rgba(255,255,255,0.04)' : '#FFFFFF', border: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid #E9EAEB' }}>
                <GpStatusDot status={status as any} />
                <div>
                  <p className="text-[13px] font-medium" style={{ color: isDark ? '#FFFFFF' : '#0A0A12' }}>{label}</p>
                  <p className="text-[11px] font-mono" style={{ color: '#7E7E7E' }}>status="{status}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <CodeBlock isDark={isDark} code={`import { GpStatusDot } from '@/components/ui/GpStatusDot';\n\n<GpStatusDot status="active" />\n<GpStatusDot status="pending" />\n<GpStatusDot status="cancelled" />`} />
      </Section>

      <Section title="GpSectionLabel">
        <div
          className="p-6 rounded-2xl space-y-6"
          style={{
            backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
            border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #E9EAEB',
          }}
        >
          {[
            { size: 'md', label: 'PAYMENT METHODS', desc: 'size="md" — 14px / 700 / uppercase' },
            { size: 'sm', label: 'ACCOUNT SETTINGS', desc: 'size="sm" — 12px / 700 / uppercase' },
          ].map(({ size, label, desc }) => (
            <div key={size}>
              <GpSectionLabel size={size as any}>{label}</GpSectionLabel>
              <p className="text-[11px]" style={{ color: '#7E7E7E' }}>{desc}</p>
            </div>
          ))}
        </div>
        <CodeBlock isDark={isDark} code={`import { GpSectionLabel } from '@/components/ui/GpSectionLabel';\n\n<GpSectionLabel>PAYMENT METHODS</GpSectionLabel>\n<GpSectionLabel size="sm">ACCOUNT SETTINGS</GpSectionLabel>`} />
      </Section>
    </div>
  );
}
