import React, { useState } from "react";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";
import "./PlacesItem.css";

const PlacesItem = (props) => {
	const [showMap, setShowMap] = useState(false);
	const [showConfirmModal, setShowConfirmModal] = useState(false);

	const openMapHandler = () => setShowMap(true);

	const closeMapHandler = () => setShowMap(false);

	const showDeleteWarningHandler = () => {
		setShowConfirmModal(true);
	};

	const cancelDeleteHandler = () => {
		setShowConfirmModal(false);
	};

	const confirmDeleteHandler = () => {
		setShowConfirmModal(false);
		console.log("Deleting ..");
	};

	return (
		<React.Fragment>
			<Modal
				show={showMap}
				onCancel={closeMapHandler}
				header={props.address}
				contenClass="place-item__modal-content"
				footerClass="place-item__modal-actions"
				footer={<Button onClick={closeMapHandler}>Close</Button>}
			>
				<div className="map-container">
					<Map center={props.coordinates} zoom={16} />
				</div>
			</Modal>
			<Modal
				show={showConfirmModal}
				onCancel={cancelDeleteHandler}
				header="Are you sure?"
				footer="place-item__modal-actions"
				footer={
					<React.Fragment>
						<Button inverse onClick={cancelDeleteHandler}>
							Cancel
						</Button>
						<Button danger onClick={confirmDeleteHandler}>
							Delete
						</Button>
					</React.Fragment>
				}
			>
				<p>Do you want to proceed?</p>
			</Modal>
			<li className="place-item">
				<Card className="place-item_content">
					<div className="place-item__image">
						<img src={props.image} alt={props.title} />
					</div>
					<div>
						<h2>{props.title}</h2>
						<h3>{props.address}</h3>
						<p>{props.description}</p>
					</div>
					<div className="place-item__actions">
						<Button inverse onClick={openMapHandler}>
							View On Map
						</Button>
						<Button to={`/places/${props.id}`}>Edit</Button>
						<Button danger onClick={showDeleteWarningHandler}>
							Delete
						</Button>
					</div>
				</Card>
			</li>
		</React.Fragment>
	);
};

export default PlacesItem;
