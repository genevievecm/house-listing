import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import { getListingMockData } from '../../api/getListingMockData';
import { formatPrice } from '../../utils';

import Table from '../../components/Table';
import RoomShape from '../../components/RoomShape';

import styles from './Listing.module.scss';

/**
 * Some TODOS that I did not get to complete:
 * - initial state and load of room shape using refs (right now you have to click a row to show the shape)
 * - create components for: Gallery, Image, List
 * - put the Table and rooms feature in a separate component
 * - extensive accessibility testing with keyboard interaction in the table (adding tabindexes)
 * - add an image slider package, probably something like swiperjs
 */

export default function Listing() {

	const [listing, setListing] = useState(null);
	const [rooms, setRooms] = useState([]);
	const [roomActiveIndex, setRoomActiveIndex] = useState(0);
	const [roomSqft, setRoomSqft] = useState();
	const [roomSize, setRoomSize] = useState({
		height: 0, width: 0
	});

	useEffect(() => {
		const getListing = async () => {
			try {
				const data = await getListingMockData();
				setListing(data);
				setRooms(data.propertyRooms);
			} catch (error) {
				// show error message in the UI, log error for dev debugging
			}
		};

		getListing();
	}, []);

	/**
	 * translates room dimensions into pixels so it can be compares in browser
	 * TODO: create a until function that can be imported into this file
	 */
	const showRoomSqft = ({
		areaSquareFeet,
		length,
		lengthInches,
		width,
		widthInches
	}, index) => {
		const foot = 50; // amount of pixels per foot
		const inch = foot / 12 // 12 inches in a foot
		setRoomActiveIndex(index);
		setRoomSqft(areaSquareFeet);
		setRoomSize({
			height: (length * foot) + (lengthInches * inch),
			width: (width * foot) + (widthInches * inch)
		});
	};

	// gets the unique heading names of room levels (e.g. main, basement)
	const roomLevels = rooms
		.map((room) => room.level)
		.filter((level, i, all) => all.indexOf(level) === i)

	if (listing) {
		const {
			address,
			images,
			city,
			listPrice,
			bedroomsTotal,
			bedroomsExtra,
			bathroomsFull,
			bathroomsHalf,
			baseDescription
		} = listing;

		return (
			<>
				<h1 className="visuallyHidden">Listing for {address}</h1>

				<section className={styles.gallery}>
					<img className={styles.galleryImg} src={images[0].large_url} alt="" />
					<img className={styles.galleryImg} src={images[1].large_url} alt="" />
				</section>

				<section className={styles.listingPrice} aria-describedby="price">
					<p className={styles.priceCity}>{city}</p>
					<h2 id="price" className={styles.priceDollars}>${formatPrice(listPrice)}</h2>
					<ul className={styles.priceRooms}>
						<li className={styles.priceRoomItem}>
							{bedroomsTotal}
							{bedroomsExtra &&
								` + ${bedroomsExtra} `}
							bed
						</li>
						<li className={styles.priceRoomItem}>
							{bathroomsFull}
							{bathroomsHalf &&
								` + ${bathroomsHalf} `}
							bath
						</li>
					</ul>
				</section>

				<section className={styles.listingDetails}>
					<p>{address}</p>
					<p>{baseDescription}</p>
					<p>Select a room below to view relative room size and shape.</p>
					<div className={styles.roomsTable}>
						<Table collapseBorder>
							<thead className="visuallyHidden">
								<tr>
									<th>Room Name</th>
									<th>Dimensions</th>
								</tr>
							</thead>
							{roomLevels.map((heading) => (
								<tbody key={heading}>
									<tr>
										<th colSpan="2">{heading}</th>
									</tr>
									{rooms.map((room, i) => (
										<tr
											key={room.name}
											onClick={() => showRoomSqft(room, i)}
											className={clsx(
												roomActiveIndex === i ? styles.active : styles.inactive,
												styles.interactiveRow
											)}
										>
											{room.level === heading && (
												<>
													<td>{room.name}</td>
													<td>{room.dimensions}</td>
												</>
											)}
										</tr>
									))}
								</tbody>
							))}
						</Table>

						<div className={styles.shapeWrapper}>
							{roomSqft &&
								<RoomShape
									width={roomSize.width.toFixed()}
									height={roomSize.height.toFixed()}
								>
									{roomSqft.toFixed(1)} sqft
								</RoomShape>}
						</div>
					</div>
				</section>
			</>
		);
	} else {
		return (
			<h1>Loading...</h1>
		);
	}
}
