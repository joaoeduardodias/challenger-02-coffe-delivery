import { ReactNode } from 'react'
import { SectionTitleContainer } from './styles'

interface SectionTitleProps {
  icon: ReactNode
  title: string
  subtitle: string
}

export function SectionTitle({ icon, subtitle, title }: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      {icon}
      <div>
        <p>{title}</p>
        <span>{subtitle}</span>
      </div>
    </SectionTitleContainer>
  )
}
