function SimpleChart({ data }) {
  const width = 700;
  const height = 300;
  const padding = 50;

  const maxValue = Math.max(...data.map((d) => d.value));
  const minValue = 0;
  const xScale = (index) =>
    padding + (index / (data.length - 1)) * (width - 2 * padding);
  const yScale = (value) =>
    height -
    padding -
    ((value - minValue) / (maxValue - minValue)) * (height - 2 * padding);

  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    value: "",
  });

  return (
    <svg width={width} height={height} style={{ border: "1px solid #ddd" }}>
      <line
        x1={padding}
        y1={height - padding}
        x2={width - padding}
        y2={height - padding}
        stroke="#bbb"
      />
      <line
        x1={padding}
        y1={padding}
        x2={padding}
        y2={height - padding}
        stroke="#bbb"
      />

      {data.map((_, i) => (
        <line
          key={`grid-x-${i}`}
          x1={xScale(i)}
          y1={padding}
          x2={xScale(i)}
          y2={height - padding}
          stroke="#f0f0f0"
        />
      ))}
      {[0, maxValue / 2, maxValue].map((val, i) => (
        <line
          key={`grid-y-${i}`}
          x1={padding}
          y1={yScale(val)}
          x2={width - padding}
          y2={yScale(val)}
          stroke="#f0f0f0"
        />
      ))}

      {data.map((d, i) =>
        i < data.length - 1 ? (
          <line
            key={`line-${i}`}
            x1={xScale(i)}
            y1={yScale(d.value)}
            x2={xScale(i + 1)}
            y2={yScale(data[i + 1].value)}
            stroke="#4a90e2"
            strokeWidth={2}
          />
        ) : null
      )}

      {data.map((d, i) => (
        <circle
          key={`circle-${i}`}
          cx={xScale(i)}
          cy={yScale(d.value)}
          r={5}
          fill="#ff5722"
          onMouseEnter={(e) =>
            setTooltip({
              visible: true,
              x: xScale(i),
              y: yScale(d.value),
              value: `${d.date}: ${d.value}`,
            })
          }
          onMouseLeave={() =>
            setTooltip({ visible: false, x: 0, y: 0, value: "" })
          }
        />
      ))}

      {data.map((d, i) => (
        <text
          key={`date-${i}`}
          x={xScale(i)}
          y={height - padding + 20}
          textAnchor="middle"
          fontSize="10"
          fill="#555"
        >
          {d.date}
        </text>
      ))}

      {[0, maxValue / 2, maxValue].map((val, i) => (
        <text
          key={`y-label-${i}`}
          x={padding - 10}
          y={yScale(val) + 5}
          textAnchor="end"
          fontSize="10"
          fill="#555"
        >
          {val}
        </text>
      ))}

      {tooltip.visible && (
        <g>
          <rect
            x={tooltip.x - 30}
            y={tooltip.y - 40}
            width={60}
            height={30}
            fill="white"
            stroke="#ccc"
            rx={5}
          />
          <text
            x={tooltip.x}
            y={tooltip.y - 20}
            textAnchor="middle"
            fontSize="12"
            fill="#333"
          >
            {tooltip.value}
          </text>
        </g>
      )}
    </svg>
  );
}
