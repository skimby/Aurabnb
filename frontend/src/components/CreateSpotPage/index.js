import SpotForm from "../SpotForm"
import { useHistory, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";


const CreateSpotPage = () => {
    const user = useSelector(state => state.session.user);


    return (
        <>
            <SpotForm />
        </>
    )
}
export default CreateSpotPage;
