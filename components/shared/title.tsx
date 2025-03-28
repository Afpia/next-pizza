import { createElement, type FC } from 'react'
import clsx from 'clsx'

type TitleSize = '2xl' | 'lg' | 'md' | 'sm' | 'xl' | 'xs'

interface Props {
	className?: string
	size?: TitleSize
	text: string
}

export const Title: FC<Props> = ({ text, size = 'sm', className }) => {
	const mapTagBySize = {
		xs: 'h5',
		sm: 'h4',
		md: 'h3',
		lg: 'h2',
		xl: 'h1',
		'2xl': 'h1'
	} as const

	const mapClassNameBySize = {
		xs: 'text-[16px]',
		sm: 'text-[22px]',
		md: 'text-[26px]',
		lg: 'text-[32px]',
		xl: 'text-[40px]',
		'2xl': 'text-[48px]'
	} as const

	return createElement(mapTagBySize[size], { className: clsx(mapClassNameBySize[size], className) }, text)
}
