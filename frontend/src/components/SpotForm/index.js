import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CreateSpot } from "../../store/spot";

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

    const user = useSelector(state => state.session.user);
    const spots = useSelector(state => state.session.spot);

    const dispatch = useDispatch();
    // i dont think we need any further validations.. only to require all inputs. if so, add useEffect and create errors state



    const handleSubmit = async (e) => {
        e.preventDefault();

        const spotFormInput = {
            ///id: user.id, id will be auto generated
            // ownerId: user.id,
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
        dispatch(CreateSpot(spotFormInput))
        console.log(spots)
    }
    return (
        <>
            <h2>Create a Spot</h2>
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
        </>
    )
}
export default SpotForm;
