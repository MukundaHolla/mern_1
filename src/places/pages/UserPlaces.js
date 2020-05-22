import React from "react";
import { useParams } from "react-router-dom";
import PlacesList from "../components/PlacesList";

const DUMMY_PLACES = [
	{
		id: "p1",
		title: "Prithvi, Sadananda Holla",
		imageUrl:
			"https://specials-images.forbesimg.com/imageserve/1026205392/960x0.jpg?fit=scale",
		description: "Estate bulding",
		address: "Near sasthana",
		creator: "u1",
		location: {
			lat: 40.4234234,
			lng: -73.435423,
		},
	},
	{
		id: "p2",
		title: "Prithvi, Sadananda Holla",
		imageUrl:
			"https://specials-images.forbesimg.com/imageserve/1026205392/960x0.jpg?fit=scale",
		description: "Estate bulding",
		address: "Near sasthana",
		creatorId: "u2",
		location: {
			lat: 40.4234234,
			lng: -73.435423,
		},
	},
];

const UserPlaces = () => {
	const userId = useParams().userId;
	const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
	return <PlacesList items={loadedPlaces} />;
};

export default UserPlaces;
