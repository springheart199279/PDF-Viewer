import React from 'react'
import { useSelector, shallowEqual } from 'react-redux';
import PageManipulationOverlay from './PageManipulationOverlay';
import FlyoutMenu from '../FlyoutMenu/FlyoutMenu';
import selectors from 'selectors';

function PageManipulationOverlayContainer() {

  const [
    selectedPageIndexes,
    currentPage,
    pageManipulationOverlayItems,
  ] = useSelector(state => [
    selectors.getSelectedThumbnailPageIndexes(state),
    selectors.getCurrentPage(state),
    selectors.getPageManipulationOverlayItems(state),
  ], shallowEqual);


  // If we start drilling this prop, maybe create a context
  const selectedPageNumbers = selectedPageIndexes.map(index => index + 1);
  const pageNumbers = selectedPageNumbers.length > 0 ? selectedPageNumbers : [currentPage];

  return (
    <FlyoutMenu menu='pageManipulationOverlay' trigger="pageManipulationOverlayButton" onClose={undefined}>
      <PageManipulationOverlay
        pageNumbers={pageNumbers}
        pageManipulationOverlayItems={pageManipulationOverlayItems}
      />
    </ FlyoutMenu>
  )
}

export default PageManipulationOverlayContainer;