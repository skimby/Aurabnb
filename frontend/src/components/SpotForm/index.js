import { useState } from "react";
import { useSelector } from "react-redux";


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

    // i dont think we need any further validations.. only to require all inputs. if so, add useEffect and create errors state

    if (user) {

    }

    return (
        <>
            <h2>Create a Spot</h2>
            <form>
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
            </form >
        </>
    )
}
export default SpotForm;
