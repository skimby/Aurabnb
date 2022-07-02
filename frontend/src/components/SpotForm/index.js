import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Route, useHistory } from "react-router-dom";
import { createSpot, getOneSpot } from "../../store/spot";
import GetSpot from "../GetSpot";

const SpotForm = ({ isLoaded }) => {
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isEdited, setIsEdited] = useState(false);

    const spot = useSelector(state => state.spot.currentSpot);

    const history = useHistory();
    const dispatch = useDispatch();
    // add validations here later

    //Set form header (create vs edit)
    const header = () => {
        if (isEdited) {
            return (<h2>Edit your Spot</h2>)
        } else if (!isEdited) {
            return (<h2>Create a Spot</h2>)
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
        const newSpot = await dispatch(createSpot(spotFormInput))

        history.push(`/spots/${newSpot.id}`)

        // setIsSubmitted(true);


        console.log(spot)
        //come back to this later
        // setIsEdited(true);
    }

    // useEffect(() => {
    //     // console.log(spot?.id)
    //     console.log(isSubmitted)
    //     // let spotId = parseInt(spot?.id) + 1;
    //     if (isSubmitted) {
    //         // history.push(`/spots/${spotId}`)
    //         history.push(`/spots/${spot?.id}`)
    //     }
    // }, [isSubmitted, address])

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
                <button type='submit'>Submit</button>
            </form >

            < Route path='spots/:spotId' >
                <GetSpot />
            </Route >


        </>
    )
}
export default SpotForm;
