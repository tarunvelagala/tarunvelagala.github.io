
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 py-8">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground">© {currentYear} Tarun Velagala. All rights reserved.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">LinkedIn</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">GitHub</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Twitter</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
