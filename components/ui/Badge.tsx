import React from 'react'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary'
  children: React.ReactNode
}

const variants = {
  default: 'bg-blue-500/10 text-blue-400 border border-blue-500/20 backdrop-blur-sm',
  secondary: 'bg-slate-800/50 text-slate-300 border border-slate-700 backdrop-blur-sm',
}

export function Badge({ variant = 'default', className = '', children, ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
