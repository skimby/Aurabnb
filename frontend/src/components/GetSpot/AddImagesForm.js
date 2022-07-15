import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { createSpot, getOneSpot, updateSpot } from "../../store/spot";

import { addSpotImages } from "../../store/images";

const AddImagesForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    let { spotId } = useParams();
    spotId = parseInt(spotId);

    const [images, setImages] = useState('');


    const handleChange = (e) => {
        const file = e.target.value;
        if (file) setImages(file);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const uploadedImages = {
            url: images
        }

        const editSpot = await dispatch(addSpotImages(uploadedImages, spotId))
        history.push(`/spots/${editSpot.id}`)
    }


    return (
        <>

            <form onSubmit={handleSubmit}>

                <label forhtml="images">Please upload images of your spot:</label>
                <input type="file" onChange={handleChange}
                    id="images" name="images"
                    accept="image/png, image/jpeg" ></input>
                <button>submit</button>
            </form >

        </>
    )
}
export default AddImagesForm;
