import { Container, Filters, ProductsGroupList, Title, TopBar } from '@/components/shared'

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
									category.products.length > 0 && ( */}
							<ProductsGroupList
								key={1}
								title='Мясные'
								items={[
									{
										id: 1,
										imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ef9c1daafcf3529a62947b9522a8fe.avif',
										ingredients: [],
										name: 'Пицца 1',
										items: [{ price: 100 }]
									},
									{
										id: 2,
										imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ef9c1daafcf3529a62947b9522a8fe.avif',
										ingredients: [],
										name: 'Пицца 1',
										items: [{ price: 100 }]
									},
									{
										id: 3,
										imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ef9c1daafcf3529a62947b9522a8fe.avif',
										ingredients: [],
										name: 'Пицца 1',
										items: [{ price: 100 }]
									},
									{
										id: 4,
										imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ef9c1daafcf3529a62947b9522a8fe.avif',
										ingredients: [],
										name: 'Пицца 1',
										items: [{ price: 100 }]
									}
								]}
								categoryId={1}
							/>
							<ProductsGroupList
								key={2}
								title='Вегетарианская'
								items={[
									{
										id: 1,
										imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ef9c1daafcf3529a62947b9522a8fe.avif',
										ingredients: [],
										name: 'Пицца 1',
										items: [{ price: 100 }]
									},
									{
										id: 2,
										imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ef9c1daafcf3529a62947b9522a8fe.avif',
										ingredients: [],
										name: 'Пицца 1',
										items: [{ price: 100 }]
									},
									{
										id: 3,
										imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ef9c1daafcf3529a62947b9522a8fe.avif',
										ingredients: [],
										name: 'Пицца 1',
										items: [{ price: 100 }]
									},
									{
										id: 4,
										imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ef9c1daafcf3529a62947b9522a8fe.avif',
										ingredients: [],
										name: 'Пицца 1',
										items: [{ price: 100 }]
									}
								]}
								categoryId={2}
							/>
							{/* )
							)} */}
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
