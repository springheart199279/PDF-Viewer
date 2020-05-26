import React from 'react';

import ToggleZoomOverlay from 'components/ToggleZoomOverlay';
import ToolsOverlay from 'components/ToolsOverlay';
import defaultTool from 'constants/defaultTool';

import core from 'core';
import getHashParams from 'helpers/getHashParams';
import { copyMapWithDataProperties } from 'constants/map';
import actions from 'actions';
import PageNavOverlay from 'components/PageNavOverlay';
import Ribbons from 'components/Ribbons';

export default {
  viewer: {
    screen: 'Annotate',
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
        { type: 'toggleElementButton', img: 'icon-header-sidebar-line', element: 'leftPanel', dataElement: 'leftPanelButton', title: 'component.leftPanel' },
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
        {
          type: 'customElement',
          render: () => <Ribbons />,
          dataElement: 'ribbons',
          className: 'custom-ribbons-container',
        },
        { type: 'spacer' },
        { type: 'toggleElementButton', dataElement: 'searchButton', element: 'searchPanel', img: 'icon-header-search', title: 'component.searchPanel' },
        { type: 'toggleElementButton', dataElement: 'toggleNotesButton', element: 'notesPanel', img: 'icon-header-chat-line', title: 'component.notesPanel' },
        { type: 'toggleElementButton', dataElement: 'menuButton', element: 'menuOverlay', img: 'icon-header-settings-line', title: 'component.menuOverlay' },
        {
          type: 'customElement',
          render: () => <PageNavOverlay />,
          dataElement: 'pageNavOverlay',
        },

      ],
      // second header
      tools: {
        View: [
          // { type: 'toolButton', toolName: 'AnnotationEraserTool' },
        ],
        Annotate: [
          { type: 'spacer' },
          { type: 'toolGroupButton', toolGroup: 'textTools', dataElement: 'textToolGroupButton', title: 'component.textToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'underlineTools', dataElement: 'underlineToolGroupButton', title: 'component.textToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'strikeoutTools', dataElement: 'strikeoutToolGroupButton', title: 'component.textToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'squigglyTools', dataElement: 'squigglyToolGroupButton', title: 'component.textToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'measurementTools', dataElement: 'measurementToolGroupButton', title: 'component.measurementToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'stickyTools', dataElement: 'stickyToolGroupButton', title: 'component.stickyToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'freeTextTools', dataElement: 'freeTextToolGroupButton', title: 'component.freeTextToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'calloutTools', dataElement: 'calloutToolGroupButton', title: 'component.freeTextToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'freeHandTools', dataElement: 'freeHandToolGroupButton', title: 'component.freehandToolsButton' },
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
        Draw: [
          { type: 'spacer' },
          { type: 'toolGroupButton', toolGroup: 'freeHandTools', dataElement: 'freeHandToolGroupButton', title: 'component.freehandToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'shapeTools', dataElement: 'shapeToolGroupButton', title: 'component.shapeToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'ellipseTools', dataElement: 'ellipseToolGroupButton', title: 'component.shapeToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'lineTools', dataElement: 'lineToolGroupButton', title: 'component.shapeToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'polyLineTools', dataElement: 'polyLineToolGroupButton', title: 'component.shapeToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'arrowTools', dataElement: 'arrowToolGroupButton', title: 'component.shapeToolsButton' },
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
        'Fill&Sign': [
          { type: 'spacer' },
          { type: 'toolGroupButton', toolGroup: 'signatureTools', img: 'icon-tool-signature', dataElement: 'signatureToolButton', title: 'component.signatureToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'stampTools', img: 'icon-tool-image-line', dataElement: 'stampToolButton', title: 'component.signatureToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'rubberStampTools', img: 'icon-tool-stamp-line', dataElement: 'rubberStampToolButton', title: 'component.signatureToolsButton' },
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
        Measure: [
          { type: 'spacer' },
          { type: 'toolGroupButton', toolGroup: 'distanceTools', dataElement: 'distanceToolGroupButton', title: 'component.measurementToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'perimeterTools', dataElement: 'perimeterToolGroupButton', title: 'component.measurementToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'areaTools', dataElement: 'areaToolGroupButton', title: 'component.measurementToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'ellipseAreaTools', dataElement: 'ellipseAreaToolGroupButton', title: 'component.measurementToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'rectangleAreaTools', dataElement: 'rectangleAreaToolGroupButton', title: 'component.measurementToolsButton' },
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
        Edit: [
          { type: 'spacer' },
          { type: 'toolGroupButton', toolGroup: 'cropTools', dataElement: 'cropToolGroupButton', title: 'component.measurementToolsButton' },
          { type: 'toolGroupButton', toolGroup: 'redactionTools', dataElement: 'redactionToolGroupButton', title: 'component.measurementToolsButton', showColor: 'never' },
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
      default: {
        AnnotationCreateDistanceMeasurement: { dataElement: 'distanceMeasurementToolButton', title: 'annotation.distanceMeasurement', img: 'ic_annotation_distance_black_24px', group: 'distanceTools', showColor: 'always' },
        AnnotationCreateDistanceMeasurement2: { dataElement: 'distanceMeasurementToolButton2', title: 'annotation.distanceMeasurement', img: 'ic_annotation_distance_black_24px', group: 'distanceTools', showColor: 'always' },
        AnnotationCreateDistanceMeasurement3: { dataElement: 'distanceMeasurementToolButton3', title: 'annotation.distanceMeasurement', img: 'ic_annotation_distance_black_24px', group: 'distanceTools', showColor: 'always' },
        AnnotationCreateDistanceMeasurement4: { dataElement: 'distanceMeasurementToolButton4', title: 'annotation.distanceMeasurement', img: 'ic_annotation_distance_black_24px', group: 'distanceTools', showColor: 'always' },
        AnnotationCreatePerimeterMeasurement: { dataElement: 'perimeterMeasurementToolButton', title: 'annotation.perimeterMeasurement', img: 'ic_annotation_perimeter_black_24px', group: 'perimeterTools', showColor: 'always' },
        AnnotationCreatePerimeterMeasurement2: { dataElement: 'perimeterMeasurementToolButton2', title: 'annotation.perimeterMeasurement', img: 'ic_annotation_perimeter_black_24px', group: 'perimeterTools', showColor: 'always' },
        AnnotationCreatePerimeterMeasurement3: { dataElement: 'perimeterMeasurementToolButton3', title: 'annotation.perimeterMeasurement', img: 'ic_annotation_perimeter_black_24px', group: 'perimeterTools', showColor: 'always' },
        AnnotationCreatePerimeterMeasurement4: { dataElement: 'perimeterMeasurementToolButton4', title: 'annotation.perimeterMeasurement', img: 'ic_annotation_perimeter_black_24px', group: 'perimeterTools', showColor: 'always' },
        AnnotationCreateAreaMeasurement: { dataElement: 'areaMeasurementToolButton', title: 'annotation.areaMeasurement', img: 'ic_annotation_area_black_24px', group: 'areaTools', showColor: 'always' },
        AnnotationCreateAreaMeasurement2: { dataElement: 'areaMeasurementToolButton2', title: 'annotation.areaMeasurement', img: 'ic_annotation_area_black_24px', group: 'areaTools', showColor: 'always' },
        AnnotationCreateAreaMeasurement3: { dataElement: 'areaMeasurementToolButton3', title: 'annotation.areaMeasurement', img: 'ic_annotation_area_black_24px', group: 'areaTools', showColor: 'always' },
        AnnotationCreateAreaMeasurement4: { dataElement: 'areaMeasurementToolButton4', title: 'annotation.areaMeasurement', img: 'ic_annotation_area_black_24px', group: 'areaTools', showColor: 'always' },
        AnnotationCreateEllipseMeasurement: { dataElement: 'ellipseMeasurementToolButton', title: 'annotation.areaMeasurement', img: 'ic_annotation_ellipse_area_black', group: 'ellipseAreaTools', showColor: 'always' },
        AnnotationCreateEllipseMeasurement2: { dataElement: 'ellipseMeasurementToolButton2', title: 'annotation.areaMeasurement', img: 'ic_annotation_ellipse_area_black', group: 'ellipseAreaTools', showColor: 'always' },
        AnnotationCreateEllipseMeasurement3: { dataElement: 'ellipseMeasurementToolButton3', title: 'annotation.areaMeasurement', img: 'ic_annotation_ellipse_area_black', group: 'ellipseAreaTools', showColor: 'always' },
        AnnotationCreateEllipseMeasurement4: { dataElement: 'ellipseMeasurementToolButton4', title: 'annotation.areaMeasurement', img: 'ic_annotation_ellipse_area_black', group: 'ellipseAreaTools', showColor: 'always' },
        AnnotationCreateRectangularAreaMeasurement: { dataElement: 'rectangularAreaMeasurementToolButton', title: 'annotation.areaMeasurement', img: 'ic_annotation_rectangular_area_black_24px', group: 'rectangleAreaTools', showColor: 'always' },
        AnnotationCreateRectangularAreaMeasurement2: { dataElement: 'rectangularAreaMeasurementToolButton2', title: 'annotation.areaMeasurement', img: 'ic_annotation_rectangular_area_black_24px', group: 'rectangleAreaTools', showColor: 'always' },
        AnnotationCreateRectangularAreaMeasurement3: { dataElement: 'rectangularAreaMeasurementToolButton3', title: 'annotation.areaMeasurement', img: 'ic_annotation_rectangular_area_black_24px', group: 'rectangleAreaTools', showColor: 'always' },
        AnnotationCreateRectangularAreaMeasurement4: { dataElement: 'rectangularAreaMeasurementToolButton4', title: 'annotation.areaMeasurement', img: 'ic_annotation_rectangular_area_black_24px', group: 'rectangleAreaTools', showColor: 'always' },
        AnnotationCreateFreeHand: { dataElement: 'freeHandToolButton', title: 'annotation.freehand', img: 'icon-tool-pen-line', group: 'freeHandTools', showColor: 'always' },
        AnnotationCreateFreeHand2: { dataElement: 'freeHandToolButton2', title: 'annotation.freehand2', img: 'icon-tool-pen-line', group: 'freeHandTools', showColor: 'always' },
        AnnotationCreateFreeHand3: { dataElement: 'freeHandToolButton3', title: 'annotation.freehand2', img: 'icon-tool-pen-line', group: 'freeHandTools', showColor: 'always' },
        AnnotationCreateFreeHand4: { dataElement: 'freeHandToolButton4', title: 'annotation.freehand2', img: 'icon-tool-pen-line', group: 'freeHandTools', showColor: 'always' },
        AnnotationCreateTextHighlight: { dataElement: 'highlightToolButton', title: 'annotation.highlight', img: 'icon-tool-text-manipulation-highlight', group: 'textTools', showColor: 'always' },
        AnnotationCreateTextHighlight2: { dataElement: 'highlightToolButton2', title: 'annotation.highlight2', img: 'icon-tool-text-manipulation-highlight', group: 'textTools', showColor: 'always' },
        AnnotationCreateTextHighlight3: { dataElement: 'highlightToolButton3', title: 'annotation.highlight2', img: 'icon-tool-text-manipulation-highlight', group: 'textTools', showColor: 'always' },
        AnnotationCreateTextHighlight4: { dataElement: 'highlightToolButton4', title: 'annotation.highlight2', img: 'icon-tool-text-manipulation-highlight', group: 'textTools', showColor: 'always' },
        AnnotationCreateTextUnderline: { dataElement: 'underlineToolButton', title: 'annotation.underline', img: 'icon-tool-text-manipulation-underline', group: 'underlineTools', showColor: 'always' },
        AnnotationCreateTextUnderline2: { dataElement: 'underlineToolButton2', title: 'annotation.underline', img: 'icon-tool-text-manipulation-underline', group: 'underlineTools', showColor: 'always' },
        AnnotationCreateTextUnderline3: { dataElement: 'underlineToolButton3', title: 'annotation.underline', img: 'icon-tool-text-manipulation-underline', group: 'underlineTools', showColor: 'always' },
        AnnotationCreateTextUnderline4: { dataElement: 'underlineToolButton4', title: 'annotation.underline', img: 'icon-tool-text-manipulation-underline', group: 'underlineTools', showColor: 'always' },
        AnnotationCreateTextSquiggly: { dataElement: 'squigglyToolButton', title: 'annotation.squiggly', img: 'icon-tool-text-manipulation-squiggly', group: 'squigglyTools', showColor: 'always' },
        AnnotationCreateTextSquiggly2: { dataElement: 'squigglyToolButton2', title: 'annotation.squiggly', img: 'icon-tool-text-manipulation-squiggly', group: 'squigglyTools', showColor: 'always' },
        AnnotationCreateTextSquiggly3: { dataElement: 'squigglyToolButton3', title: 'annotation.squiggly', img: 'icon-tool-text-manipulation-squiggly', group: 'squigglyTools', showColor: 'always' },
        AnnotationCreateTextSquiggly4: { dataElement: 'squigglyToolButton4', title: 'annotation.squiggly', img: 'icon-tool-text-manipulation-squiggly', group: 'squigglyTools', showColor: 'always' },
        AnnotationCreateTextStrikeout: { dataElement: 'strikeoutToolButton', title: 'annotation.strikeout', img: 'icon-tool-text-manipulation-strikethrough', group: 'strikeoutTools', showColor: 'always' },
        AnnotationCreateTextStrikeout2: { dataElement: 'strikeoutToolButton2', title: 'annotation.strikeout', img: 'icon-tool-text-manipulation-strikethrough', group: 'strikeoutTools', showColor: 'always' },
        AnnotationCreateTextStrikeout3: { dataElement: 'strikeoutToolButton3', title: 'annotation.strikeout', img: 'icon-tool-text-manipulation-strikethrough', group: 'strikeoutTools', showColor: 'always' },
        AnnotationCreateTextStrikeout4: { dataElement: 'strikeoutToolButton4', title: 'annotation.strikeout', img: 'icon-tool-text-manipulation-strikethrough', group: 'strikeoutTools', showColor: 'always' },
        AnnotationCreateFreeText: { dataElement: 'freeTextToolButton', title: 'annotation.freetext2', img: 'icon-tool-text-free-text', group: 'freeTextTools', showColor: 'always' },
        AnnotationCreateFreeText2: { dataElement: 'freeTextToolButton2', title: 'annotation.freetext2', img: 'icon-tool-text-free-text', group: 'freeTextTools', showColor: 'always' },
        AnnotationCreateFreeText3: { dataElement: 'freeTextToolButton3', title: 'annotation.freetext2', img: 'icon-tool-text-free-text', group: 'freeTextTools', showColor: 'always' },
        AnnotationCreateFreeText4: { dataElement: 'freeTextToolButton4', title: 'annotation.freetext2', img: 'icon-tool-text-free-text', group: 'freeTextTools', showColor: 'always' },
        AnnotationCreateCallout: { dataElement: 'calloutToolButton', title: 'annotation.callout', img: 'icon-tool-callout-line', group: 'calloutTools', showColor: 'always' },
        AnnotationCreateCallout2: { dataElement: 'calloutToolButton2', title: 'annotation.callout', img: 'icon-tool-callout-line', group: 'calloutTools', showColor: 'always' },
        AnnotationCreateCallout3: { dataElement: 'calloutToolButton3', title: 'annotation.callout', img: 'icon-tool-callout-line', group: 'calloutTools', showColor: 'always' },
        AnnotationCreateCallout4: { dataElement: 'calloutToolButton4', title: 'annotation.callout', img: 'icon-tool-callout-line', group: 'calloutTools', showColor: 'always' },
        AnnotationCreateSticky: { dataElement: 'sitckyToolButton', title: 'annotation.stickyNote', img: 'icon-tool-comment-line', group: 'stickyTools', showColor: 'always' },
        AnnotationCreateSticky2: { dataElement: 'sitckyToolButton2', title: 'annotation.stickyNote', img: 'icon-tool-comment-line', group: 'stickyTools', showColor: 'always' },
        AnnotationCreateSticky3: { dataElement: 'sitckyToolButton3', title: 'annotation.stickyNote', img: 'icon-tool-comment-line', group: 'stickyTools', showColor: 'always' },
        AnnotationCreateSticky4: { dataElement: 'sitckyToolButton4', title: 'annotation.stickyNote', img: 'icon-tool-comment-line', group: 'stickyTools', showColor: 'always' },
        AnnotationCreateRectangle: { dataElement: 'rectangleToolButton', title: 'annotation.rectangle', img: 'icon-tool-shape-rectangle', group: 'shapeTools', showColor: 'always' },
        AnnotationCreateRectangle2: { dataElement: 'rectangleToolButton2', title: 'annotation.rectangle', img: 'icon-tool-shape-rectangle', group: 'shapeTools', showColor: 'always' },
        AnnotationCreateRectangle3: { dataElement: 'rectangleToolButton3', title: 'annotation.rectangle', img: 'icon-tool-shape-rectangle', group: 'shapeTools', showColor: 'always' },
        AnnotationCreateRectangle4: { dataElement: 'rectangleToolButton4', title: 'annotation.rectangle', img: 'icon-tool-shape-rectangle', group: 'shapeTools', showColor: 'always' },
        AnnotationCreateEllipse: { dataElement: 'ellipseToolButton', title: 'annotation.ellipse', img: 'icon-tool-shape-oval', group: 'ellipseTools', showColor: 'always' },
        AnnotationCreateEllipse2: { dataElement: 'ellipseToolButton2', title: 'annotation.ellipse', img: 'icon-tool-shape-oval', group: 'ellipseTools', showColor: 'always' },
        AnnotationCreateEllipse3: { dataElement: 'ellipseToolButton3', title: 'annotation.ellipse', img: 'icon-tool-shape-oval', group: 'ellipseTools', showColor: 'always' },
        AnnotationCreateEllipse4: { dataElement: 'ellipseToolButton4', title: 'annotation.ellipse', img: 'icon-tool-shape-oval', group: 'ellipseTools', showColor: 'always' },
        AnnotationCreateLine: { dataElement: 'lineToolButton', title: 'annotation.line', img: 'icon-tool-shape-line', group: 'lineTools', showColor: 'always' },
        AnnotationCreateLine2: { dataElement: 'lineToolButton2', title: 'annotation.line', img: 'icon-tool-shape-line', group: 'lineTools', showColor: 'always' },
        AnnotationCreateLine3: { dataElement: 'lineToolButton3', title: 'annotation.line', img: 'icon-tool-shape-line', group: 'lineTools', showColor: 'always' },
        AnnotationCreateLine4: { dataElement: 'lineToolButton4', title: 'annotation.line', img: 'icon-tool-shape-line', group: 'lineTools', showColor: 'always' },
        AnnotationCreatePolyline: { dataElement: 'polylineToolButton', title: 'annotation.polyline', img: 'icon-tool-shape-polyline', group: 'polyLineTools', showColor: 'always' },
        AnnotationCreatePolyline2: { dataElement: 'polylineToolButton2', title: 'annotation.polyline', img: 'icon-tool-shape-polyline', group: 'polyLineTools', showColor: 'always' },
        AnnotationCreatePolyline3: { dataElement: 'polylineToolButton3', title: 'annotation.polyline', img: 'icon-tool-shape-polyline', group: 'polyLineTools', showColor: 'always' },
        AnnotationCreatePolyline4: { dataElement: 'polylineToolButton4', title: 'annotation.polyline', img: 'icon-tool-shape-polyline', group: 'polyLineTools', showColor: 'always' },
        AnnotationCreatePolygon: { position: 4, dataElement: 'polygonToolButton', title: 'annotation.polygon', img: 'icon-tool-shape-polygon', group: 'polygonTools', showColor: 'always' },
        AnnotationCreatePolygonCloud: { position: 5, dataElement: 'cloudToolButton', title: 'annotation.polygonCloud', img: 'icon-tool-shape-cloud', group: 'cloudTools', showColor: 'always' },
        AnnotationCreateArrow: { dataElement: 'arrowToolButton', title: 'annotation.arrow', img: 'icon-tool-shape-arrow', group: 'arrowTools', showColor: 'always' },
        AnnotationCreateArrow2: { dataElement: 'arrowToolButton2', title: 'annotation.arrow', img: 'icon-tool-shape-arrow', group: 'arrowTools', showColor: 'always' },
        AnnotationCreateArrow3: { dataElement: 'arrowToolButton3', title: 'annotation.arrow', img: 'icon-tool-shape-arrow', group: 'arrowTools', showColor: 'always' },
        AnnotationCreateArrow4: { dataElement: 'arrowToolButton4', title: 'annotation.arrow', img: 'icon-tool-shape-arrow', group: 'arrowTools', showColor: 'always' },
        AnnotationCreateSignature: { dataElement: 'signatureToolButton', title: 'annotation.signature', img: 'icon-tool-signature', group: 'signatureTools', showColor: 'active' },
        AnnotationCreateStamp: { dataElement: 'stampToolButton', title: 'annotation.stamp', img: 'icon-tool-image-line', group: 'stampTools', showColor: 'active' },
        AnnotationCreateRubberStamp: { dataElement: 'rubberStampToolButton', title: 'annotation.rubberStamp', img: 'icon-tool-stamp-line', group: 'rubberStampTools', showColor: 'active' },
        CropPage: { dataElement: 'cropToolButton', title: 'annotation.crop', img: 'ic_crop_black_24px', showColor: 'never', group: 'cropTools' },
        AnnotationCreateRedaction: { dataElement: 'redactionButton', title: 'option.redaction.markForRedaction', img: 'icon-tool-redaction-inline', group: 'redactionTools', showColor: 'never' },
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
    isThumbnailMultiselect: true,
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
    maxSignaturesCount: 4,
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
