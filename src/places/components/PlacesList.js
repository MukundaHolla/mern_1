import React from "react";
import Card from "../../shared/components/UIElements/Card";
import PlacesItem from "./PlacesItem";
import Button from "../../shared/components/FormElements/Button";

import "./PlacesList.css";

const PlacesList = (props) => {
	if (props.items.length === 0) {
		return (
			<div className="place-list center">
				<Card>
					<h2>No Palces Found. Maybe create one?</h2>
					<Button to="/places/new">Share Place</Button>
				</Card>
			</div>
		);
	}

	return (
		<ul className="place-list">
			{props.items.map((place) => (
				<PlacesItem
					key={place.id}
					id={place.id}
					image={place.imageUrl}
					title={place.title}
					description={place.description}
					address={place.address}
					creatorId={place.creator}
					coordinates={place.location}
				/>
			))}
		</ul>
	);
};

export default PlacesList;
