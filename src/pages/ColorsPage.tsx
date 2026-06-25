import { useState, useCallback, useMemo } from 'react';

const colorTokens = [
  { token: 'brand-primary', hex: '#5260FE', label: 'Primary' },
  { token: 'brand-primary-light', hex: '#6C72FF', label: 'Primary Light' },
  { token: 'brand-primary-dark', hex: '#404ECE', label: 'Primary Dark' },
  { token: 'brand-bg-dark', hex: '#0A0A12', label: 'BG Dark' },
  { token: 'brand-bg-light', hex: '#F7F8FA', label: 'BG Light' },
  { token: 'brand-bg-deep', hex: '#09090B', label: 'BG Deep' },
  { token: 'brand-surface-dark', hex: '#1A1A1A', label: 'Surface Dark' },
  { token: 'brand-surface-mid', hex: '#0D0D0D', label: 'Surface Mid' },
  { token: 'brand-card-dark', hex: '#191919', label: 'Card Dark' },
  { token: 'brand-border-light', hex: '#E9EAEB', label: 'Border Light' },
  { token: 'brand-border-dark', hex: '#202020', label: 'Border Dark' },
  { token: 'brand-border-mid', hex: '#313131', label: 'Border Mid' },
  { token: 'brand-text-muted', hex: '#7E7E7E', label: 'Text Muted' },
  { token: 'brand-text-dim', hex: '#8F8F8F', label: 'Text Dim' },
  { token: 'brand-text-dim2', hex: '#666666', label: 'Text Dim 2' },
  { token: 'brand-text-subtle', hex: '#C4C4C4', label: 'Text Subtle' },
  { token: 'brand-text-placeholder', hex: '#A4A4A4', label: 'Text Placeholder' },
  { token: 'brand-success', hex: '#1CB956', label: 'Success' },
  { token: 'brand-success-vibrant', hex: '#16B751', label: 'Success Vibrant' },
  { token: 'brand-success-dark', hex: '#0C7E4B', label: 'Success Dark' },
  { token: 'brand-success-mid', hex: '#0D992F', label: 'Success Mid' },
  { token: 'brand-error', hex: '#FF3B30', label: 'Error' },
  { token: 'brand-error-light', hex: '#EF4444', label: 'Error Light' },
  { token: 'brand-error-dark', hex: '#DC2626', label: 'Error Dark' },
  { token: 'brand-destructive', hex: '#FF1E1E', label: 'Destructive' },
  { token: 'brand-warning', hex: '#FACC15', label: 'Warning' },
  { token: 'brand-warning-gold', hex: '#EAB308', label: 'Warning Gold' },
  { token: 'brand-amber', hex: '#FF9500', label: 'Amber' },
  { token: 'brand-pro-gold', hex: '#CA8429', label: 'Pro Gold' },
  { token: 'brand-green-chart', hex: '#22C55E', label: 'Green Chart' },
];

const groups = [
  { label: 'Brand', emoji: '💜', tokens: ['brand-primary', 'brand-primary-light', 'brand-primary-dark'] },
  { label: 'Backgrounds', emoji: '🌑', tokens: ['brand-bg-dark', 'brand-bg-light', 'brand-bg-deep', 'brand-surface-dark', 'brand-surface-mid', 'brand-card-dark'] },
  { label: 'Borders', emoji: '📐', tokens: ['brand-border-light', 'brand-border-dark', 'brand-border-mid'] },
  { label: 'Text', emoji: '✍️', tokens: ['brand-text-muted', 'brand-text-dim', 'brand-text-dim2', 'brand-text-subtle', 'brand-text-placeholder'] },
  { label: 'Status', emoji: '🚦', tokens: ['brand-success', 'brand-success-vibrant', 'brand-success-dark', 'brand-success-mid', 'brand-error', 'brand-error-light', 'brand-error-dark', 'brand-destructive', 'brand-warning', 'brand-warning-gold', 'brand-amber', 'brand-pro-gold', 'brand-green-chart'] },
];

type CopyFormat = 'hex' | 'rgb' | 'tailwind';

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
}

function isLight(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 128;
}

function ColorSwatch({
  token, hex, label, format, isDark,
}: {
  token: string; hex: string; label: string; format: CopyFormat; isDark: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const getValue = () => {
    if (format === 'hex') return hex;
    if (format === 'rgb') return hexToRgb(hex);
    return `bg-${token}`;
  };

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(getValue());
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [format, hex, token]);

  const light = isLight(hex);

  return (
    <div
      onClick={handleCopy}
      className="group cursor-pointer rounded-2xl overflow-hidden transition-all duration-200 hover:scale-105 hover:-translate-y-1"
      style={{
        border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #E9EAEB',
        boxShadow: isDark ? '0 4px 24px rgba(0,0,0,0.4)' : '0 2px 12px rgba(0,0,0,0.06)',
      }}
    >
      {/* Color block */}
      <div
        className="h-[90px] w-full relative flex items-center justify-center"
        style={{ backgroundColor: hex }}
      >
        <span
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[12px] font-bold px-3 py-1 rounded-full backdrop-blur-sm"
          style={{
            backgroundColor: light ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)',
            color: light ? '#000' : '#fff',
          }}
        >
          {copied ? '✓ Copied!' : `Copy ${format.toUpperCase()}`}
        </span>
      </div>
      {/* Info block */}
      <div
        className="p-3"
        style={{ backgroundColor: isDark ? '#111118' : '#FFFFFF' }}
      >
        <p className="text-[13px] font-bold leading-none mb-1.5"
          style={{ color: isDark ? '#FFFFFF' : '#0A0A12' }}>
          {label}
        </p>
        <p className="text-[11px] font-mono" style={{ color: '#7E7E7E' }}>{hex}</p>
        <p className="text-[10px] font-mono mt-0.5 transition-colors group-hover:text-[#5260FE]"
          style={{ color: '#7E7E7E' }}>
          bg-{token}
        </p>
      </div>
    </div>
  );
}

export function ColorsPage({ isDark }: { isDark: boolean }) {
  const [format, setFormat] = useState<CopyFormat>('hex');
  const [search, setSearch] = useState('');

  const tokenMap = useMemo(() => Object.fromEntries(colorTokens.map((t) => [t.token, t])), []);

  const filteredGroups = useMemo(() => {
    return groups.map((g) => ({
      ...g,
      tokens: g.tokens.filter((t) => {
        const token = tokenMap[t];
        if (!token) return false;
        const q = search.toLowerCase();
        return token.label.toLowerCase().includes(q) || token.hex.toLowerCase().includes(q) || token.token.toLowerCase().includes(q);
      }),
    })).filter((g) => g.tokens.length > 0);
  }, [search, tokenMap]);

  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[40px] font-black mb-2 tracking-tight">Colors</h1>
        <p style={{ color: '#7E7E7E' }} className="text-[16px] mb-6">
          All {colorTokens.length} color tokens used across the Grid.Pe app. Click any swatch to copy.
        </p>

        {/* Controls */}
        <div className="flex flex-wrap gap-3 items-center">
          {/* Search */}
          <div
            className="flex items-center gap-2 px-4 h-[40px] rounded-full flex-1 min-w-[200px] max-w-[320px]"
            style={{
              backgroundColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
              border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #E9EAEB',
            }}
          >
            <span style={{ color: '#7E7E7E' }}>🔍</span>
            <input
              type="text"
              placeholder="Search tokens..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none text-[14px] flex-1"
              style={{ color: isDark ? '#FFFFFF' : '#0A0A12' }}
            />
          </div>

          {/* Format toggle */}
          <div
            className="flex items-center gap-1 p-1 rounded-full"
            style={{
              backgroundColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
              border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #E9EAEB',
            }}
          >
            {(['hex', 'rgb', 'tailwind'] as CopyFormat[]).map((f) => (
              <button
                key={f}
                onClick={() => setFormat(f)}
                className="px-4 h-[32px] rounded-full text-[13px] font-medium transition-all duration-200"
                style={{
                  backgroundColor: format === f ? '#5260FE' : 'transparent',
                  color: format === f ? '#FFFFFF' : isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
                }}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Groups */}
      {filteredGroups.map((group) => (
        <div key={group.label} className="mb-14">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-[20px]">{group.emoji}</span>
            <h2 className="text-[20px] font-bold">{group.label}</h2>
            <span
              className="text-[11px] font-bold px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                color: '#7E7E7E',
              }}
            >
              {group.tokens.length}
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {group.tokens.map((t) => {
              const token = tokenMap[t];
              return token ? (
                <ColorSwatch key={t} token={token.token} hex={token.hex} label={token.label} format={format} isDark={isDark} />
              ) : null;
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
