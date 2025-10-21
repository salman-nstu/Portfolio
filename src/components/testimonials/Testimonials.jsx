import React from 'react';
import './Testimonials.css';
import Image3 from '../../assets/avatar-3.svg'
import Image4 from '../../assets/avatar-4.svg'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

	const data = [
		{
			id: 1,
			image: Image4,
			title: "Dr. Muhammad Rahman",
			subtitle: "Professor @ NSTU",
			comment: "Salman demonstrates exceptional problem-solving skills and a strong grasp of software engineering principles. His IoT Smart Farming project showcased his ability to integrate hardware and software seamlessly. He's a dedicated student who always seeks to understand concepts deeply.",
		},
		{
			id: 2,
			image: Image3,
			title: "Ahmed Hassan",
			subtitle: "Director @ Youth Network Centre",
			comment: "During his tenure as Assistant Manager, Salman showed remarkable leadership and organizational skills. He effectively coordinated team activities and demonstrated strong communication abilities. His dedication to social causes and innovation is truly commendable.",
		},
		{
			id: 3,
			image: Image4,
			title: "Fatima Khan",
			subtitle: "Team Lead @ Mental Health Care",
			comment: "Salman has been an invaluable member of our HR team. His commitment to promoting mental health awareness and his ability to engage volunteers is outstanding. He brings creativity and empathy to everything he does.",
		},
		{
			id: 4,
			image: Image3,
			title: "Rafiq Ahmed",
			subtitle: "Project Partner @ NSTU",
			comment: "Working with Salman on the ProCoordinator CPM Calculator was an excellent experience. His Java programming skills are solid, and he writes clean, well-documented code. He's a great team player who values collaboration and knowledge sharing.",
		},
	];

	return (
		<section className="testimonials container section">

			<h2 className="section__title">Testimonials</h2>

			<Swiper className="testimonial__container grid"
				modules={[Pagination]}
				spaceBetween={30}
				slidesPerView={1}
				loop={true}
				grabCursor={true}
				pagination={{ clickable: true }}>
				{data.map(({ id, image, title, subtitle, comment }) => {
					return (
						<SwiperSlide className="testimonial__item" key={id}>
							<div className="thumb">
								<img src={image} alt="" />
							</div>
							<h3 className="testimonial__title">{title}</h3>
							<span className="subtitle">{subtitle}</span>
							<div className="comment">{comment}</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</section>
	)
}

export default Testimonials