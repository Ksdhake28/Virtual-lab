import React from "react";
import { useNavigate } from "react-router-dom";
import './css/AssignmentList.css'

function AssignmentListCard({ id, aim }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/practical/${id}`);
    };

    return (
        <div className="Card">
            <div className="Box" onClick={handleClick}>
                <h3>Assignmet: {id}</h3>
                <p>{aim}</p>
            </div>
        </div>
    );
}

export default AssignmentListCard;