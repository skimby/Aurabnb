// // import { loadAllSpots } from "../../store/spot"
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import './GetAllSpots.css';


// const GetAllSpots = () => {
//     const dispatch = useDispatch();
//     const spots = Object.values(useSelector(state => state.spot));

//     useEffect(() => {
//         // dispatch(loadAllSpots(spots));
//     }, [dispatch])

//     return (
//         <div className="spots-grid">
//             {spots?.map(spot => {
//                 return (
//                     <div className="spot-card" key={spot?.id}>

//                         <img className='img-styling' src={spot?.previewImage[0]} alt={spot?.name} key={spot?.id + 'image'} />


//                         <div className='spot-card-header' key={spot?.id + 'card'}>

//                             <h3 key={spot?.id + 'location'}>
//                                 {`${spot?.city}, ${spot?.state}`}</h3>
//                         </div>

//                         <div className='header' key={spot?.id + 'rating'}>
//                             <h3 key={spot?.id + 'test'}>{spot?.avgStarRating}test</h3>
//                             <i className="fa-solid fa-star fa-sm" key={spot?.id + 'star'}></i>
//                         </div>


//                         <h3 key={spot?.id + 'price'}>
//                             {`$${spot?.price} night`}
//                         </h3>
//                     </div>

//                 )
//             })
//             }

//         </div >

//     )

// }

// export default GetAllSpots;
