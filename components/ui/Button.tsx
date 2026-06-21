import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const variants = {
  primary: 'bg-[#3b82f6] text-white hover:bg-[#2563eb] border border-[#3b82f6]',
  secondary: 'bg-transparent text-[#d1d5db] hover:text-white border border-[#262626] hover:border-[#3b82f6]',
  tertiary: 'bg-transparent text-[#3b82f6] hover:text-white border-b border-[#3b82f6] hover:border-[#2563eb]',
}

const sizes = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`font-medium rounded transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
