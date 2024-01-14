import * as React from "react";
import {
  TouchableOpacity,
  TouchableOpacityComponent,
  TouchableOpacityProps,
} from "react-native";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/utils";
import P from "./Text";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-white    text-base",
        secondary: "bg-[#CCB801] text-white text-lg ",
        ghost: "bg-gray-300 shadow-md",
        destructive: "bg-red-500 text-destructive-foreground text-white",
        outline:
          "border-2 border-green hover:bg-green hover:text-white text-base",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-4 py-1",
        sm: "h-8 rounded-md px-3 text-xs py-3 text-base",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
      textColor: {
        default: "text-white",
        dark: "text-gray-900",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      textColor: "default",
    },
  },
);

interface ButtonProps
  extends TouchableOpacityProps,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<TouchableOpacityComponent, ButtonProps>(
  ({ className, variant, size, textColor, asChild = false, ...props }, ref) => {
    const Comp = asChild ? TouchableOpacity : "TouchableOpacity";
    return (
      <TouchableOpacity
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        <P style={cn(buttonVariants({ textColor }))}>{props.children}</P>
      </TouchableOpacity>
    );
  },
);
