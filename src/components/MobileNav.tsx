import { Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

export function MobileNav() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="shrink-0 hover:bg-slate-100 rounded-xl">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-[300px] bg-white/95 backdrop-blur-xl border-l border-slate-200"
        >
          <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
          <SheetDescription className="sr-only">Navigation links</SheetDescription>

          <div className="flex flex-col h-full pt-8">
            <nav className="flex flex-col gap-2">
              <a
                href="#services"
                className="flex items-center justify-between px-4 py-3 text-lg font-medium text-foreground hover:bg-slate-50 rounded-xl transition-colors group"
              >
                Services
                <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
              <a
                href="#about"
                className="flex items-center justify-between px-4 py-3 text-lg font-medium text-foreground hover:bg-slate-50 rounded-xl transition-colors group"
              >
                About
                <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
              <a
                href="#contact"
                className="flex items-center justify-between px-4 py-3 text-lg font-medium text-foreground hover:bg-slate-50 rounded-xl transition-colors group"
              >
                Contact
                <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            </nav>

            <div className="mt-auto pb-8">
              <Button
                asChild
                className="w-full h-14 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg shadow-blue-500/25 font-semibold text-base rounded-xl"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
