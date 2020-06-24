import React from "react";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview.component";
import "./ShopPage.styles.scss";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    <CollectionsOverview />
  </div>
);

export default ShopPage;
