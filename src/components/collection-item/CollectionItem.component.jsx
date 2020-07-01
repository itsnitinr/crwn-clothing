import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cart.actions";
import {
  CollectionItemContainer,
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
} from "./CollectionItem.styles";

const CollectionItem = ({ item, addToCart }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer className="collection-item">
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer className="collection-footer">
        <NameContainer className="name">{name}</NameContainer>
        <PriceContainer className="price">{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addToCart(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
