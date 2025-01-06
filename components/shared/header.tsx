import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'

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
		</Container>
	</header>
)
