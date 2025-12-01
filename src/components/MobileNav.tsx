import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";

export function MobileNav() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="shrink-0">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
            <SheetTitle className="hidden">Mobile Navigation</SheetTitle>
            <SheetDescription className="hidden">Navigation links</SheetDescription>
          <nav className="flex flex-col gap-6 mt-8">
            <a href="#services" className="text-lg font-medium hover:text-accent transition-colors">
              Services
            </a>
            <a href="#about" className="text-lg font-medium hover:text-accent transition-colors">
              About
            </a>
            <a href="#contact" className="text-lg font-medium hover:text-accent transition-colors">
              Contact
            </a>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

