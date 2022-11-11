# Aurabnb Clone


Welcome to Aurabnb. Aurabnb is an online space-sharing platform that allows guests to book places for their vacations, business trips and more inspired by Airbnb


Explore Aurabnb Clone Site: https://airbnb-skimby.herokuapp.com/

## Technologies
 - JavaScript
 - HTML
 - CSS
 - React
 - Redux
 - Node.js
 - Express.js
 - Sequelize
 - Sqlite3
 - Heroku
 - AWS

## Site Overview

#### Landing Page:
![Landing Page](https://airbnb-user-uploads.s3.us-east-2.amazonaws.com/Screen+Shot+2022-11-11+at+11.04.57+AM.png)

#### Spots Page:
![enter image description here](https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/read-me/Screen+Shot+2022-07-18+at+1.50.49+PM.png)
#### Secondary Reviews Feature:
![enter image description here](https://airbnb-images-bucket.s3.us-east-2.amazonaws.com/read-me/Screen+Shot+2022-07-18+at+1.50.15+PM.png)


## Features

#### Primary Features
 - Create a new user
 - Log In user
 - Demo user login
 - Create new spot, edit, view and delete spot (Add images to the spot included in edit feature.)
#### Secondary Features
 - Create new review, edit, view and delete review (Add images to the review included edit feature.)
 - Allows users to create, edit and delete review if the user has an existing booking at the spot.
 #### Site Features
 - Carousel gallery on landing page to view images prior to clicking to the individual spot.
 - Full screen gallery once on spot page to get detailed look of images.
 - Modal forms allow you to create a spot at whatever page you are on as opposed to taking you to a specified route.


## Technical Implementation Challenges:
The 'Create a Spot' form was initially implemented as a link to a route. In converting it into a modal form, I lost information that would be obtained from the route's parameters (ex: :spotId and :reviewId). My 'Create a Spot' form also functioned as my 'Edit a Spot' form and the type of form was dependent on whether a 'SpotId' was present or not. If the 'SpotId' is presents, that means the spot exists and it is an 'Edit a Spot' form. If the spotId is null, then the spot does not exist and it is a 'Create a Spot' form.

Because I removed the form's parameters, I had to strategize a new way to determine if the spot existed or not. I decided to prop thread a state (either 'newSpot' or 'editForm') into the 'SpotFormModal' and replace the conditions that determined which form it should render.

```
// 'newSpot' is a state that is prop threaded into the 'SpotFormModal' to signal the form
    should 'Create a Spot'.

const  Navigation  = ({ isLoaded }) => {
const  history  =  useHistory();
const  dispatch  =  useDispatch();

const [newSpot] = (true);

const [showMenu, setShowMenu] =  useState(false);

...
{/* IF LOGGED IN ... */}
{isLoaded  &&  sessionUser  && (
<>
<li >
<SpotFormModal  newSpot={newSpot}  />
</li>
...

```
 ```
 // 'editForm' is a state that is prop threaded into the 'SpotFormModal' to signal the form
    should 'Edit a Spot'.
 const  GetSpot  = () => {
const  dispatch  =  useDispatch();
const  history  =  useHistory();
let { spotId } =  useParams();
spotId  =  parseInt(spotId);

const [userOwned, setUserOwned] =  useState();
const [bookedUser, setBookedUser] =  useState(false);
const [hasNoImages, setHasNoImages] =  useState();
const [editForm] =  useState(true);

...

{userOwned  && (
<>
<div  className="user-owned-functions">
<SpotFormModal  editForm={editForm}  />
<AddImagesFormModal />
<button  onClick={handleDelete}>Delete Spot</button>
</div>
</>
)}
```

```
 // Both props passed in determine which form should be rendered for the viewer.
const  SpotFormModal  = ({ editForm, newSpot }) => {
const [showModal, setShowModal] =  useState(false);
const [isNewForm, setIsNewForm] =  useState()
return (
<>
{newSpot  && (
<li>
<button  id='nav-button'  onClick={() => {
setIsNewForm(true)
setShowModal(true)
}}>Create a Spot</button>
</li>
)}

{editForm  && (
<button  onClick={() => {
setIsNewForm(false)
setShowModal(true)
}}>Edit Spot</button>
)}
```

[Original Design Docs](https://github.com/skimby/AirBnB/wiki/AirBnB-Clone-Original-Design-Doc)
