// ag-grid-enterprise v21.1.1
import { Component } from "ag-grid-community";
import { ChartController } from "../../../chartController";
export declare class PieSeriesPanel extends Component {
    static TEMPLATE: string;
    private seriesGroup;
    private seriesTooltipsToggle;
    private seriesStrokeWidthSlider;
    private seriesLineOpacitySlider;
    private seriesFillOpacitySlider;
    private chartTranslator;
    private readonly chartController;
    private activePanels;
    private series;
    constructor(chartController: ChartController);
    private init;
    private initGroup;
    private initSeriesTooltips;
    private initSeriesStrokeWidth;
    private initOpacity;
    private initLabelPanel;
    private initShadowPanel;
    private destroyActivePanels;
    destroy(): void;
}
