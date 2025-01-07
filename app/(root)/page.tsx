import { Container, Filters, Title, TopBar } from '@/components/shared'

export default function Home() {
	return (
		<>
			<Container className='mt-10'>
				<Title className='font-extrabold' size='lg' text='Все пиццы' />
			</Container>
			<TopBar />

			<Container className='mt-10 pb-14'>
				<div className='flex gap-[80px]'>
					<div className='w-[250px]'>
						{/* <Suspense> */}
						<Filters />
						{/* </Suspense> */}
					</div>

					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							{/* {categories.map(
								(category) =>
									category.products.length > 0 && (
										<ProductsGroupList
											key={category.id}
											title={category.name}
											categoryId={category.id}
											items={category.products}
										/>
									)
							)} */}
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
