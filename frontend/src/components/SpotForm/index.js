import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSpot } from "../../store/spot";

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
    const [isEdited, setIsEdited] = useState(false);

    const user = useSelector(state => state.session.user);
    const spots = useSelector(state => state.session.spot);

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

        // redirect to the getSpot page.


        //need to useEffect ?  come back to this later
        setIsEdited(true);
    }
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
        </>
    )
}
export default SpotForm;
