import React from 'react'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary'
  children: React.ReactNode
}

const variants = {
  default: 'bg-[#1f2937] text-[#3b82f6] border border-[#3b82f6]',
  secondary: 'bg-transparent text-[#d1d5db] border border-[#262626]',
}

export function Badge({ variant = 'default', className = '', children, ...props }: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
