import clsx from "clsx"
import { ReactNode } from "react"

interface WrapperProps {
    children: ReactNode,
    className?: string
}

export const Wrapper: React.FC<WrapperProps> = ({
    children,
    className
}) => {
  return (
    <div className={clsx(
        'w-full h-full',
        className
    )}>
        {children}
    </div>
  )
}