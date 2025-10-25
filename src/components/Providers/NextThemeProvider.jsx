'use client';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '../ui/sonner';
import { TooltipProvider } from '../ui/tooltip';

export default function NextThemeProvider({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system" // system theme (light/dark) detect
      enableSystem
    >
      <TooltipProvider>{children}</TooltipProvider>
      <Toaster position="top-center" />
    </ThemeProvider>
  );
}
