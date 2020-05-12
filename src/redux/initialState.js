import React from 'react';

import ToggleZoomOverlay from 'components/ToggleZoomOverlay';
import ToolsOverlay from 'components/ToolsOverlay';
import defaultTool from 'constants/defaultTool';

import core from 'core';
import getHashParams from 'helpers/getHashParams';
import { copyMapWithDataProperties } from 'constants/map';
import actions from 'actions';
import PageNavOverlay from '../components/PageNavOverlay/PageNavOverlay';

export default {
  viewer: {
    screen: 'desktop',
    activeTheme: 'light',
    disabledElements: {},
    openElements: {
      header: true,
      toolsHeader: true,
    },
    panelWidths: {
      leftPanel: 251,
      searchPanel: 293,
      notesPanel: 293,
    },
    headers: {
      default: [
        { type: 'toggleElementButton', img: 'icon-header-sidebar-line', activeImg: 'icon-header-sidebar-fill', element: 'leftPanel', dataElement: 'leftPanelButton', title: 'component.leftPanel' },
        { type: 'divider' },
        { type: 'toggleElementButton', img: 'icon-header-page manipulation-line', element: 'viewControlsOverlay', dataElement: 'viewControlsButton', title: 'component.viewControlsOverlay' },
        {
          type: 'customElement',
          render: () => <ToggleZoomOverlay />,
          dataElement: 'zoomOverlayButton',
          hidden: ['mobile'],
          element: 'zoomOverlay',
          style: {
            height: '100%',
          },
        },
        { type: 'divider', hidden: ['mobile', 'tablet'] },
        { type: 'toolButton', toolName: 'Pan', hidden: ['mobile', 'tablet'] },
        // For mobile
        { type: 'toolButton', toolName: 'TextSelect' },
        { type: 'toolButton', toolName: 'AnnotationEdit', hidden: ['tablet', 'mobile'] },
        { type: 'spacer' },
        { type: 'toggleElementButton', dataElement: 'toggleToolsButton', element: 'toolsHeader', img: 'icon-header-annotations-line', activeImg: 'icon-header-annotation-fill', title: 'component.toolsHeader' },
        { type: 'toggleElementButton', dataElement: 'searchButton', element: 'searchPanel', img: 'icon-header-search', title: 'component.searchPanel' },
        { type: 'toggleElementButton', dataElement: 'toggleNotesButton', element: 'notesPanel', img: 'icon-header-chat-line', activeImg: 'icon-header-chat-fill', title: 'component.notesPanel' },
        { type: 'toggleElementButton', dataElement: 'menuButton', element: 'menuOverlay', img: 'icon-header-settings-line', title: 'component.menuOverlay' },
        {
          type: 'customElement',
          render: () => <PageNavOverlay />,
          dataElement: 'pageNavOverlay',
        },
      ],
      // second header
      tools: {
        desktop: [
          { type: 'spacer' },
          { type: 'toolGroupButton', toolGroup: 'freeHandTools', dataElement: 'freeHandToolGroupButton', title: 'component.freehandToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'shapeTools', dataElement: 'shapeToolGroupButton', title: 'component.shapeToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'textTools', dataElement: 'textToolGroupButton', title: 'component.textToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'textTools2', dataElement: 'textToolGroupButton2', title: 'component.textToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'measurementTools', dataElement: 'measurementToolGroupButton', title: 'component.measurementToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'freeTextTools', dataElement: 'freeTextToolGroupButton', title: 'component.freeTextToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'stickyTools', dataElement: 'stickyToolGroupButton', title: 'component.stickyToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'signatureTools', img: 'icon-tool-signature', dataElement: 'signatureToolButton', title: 'component.miscToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'miscTools', img: 'icon-tools-more', dataElement: 'miscToolGroupButton', title: 'component.miscToolsButton' },
          {
            type: 'customElement',
            render: () => <ToolsOverlay />,
            dataElement: 'toolsOverlay',
          },
          { type: 'divider' },
          {
            type: 'actionButton',
            dataElement: 'undoButton',
            title: 'action.undo',
            img: 'icon-operation-undo',
            onClick: () => {
              core.undo();
            },
          },
          {
            type: 'actionButton',
            dataElement: 'redoButton',
            title: 'action.redo',
            img: 'icon-operation-redo',
            onClick: () => {
              core.redo();
            },
          },
          { type: 'toolButton', toolName: 'AnnotationEraserTool' },
          { type: 'spacer' },
        ],
        tablet: [
          { type: 'spacer' },
          { type: 'toolGroupButton', toolGroup: 'textTools', dataElement: 'textToolGroupButton', title: 'component.textToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'textTools2', dataElement: 'textToolGroupButton2', title: 'component.textToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'freeHandAndShapeTools', dataElement: 'freeHandToolGroupButton', title: 'component.freeHandAndShapeToolsButton', img: 'icon - tool - pen and shape - phone - line' },
          { type: 'toolGroupButton', toolGroup: 'measurementTools', dataElement: 'measurementToolGroupButton', title: 'component.measurementToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'freeTextTools', dataElement: 'freeTextToolGroupButton', title: 'component.freeTextToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'stickyTools', dataElement: 'stickyToolGroupButton', title: 'component.stickyToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'signatureTools', img: 'icon-tool-signature', dataElement: 'signatureToolButton', title: 'component.miscToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'miscTools', img: 'icon-tools-more', dataElement: 'miscToolGroupButton', title: 'component.miscToolsButton' },
          { type: 'divider' },
          {
            type: 'actionButton',
            dataElement: 'undoButton',
            title: 'action.undo',
            img: 'icon-operation-undo',
            onClick: () => {
              core.undo();
            },
          },
          {
            type: 'actionButton',
            dataElement: 'redoButton',
            title: 'action.redo',
            img: 'icon-operation-redo',
            onClick: () => {
              core.redo();
            },
          },
          { type: 'toolButton', toolName: 'AnnotationEraserTool' },
          { type: 'spacer' },
          {
            type: 'actionButton',
            dataElement: 'closeToolsButton',
            title: 'action.close',
            img: 'ic_close_black_24px',
            style: { position: 'absolute', right: 0 },
            onClick: dispatch => {
              dispatch(actions.closeElements(['toolsHeader', 'toolsOverlay']));
              core.setToolMode(defaultTool);
              dispatch(actions.setActiveToolGroup(''));
            },
          },
        ],
        mobile: [
          { type: 'toolGroupButton', toolGroup: 'textTools', dataElement: 'textToolGroupButton', title: 'component.textToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'freeHandTools', dataElement: 'freeHandToolGroupButton', title: 'component.freehandToolsButton', img: 'icon - tool - pen and shape - phone - line' },
          { type: 'toolGroupButton', toolGroup: 'freeTextTools', dataElement: 'freeTextToolGroupButton', title: 'component.freeTextToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'measurementTools', dataElement: 'measurementToolGroupButton', title: 'component.measurementToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'signatureTools', img: 'icon-tool-signature', dataElement: 'signatureToolButton', title: 'component.miscToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'miscTools', img: 'icon-tools-more', dataElement: 'miscToolGroupButton', title: 'component.miscToolsButton' },
          {
            type: 'actionButton',
            dataElement: 'closeToolsButton',
            title: 'action.close',
            img: 'ic_close_black_24px',
            style: { position: 'absolute', right: 0 },
            onClick: dispatch => {
              dispatch(actions.closeElements(['toolsHeader', 'toolsOverlay']));
              core.setToolMode(defaultTool);
              dispatch(actions.setActiveToolGroup(''));
            },
          },
        ],
      },
    },
    annotationPopup: [
      { dataElement: 'annotationCommentButton' },
      { dataElement: 'annotationStyleEditButton' },
      { dataElement: 'annotationRedactButton' },
      { dataElement: 'annotationCropButton' },
      { dataElement: 'annotationGroupButton' },
      { dataElement: 'annotationUngroupButton' },
      { dataElement: 'annotationDeleteButton' },
      { dataElement: 'calibrateButton' },
      { dataElement: 'linkButton' },
      { dataElement: 'fileAttachmentDownload' },
    ],
    textPopup: [
      { dataElement: 'copyTextButton' },
      { dataElement: 'textHighlightToolButton' },
      { dataElement: 'textUnderlineToolButton' },
      { dataElement: 'textSquigglyToolButton' },
      { dataElement: 'textStrikeoutToolButton' },
      { dataElement: 'textRedactToolButton' },
      { dataElement: 'linkButton' },
    ],
    contextMenuPopup: [
      { dataElement: 'panToolButton' },
      { dataElement: 'stickyToolButton' },
      { dataElement: 'highlightToolButton' },
      { dataElement: 'freeHandToolButton' },
      { dataElement: 'freeTextToolButton' },
    ],
    toolButtonObjects: {
      desktop: {
        AnnotationCreateDistanceMeasurement: { position: 0, dataElement: 'distanceMeasurementToolButton', title: 'annotation.distanceMeasurement', img: 'ic_annotation_distance_black_24px', group: 'measurementTools', showColor: 'active' },
        AnnotationCreatePerimeterMeasurement: { position: 1, dataElement: 'perimeterMeasurementToolButton', title: 'annotation.perimeterMeasurement', img: 'ic_annotation_perimeter_black_24px', group: 'measurementTools', showColor: 'active' },
        AnnotationCreateAreaMeasurement: { position: 2, dataElement: 'areaMeasurementToolButton', title: 'annotation.areaMeasurement', img: 'ic_annotation_area_black_24px', group: 'measurementTools', showColor: 'active' },
        AnnotationCreateEllipseMeasurement: { position: 3, dataElement: 'ellipseMeasurementToolButton', title: 'annotation.areaMeasurement', img: 'ic_annotation_ellipse_area_black', group: 'measurementTools', showColor: 'active' },
        [Tools.ToolNames.RECTANGULAR_AREA_MEASUREMENT]: { position: 4, dataElement: 'rectangularAreaMeasurementToolButton', title: 'annotation.areaMeasurement', img: 'ic_annotation_rectangular_area_black_24px', group: 'measurementTools', showColor: 'active' },
        AnnotationCreateFreeHand: { dataElement: 'freeHandToolButton', title: 'annotation.freehand', img: 'icon-tool-pen-line', group: 'freeHandTools', showColor: 'always' },
        AnnotationCreateFreeHand2: { dataElement: 'freeHandToolButton2', title: 'annotation.freehand2', img: 'icon-tool-pen-line', group: 'freeHandTools', showColor: 'always' },
        AnnotationCreateFreeHand3: { dataElement: 'freeHandToolButton3', title: 'annotation.freehand2', img: 'icon-tool-pen-line', group: 'freeHandTools', showColor: 'always' },
        AnnotationCreateFreeHand4: { dataElement: 'freeHandToolButton4', title: 'annotation.freehand2', img: 'icon-tool-pen-line', group: 'freeHandTools', showColor: 'always' },
        AnnotationCreateTextHighlight: { dataElement: 'highlightToolButton', title: 'annotation.highlight', img: 'icon-tool-text-manipulation-highlight', group: 'textTools', showColor: 'always' },
        AnnotationCreateTextHighlight2: { dataElement: 'highlightToolButton2', title: 'annotation.highlight2', img: 'icon-tool-text-manipulation-highlight', group: 'textTools', showColor: 'always' },
        AnnotationCreateTextHighlight3: { dataElement: 'highlightToolButton3', title: 'annotation.highlight2', img: 'icon-tool-text-manipulation-highlight', group: 'textTools', showColor: 'always' },
        AnnotationCreateTextHighlight4: { dataElement: 'highlightToolButton4', title: 'annotation.highlight2', img: 'icon-tool-text-manipulation-highlight', group: 'textTools', showColor: 'always' },
        AnnotationCreateTextUnderline: { dataElement: 'underlineToolButton', title: 'annotation.underline', img: 'icon-tool-text-manipulation-underline', group: 'textTools2', showColor: 'always' },
        AnnotationCreateTextUnderline2: { dataElement: 'underlineToolButton', title: 'annotation.underline', img: 'icon-tool-text-manipulation-underline', group: 'textTools2', showColor: 'always' },
        AnnotationCreateTextSquiggly: { dataElement: 'squigglyToolButton', title: 'annotation.squiggly', img: 'icon-tool-text-manipulation-squiggly', group: 'textTools2', showColor: 'always' },
        AnnotationCreateTextStrikeout: { dataElement: 'strikeoutToolButton', title: 'annotation.strikeout', img: 'icon-tool-text-manipulation-strikethrough', group: 'textTools2', showColor: 'always' },
        AnnotationCreateFreeText: { dataElement: 'freeTextToolButton', title: 'annotation.freetext2', img: 'icon-tool-text-free-text', group: 'freeTextTools', showColor: 'always' },
        AnnotationCreateFreeText2: { dataElement: 'freeTextToolButton2', title: 'annotation.freetext2', img: 'icon-tool-text-free-text', group: 'freeTextTools', showColor: 'always' },
        AnnotationCreateFreeText3: { dataElement: 'freeTextToolButton3', title: 'annotation.freetext2', img: 'icon-tool-text-free-text', group: 'freeTextTools', showColor: 'always' },
        AnnotationCreateCallout: { dataElement: 'calloutToolButton', title: 'annotation.callout', img: 'icon-tool-callout-line', group: 'freeTextTools', showColor: 'always' },
        AnnotationCreateSticky: { dataElement: 'sitckyToolButton', title: 'annotation.stickyNote', img: 'icon-tool-comment-line', group: 'stickyTools', showColor: 'always' },
        AnnotationCreateSticky2: { dataElement: 'sitckyToolButton2', title: 'annotation.stickyNote', img: 'icon-tool-comment-line', group: 'stickyTools', showColor: 'always' },
        AnnotationCreateSticky3: { dataElement: 'sitckyToolButton3', title: 'annotation.stickyNote', img: 'icon-tool-comment-line', group: 'stickyTools', showColor: 'always' },
        AnnotationCreateSticky4: { dataElement: 'sitckyToolButton4', title: 'annotation.stickyNote', img: 'icon-tool-comment-line', group: 'stickyTools', showColor: 'always' },
        AnnotationCreateRectangle: { position: 0, dataElement: 'rectangleToolButton', title: 'annotation.rectangle', img: 'icon-tool-shape-rectangle', group: 'shapeTools', showColor: 'always' },
        AnnotationCreateEllipse: { position: 1, dataElement: 'ellipseToolButton', title: 'annotation.ellipse', img: 'icon-tool-shape-oval', group: 'shapeTools', showColor: 'always' },
        AnnotationCreateLine: { position: 2, dataElement: 'lineToolButton', title: 'annotation.line', img: 'icon-tool-shape-line', group: 'shapeTools', showColor: 'always' },
        AnnotationCreatePolyline: { position: 3, dataElement: 'polylineToolButton', title: 'annotation.polyline', img: 'icon-tool-shape-polyline', group: 'shapeTools', showColor: 'always' },
        AnnotationCreatePolygon: { position: 4, dataElement: 'polygonToolButton', title: 'annotation.polygon', img: 'icon-tool-shape-polygon', group: 'shapeTools', showColor: 'always' },
        AnnotationCreatePolygonCloud: { position: 5, dataElement: 'cloudToolButton', title: 'annotation.polygonCloud', img: 'icon-tool-shape-cloud', group: 'shapeTools', showColor: 'always' },
        AnnotationCreateArrow: { position: 6, dataElement: 'arrowToolButton', title: 'annotation.arrow', img: 'icon-tool-shape-arrow', group: 'shapeTools', showColor: 'always' },
        AnnotationCreateSignature: { dataElement: 'signatureToolButton', title: 'annotation.signature', img: 'icon-tool-signature', group: 'signatureTools', showColor: 'active' },
        AnnotationCreateStamp: { dataElement: 'stampToolButton', title: 'annotation.stamp', img: 'icon-tool-image-line', group: 'miscTools', showColor: 'active' },
        AnnotationCreateRubberStamp: { dataElement: 'rubberStampToolButton', title: 'annotation.rubberStamp', img: 'icon-tool-stamp-line', group: 'miscTools', showColor: 'active' },
        CropPage: { dataElement: 'cropToolButton', title: 'annotation.crop', img: 'ic_crop_black_24px', showColor: 'never', group: 'miscTools' },
        AnnotationCreateRedaction: { dataElement: 'redactionButton', title: 'option.redaction.markForRedaction', img: 'icon-tool-redaction-inline', group: 'miscTools', showColor: 'never' },
        Pan: { dataElement: 'panToolButton', title: 'tool.pan', img: 'icon-header-pan', showColor: 'never' },
        AnnotationEdit: { dataElement: 'selectToolButton', title: 'tool.select', img: 'icon-header-select-line', showColor: 'never' },
        TextSelect: { dataElement: 'textSelectButton', img: 'icon - header - select - line', showColor: 'never' },
        MarqueeZoomTool: { dataElement: 'marqueeToolButton', showColor: 'never' },
        AnnotationEraserTool: { dataElement: 'eraserToolButton', title: 'annotation.eraser', img: 'icon-operation-eraser', showColor: 'never' },
      },
      tablet: {
        AnnotationCreateDistanceMeasurement: { position: 0, dataElement: 'distanceMeasurementToolButton', title: 'annotation.distanceMeasurement', img: 'ic_annotation_distance_black_24px', group: 'measurementTools', showColor: 'active' },
        AnnotationCreatePerimeterMeasurement: { position: 1, dataElement: 'perimeterMeasurementToolButton', title: 'annotation.perimeterMeasurement', img: 'ic_annotation_perimeter_black_24px', group: 'measurementTools', showColor: 'active' },
        AnnotationCreateAreaMeasurement: { position: 2, dataElement: 'areaMeasurementToolButton', title: 'annotation.areaMeasurement', img: 'ic_annotation_area_black_24px', group: 'measurementTools', showColor: 'active' },
        AnnotationCreateEllipseMeasurement: { position: 3, dataElement: 'ellipseMeasurementToolButton', title: 'annotation.areaMeasurement', img: 'ic_annotation_ellipse_area_black', group: 'measurementTools', showColor: 'active' },
        [Tools.ToolNames.RECTANGULAR_AREA_MEASUREMENT]: { position: 4, dataElement: 'rectangularAreaMeasurementToolButton', title: 'annotation.areaMeasurement', img: 'ic_annotation_rectangular_area_black_24px', group: 'measurementTools', showColor: 'active' },
        AnnotationCreateTextHighlight: { dataElement: 'highlightToolButton', title: 'annotation.highlight', img: 'icon-tool-text-manipulation-highlight', group: 'textTools', showColor: 'always' },
        AnnotationCreateTextHighlight2: { dataElement: 'highlightToolButton2', title: 'annotation.highlight2', img: 'icon-tool-text-manipulation-highlight', group: 'textTools', showColor: 'always' },
        AnnotationCreateTextHighlight3: { dataElement: 'highlightToolButton3', title: 'annotation.highlight2', img: 'icon-tool-text-manipulation-highlight', group: 'textTools', showColor: 'always' },
        AnnotationCreateTextHighlight4: { dataElement: 'highlightToolButton4', title: 'annotation.highlight2', img: 'icon-tool-text-manipulation-highlight', group: 'textTools', showColor: 'always' },
        AnnotationCreateTextUnderline: { dataElement: 'underlineToolButton', title: 'annotation.underline', img: 'icon-tool-text-manipulation-underline', group: 'textTools2', showColor: 'always' },
        AnnotationCreateTextUnderline2: { dataElement: 'underlineToolButton', title: 'annotation.underline', img: 'icon-tool-text-manipulation-underline', group: 'textTools2', showColor: 'always' },
        AnnotationCreateTextSquiggly: { dataElement: 'squigglyToolButton', title: 'annotation.squiggly', img: 'icon-tool-text-manipulation-squiggly', group: 'textTools2', showColor: 'always' },
        AnnotationCreateTextStrikeout: { dataElement: 'strikeoutToolButton', title: 'annotation.strikeout', img: 'icon-tool-text-manipulation-strikethrough', group: 'textTools2', showColor: 'always' },
        AnnotationCreateFreeText: { dataElement: 'freeTextToolButton', title: 'annotation.freetext2', img: 'icon-tool-text-free-text', group: 'freeTextTools', showColor: 'always' },
        AnnotationCreateFreeText2: { dataElement: 'freeTextToolButton2', title: 'annotation.freetext2', img: 'icon-tool-text-free-text', group: 'freeTextTools', showColor: 'always' },
        AnnotationCreateFreeText3: { dataElement: 'freeTextToolButton3', title: 'annotation.freetext2', img: 'icon-tool-text-free-text', group: 'freeTextTools', showColor: 'always' },
        AnnotationCreateFreeText4: { dataElement: 'freeTextToolButton4', title: 'annotation.freetext2', img: 'icon-tool-text-free-text', group: 'freeTextTools', showColor: 'always' },
        AnnotationCreateSticky: { dataElement: 'sitckyToolButton', title: 'annotation.stickyNote', img: 'icon-tool-comment-line', group: 'stickyTools', showColor: 'always' },
        AnnotationCreateSticky2: { dataElement: 'sitckyToolButton2', title: 'annotation.stickyNote', img: 'icon-tool-comment-line', group: 'stickyTools', showColor: 'always' },
        AnnotationCreateSticky3: { dataElement: 'sitckyToolButton3', title: 'annotation.stickyNote', img: 'icon-tool-comment-line', group: 'stickyTools', showColor: 'always' },
        AnnotationCreateSticky4: { dataElement: 'sitckyToolButton4', title: 'annotation.stickyNote', img: 'icon-tool-comment-line', group: 'stickyTools', showColor: 'always' },
        AnnotationCreateFreeHand2: { position: 0, dataElement: 'freeHandToolButton2', title: 'annotation.freehand2', img: 'icon-tool-pen-line', group: 'freeHandAndShapeTools', showColor: 'always' },
        AnnotationCreateRectangle: { position: 1, dataElement: 'rectangleToolButton', title: 'annotation.rectangle', img: 'icon-tool-shape-rectangle', group: 'freeHandAndShapeTools', showColor: 'always' },
        AnnotationCreateEllipse: { position: 2, dataElement: 'ellipseToolButton', title: 'annotation.ellipse', img: 'icon-tool-shape-oval', group: 'freeHandAndShapeTools', showColor: 'always' },
        AnnotationCreateLine: { position: 3, dataElement: 'lineToolButton', title: 'annotation.line', img: 'icon-tool-shape-line', group: 'freeHandAndShapeTools', showColor: 'always' },
        AnnotationCreatePolyline: { position: 4, dataElement: 'polylineToolButton', title: 'annotation.polyline', img: 'icon-tool-shape-polyline', group: 'freeHandAndShapeTools', showColor: 'always' },
        AnnotationCreatePolygon: { position: 5, dataElement: 'polygonToolButton', title: 'annotation.polygon', img: 'icon-tool-shape-polygon', group: 'freeHandAndShapeTools', showColor: 'always' },
        AnnotationCreatePolygonCloud: { position: 6, dataElement: 'cloudToolButton', title: 'annotation.polygonCloud', img: 'icon-tool-shape-cloud', group: 'freeHandAndShapeTools', showColor: 'always' },
        AnnotationCreateArrow: { position: 7, dataElement: 'arrowToolButton', title: 'annotation.arrow', img: 'icon-tool-shape-arrow', group: 'freeHandAndShapeTools', showColor: 'always' },
        AnnotationCreateSignature: { dataElement: 'signatureToolButton', title: 'annotation.signature', img: 'icon-tool-signature', group: 'signatureTools', showColor: 'active' },
        AnnotationCreateStamp: { dataElement: 'stampToolButton', title: 'annotation.stamp', img: 'icon-tool-image-line', group: 'miscTools', showColor: 'active' },
        AnnotationCreateRubberStamp: { dataElement: 'rubberStampToolButton', title: 'annotation.rubberStamp', img: 'icon-tool-stamp-line', group: 'miscTools', showColor: 'active' },
        CropPage: { dataElement: 'cropToolButton', title: 'annotation.crop', img: 'ic_crop_black_24px', showColor: 'never', group: 'miscTools' },
        AnnotationCreateRedaction: { dataElement: 'redactionButton', title: 'option.redaction.markForRedaction', img: 'icon-tool-redaction-inline', group: 'miscTools', showColor: 'never' },
        Pan: { dataElement: 'panToolButton', title: 'tool.pan', img: 'icon-header-pan', showColor: 'never' },
        AnnotationEdit: { dataElement: 'selectToolButton', title: 'tool.select', img: 'icon-header-select-line', showColor: 'never' },
        TextSelect: { dataElement: 'textSelectButton', img: 'icon - header - select - line', showColor: 'never' },
        MarqueeZoomTool: { dataElement: 'marqueeToolButton', showColor: 'never' },
        AnnotationEraserTool: { dataElement: 'eraserToolButton', title: 'annotation.eraser', img: 'icon-operation-eraser', showColor: 'never' },
      },
      mobile: {
        AnnotationCreateDistanceMeasurement: { position: 0, dataElement: 'distanceMeasurementToolButton', title: 'annotation.distanceMeasurement', img: 'ic_annotation_distance_black_24px', group: 'measurementTools', showColor: 'active' },
        AnnotationCreatePerimeterMeasurement: { position: 1, dataElement: 'perimeterMeasurementToolButton', title: 'annotation.perimeterMeasurement', img: 'ic_annotation_perimeter_black_24px', group: 'measurementTools', showColor: 'active' },
        AnnotationCreateAreaMeasurement: { position: 2, dataElement: 'areaMeasurementToolButton', title: 'annotation.areaMeasurement', img: 'ic_annotation_area_black_24px', group: 'measurementTools', showColor: 'active' },
        AnnotationCreateEllipseMeasurement: { position: 3, dataElement: 'ellipseMeasurementToolButton', title: 'annotation.areaMeasurement', img: 'ic_annotation_ellipse_area_black', group: 'measurementTools', showColor: 'active' },
        [Tools.ToolNames.RECTANGULAR_AREA_MEASUREMENT]: { position: 4, dataElement: 'rectangularAreaMeasurementToolButton', title: 'annotation.areaMeasurement', img: 'ic_annotation_rectangular_area_black_24px', group: 'measurementTools', showColor: 'active' },
        AnnotationCreateTextHighlight: { dataElement: 'highlightToolButton', title: 'annotation.highlight', img: 'icon-tool-text-manipulation-highlight', group: 'textTools', showColor: 'always' },
        AnnotationCreateTextUnderline: { dataElement: 'underlineToolButton', title: 'annotation.underline', img: 'icon-tool-text-manipulation-underline', group: 'textTools', showColor: 'always' },
        AnnotationCreateTextSquiggly: { dataElement: 'squigglyToolButton', title: 'annotation.squiggly', img: 'icon-tool-text-manipulation-squiggly', group: 'textTools', showColor: 'always' },
        AnnotationCreateTextStrikeout: { dataElement: 'strikeoutToolButton', title: 'annotation.strikeout', img: 'icon-tool-text-manipulation-strikethrough', group: 'textTools', showColor: 'always' },
        AnnotationCreateFreeText: { dataElement: 'freeTextToolButton', title: 'annotation.freetext2', img: 'icon-tool-text-free-text', group: 'freeTextTools', showColor: 'always' },
        AnnotationCreateFreeText2: { dataElement: 'freeTextToolButton2', title: 'annotation.freetext2', img: 'icon-tool-text-free-text', group: 'freeTextTools', showColor: 'always' },
        AnnotationCreateFreeText3: { dataElement: 'freeTextToolButton3', title: 'annotation.freetext2', img: 'icon-tool-text-free-text', group: 'freeTextTools', showColor: 'always' },
        AnnotationCreateSticky: { dataElement: 'sitckyToolButton', title: 'annotation.stickyNote', img: 'icon-tool-comment-line', group: 'freeTextTools', showColor: 'always' },
        AnnotationCreateFreeHand2: { position: 0, dataElement: 'freeHandToolButton2', title: 'annotation.freehand2', img: 'icon-tool-pen-line', group: 'freeHandTools', showColor: 'always' },
        AnnotationCreateRectangle: { position: 1, dataElement: 'rectangleToolButton', title: 'annotation.rectangle', img: 'icon-tool-shape-rectangle', group: 'freeHandTools', showColor: 'always' },
        AnnotationCreateEllipse: { position: 2, dataElement: 'ellipseToolButton', title: 'annotation.ellipse', img: 'icon-tool-shape-oval', group: 'freeHandTools', showColor: 'always' },
        AnnotationCreateLine: { position: 3, dataElement: 'lineToolButton', title: 'annotation.line', img: 'icon-tool-shape-line', group: 'freeHandTools', showColor: 'always' },
        AnnotationCreatePolyline: { position: 4, dataElement: 'polylineToolButton', title: 'annotation.polyline', img: 'icon-tool-shape-polyline', group: 'freeHandTools', showColor: 'always' },
        AnnotationCreatePolygon: { position: 5, dataElement: 'polygonToolButton', title: 'annotation.polygon', img: 'icon-tool-shape-polygon', group: 'freeHandTools', showColor: 'always' },
        AnnotationCreatePolygonCloud: { position: 6, dataElement: 'cloudToolButton', title: 'annotation.polygonCloud', img: 'icon-tool-shape-cloud', group: 'freeHandTools', showColor: 'always' },
        AnnotationCreateArrow: { position: 7, dataElement: 'arrowToolButton', title: 'annotation.arrow', img: 'icon-tool-shape-arrow', group: 'freeHandTools', showColor: 'always' },
        AnnotationCreateSignature: { dataElement: 'signatureToolButton', title: 'annotation.signature', img: 'icon-tool-signature', group: 'signatureTools', showColor: 'active' },
        AnnotationCreateStamp: { dataElement: 'stampToolButton', title: 'annotation.stamp', img: 'icon-tool-image-line', group: 'miscTools', showColor: 'active' },
        AnnotationCreateRubberStamp: { dataElement: 'rubberStampToolButton', title: 'annotation.rubberStamp', img: 'icon-tool-stamp-line', group: 'miscTools', showColor: 'active' },
        CropPage: { dataElement: 'cropToolButton', title: 'annotation.crop', img: 'ic_crop_black_24px', showColor: 'never', group: 'miscTools' },
        AnnotationCreateRedaction: { dataElement: 'redactionButton', title: 'option.redaction.markForRedaction', img: 'icon-tool-redaction-inline', group: 'miscTools', showColor: 'never' },
        Pan: { dataElement: 'panToolButton', title: 'tool.pan', img: 'icon-header-pan', showColor: 'never' },
        AnnotationEdit: { dataElement: 'selectToolButton', title: 'tool.select', img: 'icon-header-select-line', showColor: 'never' },
        TextSelect: { dataElement: 'textSelectButton', img: 'icon - header - select - line', showColor: 'never' },
        MarqueeZoomTool: { dataElement: 'marqueeToolButton', showColor: 'never' },
        AnnotationEraserTool: { dataElement: 'eraserToolButton', title: 'annotation.eraser', img: 'icon-operation-eraser', showColor: 'never' },
      },
    },
    tab: {
      signatureModal: 'inkSignaturePanelButton',
      linkModal: 'URLPanelButton',
    },
    customElementOverrides: {},
    activeHeaderGroup: 'default',
    activeToolName: 'AnnotationEdit',
    activeToolStyles: {},
    activeLeftPanel: 'thumbnailsPanel',
    activeToolGroup: '',
    notePopupId: '',
    isNoteEditing: false,
    fitMode: '',
    zoom: 1,
    rotation: 0,
    displayMode: 'Single',
    currentPage: 1,
    sortStrategy: 'position',
    isFullScreen: false,
    isMultipleViewerMerging: false,
    isThumbnailMerging: true,
    isThumbnailReordering: true,
    isThumbnailMultiselect: false,
    allowPageNavigation: true,
    doesAutoLoad: getHashParams('auto_load', true),
    isReadOnly: getHashParams('readonly', false),
    customPanels: [],
    useEmbeddedPrint: false,
    pageLabels: [],
    selectedThumbnailPageIndexes: [],
    noteDateFormat: 'MMM D, h:mma',
    colorMap: copyMapWithDataProperties('currentPalette', 'iconColor'),
    warning: {},
    customNoteFilter: null,
    zoomList: [0.1, 0.25, 0.5, 1, 1.25, 1.5, 2, 4, 8, 16, 64],
    isAccessibleMode: getHashParams('accessibleMode', false),
    measurementUnits: {
      from: ['in', 'mm', 'cm', 'pt'],
      to: ['in', 'mm', 'cm', 'pt', 'ft', 'm', 'yd', 'km', 'mi'],
    },
    maxSignaturesCount: 2,
    signatureFonts: ['GreatVibes-Regular'],
    isReplyDisabledFunc: null,
    userData: [],
    customMeasurementOverlay: [],
    noteTransformFunction: null,
    savedSignatures: [],
    selectedSignatureIndex: 0,
  },
  search: {
    listeners: [],
    value: '',
    isCaseSensitive: false,
    isWholeWord: false,
    isWildcard: false,
    isRegex: false,
    isSearchUp: false,
    isAmbientString: false,
    activeResult: null,
    activeResultIndex: -1,
    results: [],
    isSearching: false,
    noResult: false,
    isProgrammaticSearch: false,
    isProgrammaticSearchFull: false,
  },
  document: {
    totalPages: 0,
    outlines: [],
    bookmarks: {},
    layers: [],
    printQuality: 1,
    passwordAttempts: -1,
    loadingProgress: 0,
  },
  user: {
    name: getHashParams('user', 'Guest'),
    isAdmin: getHashParams('admin', false),
  },
  advanced: {
    customCSS: getHashParams('css', null),
    defaultDisabledElements: getHashParams('disabledElements', ''),
    fullAPI: getHashParams('pdfnet', false),
    preloadWorker: getHashParams('preloadWorker', false),
    serverUrl: getHashParams('server_url', ''),
    serverUrlHeaders: JSON.parse(getHashParams('serverUrlHeaders', '{}')),
    useSharedWorker: getHashParams('useSharedWorker', false),
    disableI18n: getHashParams('disableI18n', false),
    pdfWorkerTransportPromise: null,
    officeWorkerTransportPromise: null
  },
};
