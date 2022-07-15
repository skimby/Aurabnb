import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { createSpot, getOneSpot, updateSpot } from "../../store/spot";

const SpotForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    let { spotId } = useParams();
    spotId = parseInt(spotId);

    const user = useSelector(state => state.session.user);
    const spot = useSelector(state => state.spot.currentSpot);

    const [address, setAddress] = useState(spot?.address);
    const [city, setCity] = useState(spot?.city);
    const [state, setState] = useState(spot?.state);
    const [country, setCountry] = useState(spot?.country);
    const [lat, setLat] = useState(spot?.lat);
    const [lng, setLng] = useState(spot?.lng);
    const [name, setName] = useState(spot?.name);
    const [description, setDescription] = useState(spot?.description);
    const [price, setPrice] = useState(spot?.price);

    //if someone find url, it redirects them to home
    //redirect on actual page, not app.js
    if (!user) {
        history.push('/');
    }

    // add validations here later ***
    useEffect(() => {
        if (spotId) {
            dispatch(getOneSpot(spotId))
        }
    }, [dispatch, spotId])



    //Set form header (create vs edit)
    const header = () => {
        if (spotId) {
            return (<h2>Edit your Spot</h2>)
        } else {
            return (<h2>Create a Spot</h2>)
        }
    }
    const submitButton = () => {
        if (spotId) {
            return (<button type='submit'>Submit Edit</button>)
        } else {
            return (<button type='submit'>Create New Spot</button>)
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const spotFormInput = {
            address,
            city,
            state,
            country,
            lat,
            lng,
            name,
            description,
            price
        }

        if (spotId) {
            const editSpot = await dispatch(updateSpot(spotFormInput, spotId))
            history.push(`/spots/${editSpot.id}`)
        } else {
            const newSpot = await dispatch(createSpot(spotFormInput))
            history.push(`/spots/${newSpot.id}`)
        }
    }


    console.log(spotId)

    return (
        <>
            {header()}
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Address"
                    type='text'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                >
                </input>
                <input
                    placeholder="City"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                ></input>
                <input
                    placeholder="State"
                    type='text'
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                >
                </input>
                <input
                    placeholder="Country"
                    type='text'
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                >
                </input>
                <input
                    placeholder="Latitude"
                    type='text'
                    value={lat}
                    onChange={(e) => setLat(e.target.value)}
                >
                </input>
                <input
                    placeholder="Longitude"
                    type='text'
                    value={lng}
                    onChange={(e) => setLng(e.target.value)}
                >
                </input>
                <input
                    placeholder="Name"
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                >
                </input>
                <input
                    placeholder="Description"
                    type='text'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                >
                </input>
                <input
                    placeholder="Price"
                    type='text'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                >
                </input>
                {submitButton()}
            </form >

        </>
    )
}
export default SpotForm;
