import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "placeholder:text-muted-foreground/70 selection:bg-blue-500 selection:text-white flex field-sizing-content min-h-[120px] w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base shadow-sm transition-all duration-200 outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-blue-400 focus-visible:ring-blue-400/20 focus-visible:ring-4 focus-visible:shadow-md",
        "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
        "hover:border-slate-300",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
