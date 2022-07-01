import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Route, useHistory } from "react-router-dom";
import { createSpot, getOneSpot } from "../../store/spot";
import GetSpot from "../GetSpot";

const SpotForm = ({ isLoaded }) => {
    //not including id or owner id but we will need to manually assign this information.. later
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

    const user = useSelector(state => state.session.user);
    const spot = useSelector(state => state.spot.currentSpot);

    const history = useHistory();
    const dispatch = useDispatch();
    // i dont think we need any further validations.. only to require all inputs. if so, add useEffect and create errors state

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
        dispatch(createSpot(spotFormInput))

        // setIsSubmitted(true);
        history.push(`/spots/${spot.id}`)

        // redirect to the getSpot page.
        // < Redirect to = 'spots/:spotId' />

        //come back to this later
        // setIsEdited(true);
    }

    // useEffect(() => {
    //     console.log('true')
    //     if (isSubmitted) {
    //         history.push(`/spots/${spot.id}`)
    //     }
    // }, [isSubmitted])

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
            {isEdited && (
                < Route path='spots/:spotId' >
                    {/* < Redirect to='spots/:spotId' /> */}
                </Route >

            )}
        </>
    )
}
export default SpotForm;
