function App() {
	return (
		<main className="">
			<section className="flex border-b-3 border-secondary">
				<aside className="w-20 flex flex-col gap-6 items-center justify-center bg-white border-r-3 border-secondary">
					<img src="/icons/arrow-up.png" alt="arrow up" />
					<div className="flex flex-col gap-8">
						<img src="/icons/insta.png" alt="" className="w-8 h-8" />
						<img src="/icons/facebook.png" alt="" className="w-[35px] h-[35px]" />
						<img src="/icons/twitter.png" alt="" className="w-[35.8px] h-[29px]" />
					</div>
					<img src="/icons/arrow-down.png" alt="arrow up" />
				</aside>
				<div className="flex-1">
					<div className="flex">
						<div className="bg-primary-100 text-secondary text-4xl font-bold border-r-3 border-secondary px-10 py-9">
							LuxeDerm
						</div>
						<div className="flex-1">
							<div className="flex items-center border-b-3 border-secondary">
								<ul className="flex-1 flex item-center justify-end gap-8 text-xl font-bold capitalize px-20 py-10 border-r-3 border-secondary">
									<li>service</li>
									<li>blog</li>
									<li>contact us</li>
									<li>about us</li>
								</ul>

								<button className="px-7 cursor-pointer">
									<img src="/icons/search.png" alt="search" className="w-[46px] h-[46px]" />
								</button>
							</div>
							<div className="grid grid-cols-6">
								<div className="text-[72px] text-center font-bold col-span-4 py-10 px-8 border-r-3 border-secondary">
									Window to Radiant Beauty and Confidence
								</div>
								<div className="relative">
									<img
										src="/icons/star-big.png"
										alt="big star"
										className="absolute left-1/2 translate-x-1/2 top-20 2xl:top-8"
									/>
									<img
										src="/icons/star-small.png"
										alt="big star"
										className="absolute left-1/2 translate-x-1/2 top-56 2xl:top-44"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="border-t-3 border-secondary grid grid-cols-5">
						<div className="relative px-12 pt-38 pb-8 col-span-2 border-r-3 border-secondary">
							<div className="absolute -top-28 left-32">
								<img src="/icons/play-btn.png" alt="play button" />
							</div>
							<div>
								<img src="/icons/quote.png" alt="quote" className="w-8 h-[23px]" />
								<p className="text-4xl mt-5">
									Skin care isn't a luxury; it's your daily commitment to nurturing your unique
									beauty.
								</p>
								<button className="flex items-center mt-14 px-16 py-3 border border-secondary rounded-lg bg-primary-100 shadow-btn text-secondary text-lg">
									<span>Get In Touch</span>
									<img src="/icons/arrow-right.png" alt="arrow right" className="w-6 h-6" />
								</button>
								<div className="text-lg text-secondary mt-18 flex items-center gap-5">
									<div className="flex [&>div]:-ml-2.5">
										<div className="w-[45px] h-[45px] shadow-img rounded-full overflow-hidden">
											<img
												src="/images/img-1.jpg"
												alt="image"
												className=" object-cover w-[45px] h-[45px]"
											/>
										</div>
										<div className="w-[45px] h-[45px] shadow-img rounded-full overflow-hidden">
											<img
												src="/images/img-2.jpg"
												alt="image"
												className=" object-cover w-[45px] h-[45px]"
											/>
										</div>
										<div className="w-[45px] h-[45px] shadow-img rounded-full overflow-hidden">
											<img
												src="/images/img-1.jpg"
												alt="image"
												className=" object-cover w-[45px] h-[45px]"
											/>
										</div>
										<div className="w-[45px] h-[45px] shadow-img rounded-full overflow-hidden">
											<img
												src="/images/img-3.jpg"
												alt="image"
												className=" object-cover w-[45px] h-[45px]"
											/>
										</div>
									</div>{' '}
									<p>5000+ Happy Clients</p>
								</div>
							</div>
						</div>
						<div className="relative col-span-3 bg-primary-200">
							<img
								src="/images/hero-img.png"
								alt="beautiful woman with a glowing skin care"
								className="absolute bottom-0 right-0 2xl:right-58 translate-x-0 w-[650px] h-[690px]"
							/>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default App;
