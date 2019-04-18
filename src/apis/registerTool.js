/**
 * Registers tool in the document viewer tool mode map, and adds a button object to be used in the header. See <a href='https://www.pdftron.com/documentation/web/guides/customizing-tools' target='_blank'>Customizing tools</a> to learn how to make a tool.
 * @method WebViewer#registerTool
 * @param {object} properties Tool properties.
 * @param {string} properties.toolName Name of the tool.
 * @param {Tools} properties.toolObject Instance of the tool.
 * @param {string} properties.buttonImage Path to an image or base64 data for the tool button.
 * @param {string} [properties.buttonName] Name of the tool button that will be used in data-element.
 * @param {string} [properties.buttonGroup] Group of the tool button belongs to.
 * @param {string} [properties.tooltip] Tooltip of the tool button.
 * @param {function} [annotationConstructor] The constructor function for the annotation that will be created by the registered tool.
 * @example const viewerElement = document.getElementById('viewer');
const instance = await WebViewer({ ... }, viewerElement);

instance.registerTool({
  toolName: 'MyTool',
  toolObject: myCustomTool,
  buttonImage: 'path/to/image',
  buttonName: 'myToolButton',
  buttonGroup: 'miscTools',
  tooltip: 'MyTooltip'
}, myCustomAnnotation);
 */

import core from 'core';
import { register, copyMapWithDataProperties } from 'constants/map';
import actions from 'actions';

export default store => (tool, annotationConstructor) => {
  registerToolInToolModeMap(tool);
  registerToolInRedux(store, tool);
  register(tool, annotationConstructor);
  updateColorMapInRedux(store);
};

const registerToolInRedux = (store, tool) => {
  store.dispatch(actions.registerTool(tool));
};

const registerToolInToolModeMap = ({ toolObject, toolName }) => {
  const toolModeMap = core.getToolModeMap();

  toolModeMap[toolName] = toolObject;
  toolModeMap[toolName].name = toolName;
};

const updateColorMapInRedux = store => {
  store.dispatch(actions.setColorMap(copyMapWithDataProperties('iconColor', 'currentPalette')));
};
