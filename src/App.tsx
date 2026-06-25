import { useState } from 'react';
import { ColorsPage } from './pages/ColorsPage';
import { TypographyPage } from './pages/TypographyPage';
import { ComponentsPage } from './pages/ComponentsPage';
import { TokensPage } from './pages/TokensPage';

const NAV_ITEMS = [
  { id: 'colors', label: '🎨 Colors' },
  { id: 'typography', label: '✍️ Typography' },
  { id: 'components', label: '⚡ Components' },
  { id: 'tokens', label: '🔧 Tokens' },
];

export default function App() {
  const [activePage, setActivePage] = useState('colors');
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen font-sans transition-colors duration-300"
        style={{
          backgroundColor: isDark ? '#0A0A12' : '#F7F8FA',
          color: isDark ? '#FFFFFF' : '#0A0A12',
        }}
      >
        {/* Ambient background glow */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[120px] opacity-20"
            style={{ backgroundColor: '#5260FE' }}
          />
        </div>

        {/* Top Nav */}
        <header
          className="sticky top-0 z-50 backdrop-blur-xl border-b"
          style={{
            backgroundColor: isDark ? 'rgba(10,10,18,0.85)' : 'rgba(247,248,250,0.85)',
            borderColor: isDark ? 'rgba(255,255,255,0.08)' : '#E9EAEB',
          }}
        >
          <div className="max-w-7xl mx-auto px-6 h-[64px] flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src="/favicon.svg" alt="Grid.Pe Logo" className="w-9 h-9" />
              <div>
                <span className="font-bold text-[16px]">Grid.Pe</span>
                <span
                  className="ml-2 text-[11px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: isDark ? 'rgba(82,96,254,0.15)' : 'rgba(82,96,254,0.1)',
                    color: '#5260FE',
                  }}
                >
                  Design
                </span>
              </div>
            </div>

            {/* Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className="px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200"
                  style={{
                    backgroundColor: activePage === item.id ? '#5260FE' : 'transparent',
                    color: activePage === item.id
                      ? '#FFFFFF'
                      : isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
                  }}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-2">
              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="flex md:hidden w-[40px] h-[40px] rounded-full items-center justify-center transition-all duration-200"
                style={{
                  backgroundColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                  border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #E9EAEB',
                  color: isDark ? '#FFFFFF' : '#0A0A12',
                }}
              >
                {mobileMenuOpen ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                )}
              </button>

              {/* Dark mode toggle */}
              <button
                onClick={() => setIsDark(!isDark)}
                className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-[18px] transition-all duration-200"
                style={{
                  backgroundColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                  border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #E9EAEB',
                }}
              >
                {isDark ? '☀️' : '🌙'}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t"
              style={{
                backgroundColor: isDark ? 'rgba(10,10,18,0.95)' : 'rgba(247,248,250,0.95)',
                borderColor: isDark ? 'rgba(255,255,255,0.08)' : '#E9EAEB',
              }}
            >
              <nav className="flex flex-col px-6 py-4 space-y-2">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActivePage(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-6 py-3 rounded-xl text-[14px] font-medium transition-all duration-200"
                    style={{
                      backgroundColor: activePage === item.id ? '#5260FE' : 'transparent',
                      color: activePage === item.id
                        ? '#FFFFFF'
                        : isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </header>

        {/* Page Content */}
        <main className="max-w-7xl mx-auto px-6 py-12 relative z-10">
          {activePage === 'colors' && <ColorsPage isDark={isDark} />}
          {activePage === 'typography' && <TypographyPage isDark={isDark} />}
          {activePage === 'components' && <ComponentsPage isDark={isDark} />}
          {activePage === 'tokens' && <TokensPage isDark={isDark} />}
        </main>
      </div>
    </div>
  );
}
