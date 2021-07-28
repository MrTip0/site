import React from 'react';
import NavBar from '../../components/navbar';

export default class Classmates extends React.Component {
	componentDidMount = () => {
		document.title = 'Fotoregistro';
	};
	render = () => {
		const imageStyle = 'w-5/6 mt-3 rounded';
		const textStyle =
			'mt-3 text-xl font-semibold text-center align-middle h-full';
		const cardStyle =
			'bg-primary-50 border-2 border-primary-100 rounded shadow flex flex-col w-60 h-85 m-5 items-center';
		return (
			<div className="h-full w-full flex flex-col items-center bg-secondary-100">
				<NavBar />
				<div className="flex flex-row flex-wrap m-3 self-center flex-grow mt-7">
					<div className={cardStyle}>
						<img
							alt="Ait Mourad"
							src={
								process.env.PUBLIC_URL +
								'/assets/img/classmates/ait.mourad.jpg'
							}
							className={imageStyle}
						/>
						<p className={textStyle}>Ait Mourad</p>
					</div>
					<div className={cardStyle}>
						<img
							alt="Algeri Nicola"
							src={
								process.env.PUBLIC_URL +
								'/assets/img/classmates/algeri.nicola.jpg'
							}
							className={imageStyle}
						/>
						<p className={textStyle}>Algeri Nicola</p>
					</div>
					<div className={cardStyle}>
						<img
							alt="Allegris Nicolò"
							src={
								process.env.PUBLIC_URL +
								'/assets/img/classmates/allegris.nicolo.luigi.jpg'
							}
							className={imageStyle}
						/>
						<p className={textStyle}>Allegris Nicolò</p>
					</div>
					<div className={cardStyle}>
						<img
							alt="Aouidat Amine"
							src={
								process.env.PUBLIC_URL +
								'/assets/img/classmates/aouidat.amine.jpg'
							}
							className={imageStyle}
						/>
						<p className={textStyle}>Aouidat Amine</p>
					</div>
					<div className={cardStyle}>
						<img
							alt="Berardi Tommaso"
							src={
								process.env.PUBLIC_URL +
								'/assets/img/classmates/berardi.tommaso.jpg'
							}
							className={imageStyle}
						/>
						<p className={textStyle}>Berardi Tommaso</p>
					</div>
					<div className={cardStyle}>
						<img
							alt="Berlendis Luca"
							src={
								process.env.PUBLIC_URL +
								'/assets/img/classmates/berlendis.luca.jpg'
							}
							className={imageStyle}
						/>
						<p className={textStyle}>Berlendis Luca</p>
					</div>
					<div className={cardStyle}>
						<img
							alt="Bianchi Simone"
							src={
								process.env.PUBLIC_URL +
								'/assets/img/classmates/bianchi.simone.jpg'
							}
							className={imageStyle}
						/>
						<p className={textStyle}>Bianchi Simone</p>
					</div>
					<div className={cardStyle}>
						<img
							alt="Carbonari Alessandro"
							src={
								process.env.PUBLIC_URL +
								'/assets/img/classmates/carbonari.alessandro.jpg'
							}
							className={imageStyle}
						/>
						<p className={textStyle}>Carbonari Alessandro</p>
					</div>
					<div className={cardStyle}>
						<img
							alt="Carminati Lorenzo"
							src={
								process.env.PUBLIC_URL +
								'/assets/img/classmates/carminati.lorenzo.jpg'
							}
							className={imageStyle}
						/>
						<p className={textStyle}>Carminati Lorenzo</p>
					</div>
					<div className={cardStyle}>
						<img
							alt="Chandra Das Vance Adam"
							src={
								process.env.PUBLIC_URL +
								'/assets/img/classmates/chandra.das.vance.adam.jpg'
							}
							className={imageStyle}
						/>
						<p className={textStyle}>Chandra Das Vance Adam</p>
					</div>
					<div className={cardStyle}>
						<img
							alt="Colleoni Tommaso"
							src={
								process.env.PUBLIC_URL +
								'/assets/img/classmates/colleoni.tommaso.jpg'
							}
							className={imageStyle}
						/>
						<p className={textStyle}>Colleoni Tommaso</p>
					</div>
					<div className={cardStyle}>
						<img
							alt="Crippa Daniele"
							src={
								process.env.PUBLIC_URL +
								'/assets/img/classmates/crippa.daniele.jpg'
							}
							className={imageStyle}
						/>
						<p className={textStyle}>Crippa Daniele</p>
					</div>
					<div className={cardStyle}>
						<img
							alt="Davide Cattaneo"
							src={
								process.env.PUBLIC_URL +
								'/assets/img/classmates/davide.cattaneo.jpg'
							}
							className={imageStyle}
						/>
						<p className={textStyle}>Davide Cattaneo</p>
					</div>
					<div className={cardStyle}>
						<img
							alt="Defendi Davide"
							src={
								process.env.PUBLIC_URL +
								'/assets/img/classmates/defendi.davide.jpg'
							}
							className={imageStyle}
						/>
						<p className={textStyle}>Defendi Davide</p>
					</div>
					<div className={cardStyle}>
						<img
							alt="Locatelli Celeste"
							src={
								process.env.PUBLIC_URL +
								'/assets/img/classmates/locatelli.celeste.jpg'
							}
							className={imageStyle}
						/>
						<p className={textStyle}>Locatelli Celeste</p>
					</div>
					<div className={cardStyle}>
						<img
							alt="Magni Nicolò"
							src={
								process.env.PUBLIC_URL +
								'/assets/img/classmates/magni.nicolo.jpg'
							}
							className={imageStyle}
						/>
						<p className={textStyle}>Magni Nicolò</p>
					</div>
					<div className={cardStyle}>
						<img
							alt="Morotti Tommaso"
							src={
								process.env.PUBLIC_URL +
								'/assets/img/classmates/morotti.tommaso.jpg'
							}
							className={imageStyle}
						/>
						<p className={textStyle}>Morotti Tommaso</p>
					</div>
					<div className={cardStyle}>
						<img
							alt="Quarti Luca"
							src={
								process.env.PUBLIC_URL +
								'/assets/img/classmates/quarti.luca.jpg'
							}
							className={imageStyle}
						/>
						<p className={textStyle}>Quarti Luca</p>
					</div>
					<div className={cardStyle}>
						<img
							alt="Rocchi Michele"
							src={
								process.env.PUBLIC_URL +
								'/assets/img/classmates/rocchi.michele.jpg'
							}
							className={imageStyle}
						/>
						<p className={textStyle}>Rocchi Michele</p>
					</div>
					<div className={cardStyle}>
						<img
							alt="Ruscigno Claudio"
							src={
								process.env.PUBLIC_URL +
								'/assets/img/classmates/ruscigno.claudio.jpg'
							}
							className={imageStyle}
						/>
						<p className={textStyle}>Ruscigno Claudio</p>
					</div>
					<div className={cardStyle}>
						<img
							alt="Stecchetti Daniele"
							src={
								process.env.PUBLIC_URL +
								'/assets/img/classmates/stecchetti.daniele.jpg'
							}
							className={imageStyle}
						/>
						<p className={textStyle}>Stecchetti Daniele</p>
					</div>
					<div className={cardStyle}>
						<img
							alt="Trushi Zoi"
							src={
								process.env.PUBLIC_URL +
								'/assets/img/classmates/trushi.zoi.jpg'
							}
							className={imageStyle}
						/>
						<p className={textStyle}>Trushi Zoi</p>
					</div>
					<div className={cardStyle}>
						<img
							alt="Vitali Michele"
							src={
								process.env.PUBLIC_URL +
								'/assets/img/classmates/vitali.michele.jpg'
							}
							className={imageStyle}
						/>
						<p className={textStyle}>Vitali Michele</p>
					</div>
				</div>
			</div>
		);
	};
}
