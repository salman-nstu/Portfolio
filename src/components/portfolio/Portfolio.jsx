import React, { useState } from "react";
import "./Portfolio.css";

import Menu from "./Menu";
import { RiGithubLine, RiCloseLine } from "react-icons/ri";

import { motion } from "framer-motion";

const Portfolio = () => {
	const [items, setItems] = useState(Menu);
	const [activeFilter, setActiveFilter] = useState(0);
	const [selectedProject, setSelectedProject] = useState(null);

	const filterItems = (categoryItem) => {
		const updatedItems = Menu.filter((curElem) => {
			return curElem.category.includes(categoryItem);
		});

		setItems(updatedItems);
	};

	const closeModal = () => {
		setSelectedProject(null);
	};

	return (
		<>
			<section className="portfolio container section" id="portfolio">
				<div style={{marginBottom: '40px'}}>
					<h2 className="section__title">Featured Projects & Expertise</h2>
					<p style={{color: '#a1a1a1', fontSize: '1rem', marginTop: '10px', maxWidth: '600px', lineHeight: '1.6'}}>
						Explore my diverse portfolio spanning full-stack development, AI/ML integration, systems programming, and IoT solutions. Each project demonstrates real-world problem-solving and technical excellence.
					</p>
				</div>

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
							key={id}
							onClick={() => setSelectedProject(elem)}
							style={{cursor: 'pointer'}}>
							<div className="portfolio__thumbnail">
								<img src={image} alt="" className="portfolio__img" height="267" />
								<div className="portfolio__mask"></div>
							</div>

							<div style={{padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px', height: '100%'}}>
								{/* Title - Most prominent */}
								<h3 className="portfolio__title" style={{fontSize: '1.2rem', fontWeight: '700', margin: 0, color: '#f1f5fe', lineHeight: '1.4'}}>
									{title}
								</h3>

								{/* Date - Subtle accent */}
								{date && (
									<span style={{fontSize: '0.8rem', color: '#f97316', fontWeight: '500', display: 'inline-block', width: 'fit-content'}}>
										{date}
									</span>
								)}

								{/* Category tags */}
								<div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
									{category.map((cat, idx) => (
										<span key={idx} style={{
											fontSize: '0.75rem',
											backgroundColor: 'rgba(249, 115, 22, 0.2)',
											color: '#f97316',
											padding: '4px 8px',
											borderRadius: '4px',
											border: '1px solid rgba(249, 115, 22, 0.4)',
											fontWeight: '500'
										}}>
											{cat}
										</span>
									))}
								</div>

								{/* Description */}
								{description && (
									<p style={{fontSize: '0.9rem', margin: 0, color: '#d4d4d4', lineHeight: '1.5', flex: 1}}>
										{description}
									</p>
								)}

								{/* Technologies */}
								{technologies && (
									<div style={{paddingTop: '8px', borderTop: '1px solid rgba(255,255,255,0.1)'}}>
										<p style={{fontSize: '0.8rem', margin: '8px 0 6px 0', color: '#a1a1a1', fontWeight: '500'}}>
											Technologies
										</p>
										<p style={{fontSize: '0.8rem', margin: 0, color: '#f1f5fe', lineHeight: '1.4'}}>
											{technologies}
										</p>
									</div>
								)}

								{/* GitHub Button */}
								<div style={{marginTop: 'auto', paddingTop: '12px'}}>
									<a href={repositoryUrl} target="_blank" rel="noreferrer" 
										onClick={(e) => e.stopPropagation()}
										style={{
											display: 'inline-flex',
											alignItems: 'center',
											gap: '8px',
											backgroundColor: 'rgba(249, 115, 22, 0.15)',
											color: '#f97316',
											padding: '8px 12px',
											borderRadius: '6px',
											border: '1px solid rgba(249, 115, 22, 0.3)',
											textDecoration: 'none',
											fontSize: '0.85rem',
											fontWeight: '600',
											transition: 'all 0.3s ease',
											cursor: 'pointer'
										}}
										onMouseEnter={(e) => {
											e.target.style.backgroundColor = 'rgba(249, 115, 22, 0.3)';
											e.target.style.borderColor = 'rgba(249, 115, 22, 0.6)';
										}}
										onMouseLeave={(e) => {
											e.target.style.backgroundColor = 'rgba(249, 115, 22, 0.15)';
											e.target.style.borderColor = 'rgba(249, 115, 22, 0.3)';
										}}>
										<RiGithubLine size={16} />
										View Code
									</a>
								</div>
							</div>
						</motion.div>
					);
				})}
			</div>
		</section>

		{/* Modal */}
		{selectedProject && (
			<div
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundColor: 'rgba(0, 0, 0, 0.8)',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					zIndex: 1000,
					padding: '20px',
					backdropFilter: 'blur(5px)'
				}}
				onClick={closeModal}
			>
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.9 }}
					transition={{ duration: 0.3 }}
					onClick={(e) => e.stopPropagation()}
					style={{
						backgroundColor: '#1a1a1a',
						borderRadius: '12px',
						padding: '40px',
						maxWidth: '700px',
						width: '100%',
						maxHeight: '90vh',
						overflowY: 'auto',
						border: '1px solid rgba(249, 115, 22, 0.3)',
						boxShadow: '0 20px 60px rgba(0, 0, 0, 0.9)'
					}}
				>
					{/* Close Button */}
					<button
						onClick={closeModal}
						style={{
							position: 'absolute',
							top: '20px',
							right: '20px',
							background: 'none',
							border: 'none',
							color: '#f97316',
							fontSize: '28px',
							cursor: 'pointer',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							width: '40px',
							height: '40px',
							borderRadius: '6px',
							backgroundColor: 'rgba(249, 115, 22, 0.1)',
							transition: 'all 0.3s ease',
							hover: {backgroundColor: 'rgba(249, 115, 22, 0.2)'}
						}}
						onMouseEnter={(e) => {
							e.target.style.backgroundColor = 'rgba(249, 115, 22, 0.2)';
						}}
						onMouseLeave={(e) => {
							e.target.style.backgroundColor = 'rgba(249, 115, 22, 0.1)';
						}}
					>
						<RiCloseLine size={24} />
					</button>

					{/* Modal Content */}
					<div style={{marginBottom: '30px'}}>
						{/* Project Image */}
						<img
							src={selectedProject.image}
							alt={selectedProject.title}
							style={{
								width: '100%',
								height: '300px',
								objectFit: 'cover',
								borderRadius: '8px',
								marginBottom: '30px',
								border: '1px solid rgba(249, 115, 22, 0.2)'
							}}
						/>

						{/* Title */}
						<h2 style={{
							fontSize: '2rem',
							fontWeight: '700',
							color: '#f1f5fe',
							margin: '0 0 15px 0',
							lineHeight: '1.3'
						}}>
							{selectedProject.title}
						</h2>

						{/* Date */}
						<span style={{
							fontSize: '0.95rem',
							color: '#f97316',
							fontWeight: '600',
							display: 'block',
							marginBottom: '20px'
						}}>
							{selectedProject.date}
						</span>

						{/* Categories */}
						<div style={{display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '25px'}}>
							{selectedProject.category.map((cat, idx) => (
								<span key={idx} style={{
									fontSize: '0.85rem',
									backgroundColor: 'rgba(249, 115, 22, 0.15)',
									color: '#f97316',
									padding: '6px 12px',
									borderRadius: '6px',
									border: '1px solid rgba(249, 115, 22, 0.4)',
									fontWeight: '600'
								}}>
									{cat}
								</span>
							))}
						</div>

						{/* Full Description */}
						<div style={{marginBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '30px'}}>
							<h3 style={{fontSize: '1.1rem', fontWeight: '600', color: '#a1a1a1', marginBottom: '12px'}}>Overview</h3>
							<p style={{
								fontSize: '1rem',
								color: '#d4d4d4',
								lineHeight: '1.8',
								margin: 0
							}}>
								{selectedProject.description}
							</p>
						</div>

						{/* Technologies */}
						<div style={{marginBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '30px'}}>
							<h3 style={{fontSize: '1.1rem', fontWeight: '600', color: '#a1a1a1', marginBottom: '12px'}}>Tech Stack</h3>
							<div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
								{selectedProject.technologies.split(', ').map((tech, idx) => (
									<span key={idx} style={{
										fontSize: '0.9rem',
										backgroundColor: 'rgba(249, 115, 22, 0.1)',
										color: '#fde047',
										padding: '6px 12px',
										borderRadius: '6px',
										border: '1px solid rgba(249, 115, 22, 0.3)',
										fontWeight: '500'
									}}>
										{tech}
									</span>
								))}
							</div>
						</div>

						{/* Repository Link */}
						<a
							href={selectedProject.repositoryUrl}
							target="_blank"
							rel="noreferrer"
							style={{
								display: 'inline-flex',
								alignItems: 'center',
								gap: '10px',
								backgroundColor: 'rgba(249, 115, 22, 0.2)',
								color: '#f97316',
								padding: '12px 24px',
								borderRadius: '8px',
								border: '1px solid rgba(249, 115, 22, 0.5)',
								textDecoration: 'none',
								fontSize: '1rem',
								fontWeight: '600',
								transition: 'all 0.3s ease',
								cursor: 'pointer'
							}}
							onMouseEnter={(e) => {
								e.target.style.backgroundColor = 'rgba(249, 115, 22, 0.3)';
								e.target.style.borderColor = 'rgba(249, 115, 22, 0.8)';
								e.target.style.transform = 'translateY(-2px)';
							}}
							onMouseLeave={(e) => {
								e.target.style.backgroundColor = 'rgba(249, 115, 22, 0.2)';
								e.target.style.borderColor = 'rgba(249, 115, 22, 0.5)';
								e.target.style.transform = 'translateY(0)';
							}}
						>
							<RiGithubLine size={20} />
							View on GitHub
						</a>
					</div>
				</motion.div>
			</div>
		)}
	</>
	);
};

export default Portfolio;
