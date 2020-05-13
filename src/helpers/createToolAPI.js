import hotkeys from 'src/apis/hotkeys';
import { PRIORITY_TWO } from 'constants/actionPriority';
import getAnnotationCreateToolNames from 'helpers/getAnnotationCreateToolNames';
import actions from 'actions';
import selectors from 'selectors';

// a higher older function that creates the enableTools and disableTools APIs
export default (enable, store) => (
  toolNames = getAnnotationCreateToolNames(),
) => {
  const map = {
    AnnotationCreateTextUnderline: 'textUnderlineToolButton',
    AnnotationCreateTextHighlight: 'textHighlightToolButton',
    AnnotationCreateTextSquiggly: 'textSquigglyToolButton',
    AnnotationCreateTextStrikeout: 'textStrikeoutToolButton',
  };

  console.log('toolNames', toolNames);

  const toolNameArray = typeof toolNames === 'string' ? [toolNames] : toolNames;
  const dataElements = selectors.getToolButtonDataElements(
    store.getState(),
    toolNameArray,
  );

  // for the tool names in the map, enable/disable other related buttons
  Object.keys(map).forEach(toolName => {
    if (toolNameArray.indexOf(toolName) !== -1) {
      dataElements.push(map[toolName]);
    }
  });

  if (enable) {
    toolNameArray.forEach(toolName => {
      hotkeys.on(toolName);
    });

    store.dispatch(actions.enableElements(dataElements, PRIORITY_TWO));
  } else {
    toolNameArray.forEach(toolName => {
      hotkeys.off(toolName);
    });

    store.dispatch(actions.disableElements(dataElements, PRIORITY_TWO));
  }
};
