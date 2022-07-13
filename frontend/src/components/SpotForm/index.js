import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, useHistory } from "react-router-dom";
import { createSpot, getOneSpot, updateSpot } from "../../store/spot";
import GetSpot from "../GetSpot";

const SpotForm = ({ isLoaded }) => {
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
    const history = useHistory();
    const dispatch = useDispatch();

    // add validations here later ***


    //Set form header (create vs edit)
    const header = () => {
        if (spot) {
            return (<h2>Edit your Spot</h2>)
        } else if (spot === null) {
            return (<h2>Create a Spot</h2>)
        }
    }
    const submitButton = () => {
        if (spot) {
            return (<button type='submit'>Submit Edit</button>)
        } else if (spot === null) {
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
        //pass into thunk
        //await the dispatch and use the value
        if (spot) {
            const editSpot = await dispatch(updateSpot(spotFormInput, spot.id))
            history.push(`/spots/${editSpot.id}`)
        } else if (spot === null) {
            const newSpot = await dispatch(createSpot(spotFormInput))
            history.push(`/spots/${newSpot.id}`)
        }
    }
    useEffect(() => {
        dispatch(getOneSpot(spot?.id))
    }, [address, city, state, country, lat, lng, name, description, price])

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

            < Route path='spots/:spotId' >
                <GetSpot />
            </Route >


        </>
    )
}
export default SpotForm;
