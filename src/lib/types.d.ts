declare module 'react-plotly.js' {
  import { Component } from 'react';
  import { PlotlyHTMLElement } from 'plotly.js';

  interface PlotParams {
    data: any[];
    layout?: any;
    frames?: any[];
    config?: any;
  }

  interface PlotProps extends PlotParams {
    onInitialized?: (figure: any, graphDiv: PlotlyHTMLElement) => void;
    onUpdate?: (figure: any, graphDiv: PlotlyHTMLElement) => void;
    onPurge?: (figure: any, graphDiv: PlotlyHTMLElement) => void;
    onError?: (err: any) => void;
    debug?: boolean;
    style?: React.CSSProperties;
    className?: string;
    useResizeHandler?: boolean;
    divId?: string;
  }

  class Plot extends Component<PlotProps> {}
  export default Plot;
}
