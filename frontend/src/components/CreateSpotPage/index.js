import SpotForm from "../SpotForm"

const CreateSpotPage = ({ isLoaded }) => {

    return (
        <>
            {/* do i need the isLoaded?  */}
            {isLoaded && (
                <SpotForm />
            )}
        </>
    )
}
export default CreateSpotPage;
