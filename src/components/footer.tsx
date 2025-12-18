export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Thiago Rodrigues &bull; Feito com Next.js
        </p>
      </div>
    </footer>
  );
}
