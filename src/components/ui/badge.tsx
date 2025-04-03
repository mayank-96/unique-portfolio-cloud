
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        neon: "border border-[#8B5CF6] bg-[#8B5CF6]/10 text-[#8B5CF6] shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:bg-[#8B5CF6]/20 hover:shadow-[0_0_15px_rgba(139,92,246,0.7)]",
        glow: "border-transparent bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] text-white shadow-[0_0_10px_rgba(14,165,233,0.5)] hover:shadow-[0_0_15px_rgba(14,165,233,0.7)]",
        futuristic: "border border-white/10 bg-futuristic-accent/50 text-white backdrop-blur-sm shadow-shine hover:border-white/20 hover:bg-futuristic-accent/70",
        purple: "border border-neon-purple/30 bg-neon-purple/10 text-neon-purple shadow-[0_0_10px_rgba(139,92,246,0.3)] hover:bg-neon-purple/20",
        blue: "border border-neon-blue/30 bg-neon-blue/10 text-neon-blue shadow-[0_0_10px_rgba(14,165,233,0.3)] hover:bg-neon-blue/20",
        pink: "border border-neon-pink/30 bg-neon-pink/10 text-neon-pink shadow-[0_0_10px_rgba(217,70,239,0.3)] hover:bg-neon-pink/20",
        glass: "border border-white/10 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
