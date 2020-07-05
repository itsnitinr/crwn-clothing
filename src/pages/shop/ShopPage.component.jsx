import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCollectionIsFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/WithSpinner.component";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview.component";
import CollectionPage from "../collection/CollectionPage.component";
import "./ShopPage.styles.scss";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isFetchingCollections, isCollectionsLoaded } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isFetchingCollections}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionsLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetchingCollections: selectCollectionIsFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

export default connect(mapStateToProps, { fetchCollectionsStartAsync })(
  ShopPage
);
