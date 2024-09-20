import React, { useContext, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../utils_redux/cartSlice";
import { addPrice, subPrice } from "../utils_redux/priceSlice";

const CartComponent = ({ price }) => {
  let [cartVal, setCartVal] = useState(0);

const [total,setTotalPrice] = useState(0)
const [cartValue,updateCartVal] = useState(0)
const dispatch = useDispatch()

  return (
    <>
      {/* <p>Cart - {price}</p> */}
      <div className="cart">
        <h6
          className="cartItem"
          title="Add Item"
          onClick={() =>{
            setTotalPrice(total + price);
            setCartVal(cartVal + 1);
            updateCartVal(cartValue + 1);
            console.log("after +", total);
            dispatch(increment())
            dispatch(addPrice(price))
        }
          }
        >
          <AddIcon />
        </h6>
        <h6 className="cartValue">{cartVal}</h6>
        <h6
          className="cartItem"
          title="Remove Item"
          onClick={() => {
            if (cartVal > 0) {
                setTotalPrice(total - price);
                setCartVal(cartVal - 1);
                updateCartVal(cartValue - 1);
                console.log("after -", total);
                dispatch(decrement())
                dispatch(subPrice(price))
            }
            // cartVal>0?setCartVal(cartVal-1):setCartVal(0)
          }}
        >
          <RemoveIcon />
        </h6>
      </div>
    </>
  );
};

export default CartComponent;