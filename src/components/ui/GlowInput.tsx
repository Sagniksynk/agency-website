import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlowInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

interface GlowTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const GlowInput = forwardRef<HTMLInputElement, GlowInputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="relative group">
        {label && (
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-0 group-focus-within:opacity-50 transition-all duration-300" />
          <input
            ref={ref}
            className={cn(
              "relative w-full px-4 py-3 rounded-xl bg-card/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-all duration-300",
              error && "border-destructive",
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-1 text-sm text-destructive">{error}</p>
        )}
      </div>
    );
  }
);

GlowInput.displayName = "GlowInput";

export const GlowTextarea = forwardRef<HTMLTextAreaElement, GlowTextareaProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="relative group">
        {label && (
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-0 group-focus-within:opacity-50 transition-all duration-300" />
          <textarea
            ref={ref}
            className={cn(
              "relative w-full px-4 py-3 rounded-xl bg-card/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-all duration-300 resize-none min-h-[120px]",
              error && "border-destructive",
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-1 text-sm text-destructive">{error}</p>
        )}
      </div>
    );
  }
);

GlowTextarea.displayName = "GlowTextarea";

export const GlowSelect = forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement> & { label?: string; error?: string }>(
  ({ className, label, error, children, ...props }, ref) => {
    return (
      <div className="relative group">
        {label && (
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-0 group-focus-within:opacity-50 transition-all duration-300" />
          <select
            ref={ref}
            className={cn(
              "relative w-full px-4 py-3 rounded-xl bg-card/50 border border-border text-foreground focus:outline-none focus:border-primary/50 transition-all duration-300 appearance-none cursor-pointer",
              error && "border-destructive",
              className
            )}
            {...props}
          >
            {children}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {error && (
          <p className="mt-1 text-sm text-destructive">{error}</p>
        )}
      </div>
    );
  }
);

GlowSelect.displayName = "GlowSelect";
