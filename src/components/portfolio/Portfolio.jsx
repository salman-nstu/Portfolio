import React, { useState } from "react";
import "./Portfolio.css";

import Menu from "./Menu";
import { RiGithubLine } from "react-icons/ri";

import { motion } from "framer-motion";

const Portfolio = () => {
	const [items, setItems] = useState(Menu);
	const [activeFilter, setActiveFilter] = useState(0);
	const filterItems = (categoryItem) => {
		const updatedItems = Menu.filter((curElem) => {
			return curElem.category.includes(categoryItem);
		});

		setItems(updatedItems);
	};

	return (
		<section className="portfolio container section" id="portfolio">
			<h2 className="section__title">All Projects</h2>

			<div className="portfolio__filters">
				<span className={activeFilter === 0 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { setItems(Menu); setActiveFilter(0) }}>
					All
				</span>
				<span className={activeFilter === 1 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("Frontend"); setActiveFilter(1) }}>
					Frontend
				</span>
				<span className={activeFilter === 2 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("Backend"); setActiveFilter(2) }}>
					Backend
				</span>
				<span className={activeFilter === 3 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("Full Stack"); setActiveFilter(3) }}>
					Full Stack
				</span>
				<span className={activeFilter === 4 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("Java"); setActiveFilter(4) }}>
					Java
				</span>
				<span className={activeFilter === 5 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("IoT"); setActiveFilter(5) }}>
					IoT
				</span>
			</div>

			<div className="portfolio__container grid">
				{items.map((elem) => {
					const { id, image, title, category, date, description, technologies, repositoryUrl } = elem;

					return (
						<motion.div
							layout
							animate={{ opacity: 1 }}
							initial={{ opacity: 0 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="portfolio__card"
							key={id}>
							<div className="portfolio__thumbnail">
								<img src={image} alt="" className="portfolio__img" height="267" />
								<div className="portfolio__mask"></div>
							</div>

							<span className="portfolio__category">{category.join(', ')}</span>
							{date && <span className="portfolio__date" style={{fontSize: '0.85rem', color: '#666'}}>{date}</span>}
							<h3 className="portfolio__title">{title}</h3>
							{description && <p className="portfolio__description" style={{fontSize: '0.9rem', margin: '8px 0', color: '#555'}}>{description}</p>}
							{technologies && <p className="portfolio__tech" style={{fontSize: '0.8rem', margin: '8px 0', color: '#888'}}><strong>Tech:</strong> {technologies}</p>}
							<div style={{display: 'flex', gap: '10px'}}>
								<a href={repositoryUrl} target="_blank" rel="noreferrer" className="portfolio__github-button">
									<RiGithubLine className="portfolio__button-icon" />
								</a>
							</div>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
