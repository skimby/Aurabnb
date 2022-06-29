import { useState } from "react";



const SpotForm = () => {
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

    // i dont think we need any further validations.. only to require all inputs

    return (
        <>
            <form>
                <input
                    placeholder="Address"
                    type='text'
                >
                </input>
                <input
                    placeholder="City"
                    type="text"></input>
                <input
                    placeholder="state"
                    type='text'>

                </input>
            </form>
        </>
    )
}
export default SpotForm;
