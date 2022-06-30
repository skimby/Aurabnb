import SpotForm from "../SpotForm"
import { useHistory, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import GetSpot from "../GetSpot";

const CreateSpotPage = () => {
    const user = useSelector(state => state.session.user);
    const history = useHistory();

    //if someone find url, it redirects them to home
    //redirect on actual page, not app.js
    if (!user) {
        history.push('/');
    }

    return (
        <>
            <SpotForm />
        </>
    )
}
export default CreateSpotPage;
