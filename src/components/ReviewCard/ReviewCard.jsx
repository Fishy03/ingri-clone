import "./ReviewCard.css";

function ReviewCard({name, review, rating}){
    return(
        <div className="review-card">
            <p className="review-text">"{review}"</p>
            <div className="review-rating">{"⭐".repeat(rating)}</div>
            <h4 className="review-name">{name}</h4>
        </div>
    );
}

export default ReviewCard;