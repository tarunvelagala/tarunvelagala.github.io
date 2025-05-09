
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-palette-darkGray py-8">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground">© {currentYear} Tarun Velagala. All rights reserved.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-palette-blue transition-colors">LinkedIn</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-palette-blue transition-colors">GitHub</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-palette-blue transition-colors">Twitter</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-palette-green transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
