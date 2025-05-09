
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 py-8">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground">© {currentYear} Tarun Velagala. All rights reserved.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">GitHub</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
