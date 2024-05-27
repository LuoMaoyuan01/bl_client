// Import styling files
import './homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported


// Import required components
import HomePageSearchBtn from "../../components/ui/buttons/homePageSearchBtn";

// Import required library and functions
import { useNavigate } from 'react-router-dom';


function HomePage() {

    const navigate = useNavigate();


    const handleSearchBtnSubmit = (inputValue) => {navigate(`/googlemaps/${inputValue}`)}

    return(
        <div>
            <HomePageSearchBtn handleSubmit={handleSearchBtnSubmit}/>
        </div>
    )
}

export default HomePage;