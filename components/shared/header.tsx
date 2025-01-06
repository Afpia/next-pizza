import { ArrowRight, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import { Button } from '../ui'

import { Container } from './container'

interface Props {
	className?: string
}

export const Header = ({ className }: Props) => (
	<header className={cn('border-b', className)}>
		<Container className='flex items-center justify-between py-8'>
			<Link href='/'>
				<div className='flex items-center gap-4'>
					<Image alt='Logo' height={35} src='/logo.png' width={35} />
					<div>
						<h1 className='text-2xl uppercase font-black'>Next Pizza</h1>
						<p className='text-sm text-gray-400 leading-3'>вкусней уже некуда</p>
					</div>
				</div>
			</Link>

			{/* <div className='flex items-center gap-3'>
				<AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)} />

				<ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />

				{hasCart && <CartButton />}
			</div> */}

			<div>
				<Button className='group relative'>
					<b>520 Р</b>
					<span className='h-full w-[1px] bg-white/30 mx-3' />
					<div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
						<ShoppingCart className='relative' size={16} />
						<b>3</b>
					</div>
					<ArrowRight
						className='absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
						size={20}
					/>
				</Button>
			</div>
		</Container>
	</header>
)
