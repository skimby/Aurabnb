import { useSelector } from "react-redux";
import './GetSpot.css';
import './SpotGallery.css'
import ShowAllButton from "./ShowAllButton";

const SpotGallery = ({ spotId }) => {
    const spot = useSelector(state => state.spot.currentSpot);
    console.log(spot)
    return (
        <>

            <div className='spot-gallery-main'>
                <div className='img-0'>
                    <img src={spot?.images[0].url} width='100%' alt={spot?.images[0].name} className='img-0-class' />
                </div>

                <div className="spot-gallery-2">
                    <div className="img-1">
                        <img src={spot?.images[1].url} width='100%' alt={spot?.images[1].name} className='img-1-class' />
                    </div>
                    <div className="img-2">
                        <img src={spot?.images[2].url} width='100%' alt={spot?.images[2].name} className='img-2-class' />
                    </div>
                    <div className="img-3">
                        <img src={spot?.images[3].url} width='100%' alt={spot?.images[3].name} className='img-3-class' />
                    </div>
                    <div className="img-4">
                        <img src={spot?.images[4].url} width='100%' alt={spot?.images[4].name} className='img-4-class' />
                    </div>
                </div>


            </div>
            <ShowAllButton />
            {/* {
                    spot?.images.map((image, index) => {
                        return (
                            <img src={image.url} alt={image.name} key={index} />
                        )
                    })
                } */}

        </>
    )
}
export default SpotGallery;
