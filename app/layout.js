export const metadata = {
  title: "Sparkworks — Think through anything.",
  description: "An 8-session program teaching kids critical thinking — through games, not lectures. Founding Sparks cohort in South Pasadena, CA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;900&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
