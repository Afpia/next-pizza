import type { FC } from 'react'

import { cn } from '@/lib/utils'

interface Props {
	className?: string
}

export const Container: FC<React.PropsWithChildren<Props>> = ({ className, children }) => (
	<div className={cn('mx-auto max-w-[1280px]', className)}>{children}</div>
)
