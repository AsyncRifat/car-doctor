'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon, Laptop } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ThemeToggleGroup() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // check resolvedTheme
  console.log(resolvedTheme);

  // mounted flag to fix hydration issues
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="flex gap-2 w-32 h-10" aria-hidden />;

  return (
    <div className="flex items-center gap-2 border p-1 rounded-4xl">
      {/* Light Theme Button */}
      <Button
        variant={theme === 'light' ? 'theme' : 'ghost'}
        size="icon"
        onClick={() => setTheme('light')}
        aria-label="Set Light Theme"
      >
        <Sun className="w-5 h-5" />
      </Button>

      {/* Dark Theme Button */}
      <Button
        variant={theme === 'dark' ? 'theme' : 'ghost'}
        size="icon"
        onClick={() => setTheme('dark')}
        aria-label="Set Dark Theme"
      >
        <Moon className="w-5 h-5" />
      </Button>

      {/* System Theme Button */}
      <Button
        variant={theme === 'system' ? 'theme' : 'ghost'}
        size="icon"
        onClick={() => setTheme('system')}
        aria-label="Set System Theme"
      >
        <Laptop className="w-5 h-5" />
      </Button>
    </div>
  );
}
