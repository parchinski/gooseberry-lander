import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground/70 selection:bg-blue-500 selection:text-white h-11 w-full min-w-0 rounded-xl border border-slate-200 bg-white px-4 py-2 text-base shadow-sm transition-all duration-200 outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-blue-400 focus-visible:ring-blue-400/20 focus-visible:ring-4 focus-visible:shadow-md",
        "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
        "hover:border-slate-300",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
