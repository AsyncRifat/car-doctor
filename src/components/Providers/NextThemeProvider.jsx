'use client';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '../ui/sonner';

export default function NextThemeProvider({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system" // system theme (light/dark) detect
      enableSystem
    >
      {children}
      <Toaster position="top-center" />
    </ThemeProvider>
  );
}
