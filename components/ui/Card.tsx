import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Card({ className = '', ...props }: CardProps) {
  return (
    <div
      className={`glass glass-hover rounded-xl p-6 ${className}`}
      {...props}
    />
  )
}

export function CardContent({ className = '', ...props }: CardProps) {
  return <div className={`${className}`} {...props} />
}

export function CardHeader({ className = '', ...props }: CardProps) {
  return (
    <div className={`mb-4 ${className}`} {...props} />
  )
}

export function CardTitle({
  className = '',
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & { children: React.ReactNode }) {
  return (
    <h3 className={`text-lg font-semibold text-white ${className}`} {...props}>
      {children}
    </h3>
  )
}

export function CardDescription({
  className = '',
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement> & { children: React.ReactNode }) {
  return (
    <p className={`text-sm text-[#a3a3a3] ${className}`} {...props}>
      {children}
    </p>
  )
}
