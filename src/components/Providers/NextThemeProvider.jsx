'use client';
import { ThemeProvider } from 'next-themes';

export default function NextThemeProvider({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system" // system theme (light/dark) detect
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
}
