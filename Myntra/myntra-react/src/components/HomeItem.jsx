import { PropTypes } from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/BagSlice";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const itemFound = bagItems.indexOf(item.id) >= 0;
  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemoveFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id))
  };
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {itemFound ? (
          <button
            className="btn btn-danger btn-add-bag"
            onClick={handleRemoveFromBag}
          >
            🗑️ Remove{" "}
          </button>
        ) : (
          <button className="btn-add-bag" onClick={handleAddToBag}>
            ➕ Add to Bag{" "}
          </button>
        )}
      </div>
    </>
  );
};

HomeItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default HomeItem;
