import { LOW_PRIORITY } from 'constants/actionPriority';
import actions from 'actions';

export default store => (enable = true) =>  {
  if (enable) {
    store.dispatch(actions.enableElements(['annotationCommentButton', 'notesPanelButton', 'notesPanel'], LOW_PRIORITY));
    store.dispatch(actions.setActiveLeftPanel('notesPanel'));
  } else {
    store.dispatch(actions.disableElements(['annotationCommentButton', 'notesPanelButton', 'notesPanel'], LOW_PRIORITY));
    store.dispatch(actions.setActiveLeftPanel('thumbnailsPanel'));
  }
};