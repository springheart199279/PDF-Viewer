import actions from 'actions';

/**
 * Disable clearing search results when user closes search panel. When disabled, search results are kept even if user
 * closes and reopens search panel.
 *
 * Note, mobile devices never clear search results even if this setting is enabled. This is because the panel needs to be closed to view the search results on the document.
 * @method UI.disableClearSearchOnPanelClose
 * @example
 WebViewer(...)
 .then(function(instance) {
    instance.UI.disableClearSearchOnPanelClose();
  });
 */
const disableClearSearchOnPanelCloseClosure = (store) => () => {
  store.dispatch(actions.setClearSearchOnPanelClose(false));
};

export default disableClearSearchOnPanelCloseClosure;
