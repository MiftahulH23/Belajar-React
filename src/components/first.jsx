import { useNavigate } from "react-router-dom"
const First = () => {
    const navigate = useNavigate();
    return(
        <div>
            <h3>Hompage router</h3>
            <button onClick={() => navigate('/about')}>about</button>
        </div>
    )
}

export default First