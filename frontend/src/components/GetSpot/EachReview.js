
const EachReview = ({ review }) => {
    const dateMonth = new Date(review.createdAt).getMonth();
    const dateDay = new Date(review.createdAt).getDay();
    const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <>
            <div className="user-info">
                <h3>{review.User.firstName}</h3>
                <h4>{monthArr[dateMonth]} {dateDay}</h4>
            </div>
            <div className="review">
                <p>{review.review}</p>
            </div>
        </>
    )
}
export default EachReview;
