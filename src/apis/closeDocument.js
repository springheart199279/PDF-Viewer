/**
 * Closes the document that's currently opened.
 * @method CoreControls.ReaderControl#closeDocument
 * @return {Promise} A promise resolved after document is closed.
 * @example viewerElement.addEventListener('ready', () => {
  const instance = viewer.getInstance();
  instance.closeDocument().then(() => {
    console.log('Document is closed');
  });
});
 */

import core from 'core';

export default ({ dispatch }) => () => core.closeDocument(dispatch);