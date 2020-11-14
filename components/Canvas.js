import React, { PureComponent } from 'react'
import { Svg, G, Line, Rect } from 'react-native-svg'

const GRAPH_MARGIN = 20
const colors = {
  axis: '#E4E4E4'
}

export default class Example extends PureComponent {
  render() {
    const SVGHeight = 300
    const SVGWidth = 300
    const graphHeight = SVGHeight - 2 * GRAPH_MARGIN
    const graphWidth = SVGWidth - 2 * GRAPH_MARGIN

    return (
      <Svg width={SVGWidth} height={SVGHeight}>
        <G y={graphHeight}>
          {/* bottom axis */}
          <Line
            x1="0"
            y1="2"
            x2={graphWidth}
            y2="2"
            stroke={colors.axis}
            strokeWidth="0.5"
          />
          <Rect
              x="15"
              y="-15"
              width="20"
              height="20"
              fill="yellow"
            />
        </G>
      </Svg>
    )
  }
}