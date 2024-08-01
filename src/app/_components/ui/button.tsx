import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const createShape = (base: string) => ({
  default: base,
  circle: "p-3.5 rounded-full",
  pill: `${base} rounded-full`,
});

const SHAPE = createShape("px-4 py-2");

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      colour: {
        primary: "bg-primary text-foreground hover:bg-primary/95",
        secondary: "bg-secondary text-foreground hover:bg-secondary/95",
        success: " bg-success text-foreground hover:bg-success/95",
        error: "bg-error text-foreground hover:bg-error/95",
        warning: "bg-warning text-foreground hover:bg-warning/95",
      },
      variant: {
        default: "shadow-md",
        smooth: "",
        outline: "bg-transparent border border-current ",
      },
      shape: SHAPE,
    },
    compoundVariants: [
      {
        colour: "primary",
        variant: "smooth",
        className:
          "bg-primary-lighter text-primary hover:bg-primary-lighter/95",
      },
      {
        colour: "secondary",
        variant: "smooth",
        className:
          "bg-secondary-lighter text-secondary hover:bg-secondary-lighter/95",
      },
      {
        colour: "success",
        variant: "smooth",
        className:
          "bg-success-lighter text-success hover:bg-success-lighter/95",
      },
      {
        colour: "error",
        variant: "smooth",
        className: "bg-error-lighter text-error hover:bg-error-lighter/95",
      },
      {
        colour: "warning",
        variant: "smooth",
        className:
          "bg-warning-lighter text-warning hover:bg-warning-lighter/95",
      },
      //** outline BUTTON */
      {
        colour: "primary",
        variant: "outline",
        className:
          "text-primary hover:bg-primary-lighter/40 active:bg-primary-lighter/75",
      },
      {
        colour: "secondary",
        variant: "outline",
        className:
          "text-secondary hover:bg-secondary-lighter/40 active:bg-secondary-lighter/75",
      },
      {
        colour: "success",
        variant: "outline",
        className:
          " text-success hover:bg-success-lighter/40 active:bg-success-lighter/75",
      },
      {
        colour: "error",
        variant: "outline",
        className:
          "text-error hover:bg-error-lighter/40 active:bg-error-lighter/75",
      },
      {
        colour: "warning",
        variant: "outline",
        className:
          "text-warning hover:bg-warning-lighter/40 active:bg-warning-lighter/75",
      },
    ],
    defaultVariants: {
      colour: "primary",
      variant: "default",
      shape: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, colour, variant, shape, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ className, colour, variant, shape }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
