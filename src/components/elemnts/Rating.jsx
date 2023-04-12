import ReactStars from 'react-stars'
export const Rating = ({ rating, setRating }) => {
    return <ReactStars count={5} value={rating} size={24} edit={setRating ? true : false} />
}
