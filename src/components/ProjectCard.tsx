import type { ProjectIllustrationType } from '../data/projects';

export function ProjectDiagram({ type }: { type: ProjectIllustrationType }) {
  if (type === 'python') {
    return (
      <svg viewBox="0 0 420 200" className="w-full h-full" aria-hidden="true">
        <rect width="420" height="200" fill="#F8FAF8" />
        <g stroke="#172A25" strokeOpacity="0.07" strokeWidth="1">
          <line x1="36" y1="30" x2="392" y2="30" />
          <line x1="36" y1="70" x2="392" y2="70" />
          <line x1="36" y1="110" x2="392" y2="110" />
          <line x1="36" y1="150" x2="392" y2="150" />
          <line x1="36" y1="170" x2="392" y2="170" />
        </g>
        {/* Distribution histogram bars */}
        {[
          { x: 52, h: 36 },
          { x: 86, h: 62 },
          { x: 120, h: 92 },
          { x: 154, h: 118 },
          { x: 188, h: 128 },
          { x: 222, h: 102 },
          { x: 256, h: 74 },
          { x: 290, h: 48 },
          { x: 324, h: 30 },
          { x: 358, h: 20 },
        ].map((bar, i) => (
          <rect
            key={i}
            x={bar.x}
            y={170 - bar.h}
            width="22"
            height={bar.h}
            fill={i >= 3 && i <= 5 ? '#176B57' : '#DFF4EC'}
            stroke="#176B57"
            strokeOpacity="0.25"
          />
        ))}
        {/* Trend curve */}
        <path
          d="M52 142 C105 118, 152 40, 200 40 C248 40, 294 118, 376 150"
          fill="none"
          stroke="#38A68C"
          strokeWidth="2.5"
        />
        <text x="36" y="20" fill="#64748B" fontSize="10" fontFamily="JetBrains Mono, monospace">
          EDA DISTRIBUTION · PLANNED NOTEBOOK
        </text>
      </svg>
    );
  }

  if (type === 'sql') {
    return (
      <svg viewBox="0 0 420 200" className="w-full h-full" aria-hidden="true">
        <rect width="420" height="200" fill="#F8FAF8" />
        <text x="28" y="24" fill="#64748B" fontSize="10" fontFamily="JetBrains Mono, monospace">
          RELATIONAL SCHEMA · QUERY PIPELINE
        </text>
        {/* Table A */}
        <rect x="28" y="42" width="144" height="126" fill="#FFFFFF" stroke="#172A25" strokeOpacity="0.16" />
        <rect x="28" y="42" width="144" height="28" fill="#176B57" />
        <text x="40" y="60" fill="#FFFFFF" fontSize="11" fontFamily="JetBrains Mono, monospace">
          records_table
        </text>
        <text x="40" y="92" fill="#172A25" fontSize="10" fontFamily="JetBrains Mono, monospace">
          PK  record_id
        </text>
        <text x="40" y="114" fill="#64748B" fontSize="10" fontFamily="JetBrains Mono, monospace">
          FK  region_code
        </text>
        <text x="40" y="136" fill="#64748B" fontSize="10" fontFamily="JetBrains Mono, monospace">
          metric_value
        </text>
        <text x="40" y="156" fill="#64748B" fontSize="10" fontFamily="JetBrains Mono, monospace">
          reported_date
        </text>

        {/* Join path */}
        <path d="M172 110 C208 110, 212 90, 248 90" fill="none" stroke="#176B57" strokeWidth="2" strokeDasharray="4 3" />
        <circle cx="172" cy="110" r="3.5" fill="#176B57" />
        <circle cx="248" cy="90" r="3.5" fill="#38A68C" />

        {/* Table B */}
        <rect x="248" y="42" width="144" height="126" fill="#FFFFFF" stroke="#172A25" strokeOpacity="0.16" />
        <rect x="248" y="42" width="144" height="28" fill="#38A68C" />
        <text x="260" y="60" fill="#FFFFFF" fontSize="11" fontFamily="JetBrains Mono, monospace">
          summary_view
        </text>
        <text x="260" y="92" fill="#172A25" fontSize="10" fontFamily="JetBrains Mono, monospace">
          PK  region_code
        </text>
        <text x="260" y="114" fill="#64748B" fontSize="10" fontFamily="JetBrains Mono, monospace">
          trend_delta
        </text>
        <text x="260" y="136" fill="#64748B" fontSize="10" fontFamily="JetBrains Mono, monospace">
          period_total
        </text>
      </svg>
    );
  }

  if (type === 'powerbi') {
    return (
      <svg viewBox="0 0 420 200" className="w-full h-full" aria-hidden="true">
        <rect width="420" height="200" fill="#F8FAF8" />
        <text x="24" y="22" fill="#64748B" fontSize="10" fontFamily="JetBrains Mono, monospace">
          KPI DASHBOARD WIREFRAME · POWER BI
        </text>
        {/* Top KPI Strip */}
        <rect x="24" y="34" width="116" height="42" fill="#FFFFFF" stroke="#172A25" strokeOpacity="0.14" />
        <rect x="152" y="34" width="116" height="42" fill="#FFFFFF" stroke="#172A25" strokeOpacity="0.14" />
        <rect x="280" y="34" width="116" height="42" fill="#DFF4EC" stroke="#176B57" strokeOpacity="0.25" />
        <rect x="34" y="46" width="46" height="6" fill="#176B57" />
        <rect x="34" y="58" width="76" height="5" fill="#CBD5E1" />
        <rect x="162" y="46" width="54" height="6" fill="#38A68C" />
        <rect x="162" y="58" width="70" height="5" fill="#CBD5E1" />
        <rect x="290" y="46" width="52" height="6" fill="#176B57" />
        <rect x="290" y="58" width="68" height="5" fill="#176B57" fillOpacity="0.35" />

        {/* Left chart */}
        <rect x="24" y="88" width="244" height="90" fill="#FFFFFF" stroke="#172A25" strokeOpacity="0.14" />
        {[46, 78, 110, 142, 174, 206, 238].map((x, idx) => {
          const heights = [28, 42, 34, 56, 48, 62, 52];
          return (
            <rect
              key={x}
              x={x}
              y={166 - heights[idx]}
              width="16"
              height={heights[idx]}
              fill={idx === 5 ? '#176B57' : '#38A68C'}
              fillOpacity={idx === 5 ? 1 : 0.45}
            />
          );
        })}

        {/* Right donut */}
        <rect x="280" y="88" width="116" height="90" fill="#FFFFFF" stroke="#172A25" strokeOpacity="0.14" />
        <circle cx="338" cy="133" r="26" fill="none" stroke="#DFF4EC" strokeWidth="10" />
        <circle
          cx="338"
          cy="133"
          r="26"
          fill="none"
          stroke="#176B57"
          strokeWidth="10"
          strokeDasharray="106 164"
          transform="rotate(-90 338 133)"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 420 200" className="w-full h-full" aria-hidden="true">
      <rect width="420" height="200" fill="#F8FAF8" />
      <text x="24" y="22" fill="#64748B" fontSize="10" fontFamily="JetBrains Mono, monospace">
        STRUCTURED PIVOT &amp; MIS GRID · EXCEL
      </text>
      <rect x="24" y="34" width="372" height="144" fill="#FFFFFF" stroke="#172A25" strokeOpacity="0.15" />
      <rect x="24" y="34" width="372" height="26" fill="#DFF4EC" />
      <g stroke="#172A25" strokeOpacity="0.1" strokeWidth="1">
        <line x1="24" y1="88" x2="396" y2="88" />
        <line x1="24" y1="118" x2="396" y2="118" />
        <line x1="24" y1="148" x2="396" y2="148" />
        <line x1="120" y1="34" x2="120" y2="178" />
        <line x1="224" y1="34" x2="224" y2="178" />
        <line x1="312" y1="34" x2="312" y2="178" />
      </g>
      <rect x="134" y="69" width="54" height="7" fill="#38A68C" />
      <rect x="134" y="99" width="74" height="7" fill="#176B57" />
      <rect x="134" y="129" width="44" height="7" fill="#38A68C" />
      <rect x="134" y="159" width="62" height="7" fill="#176B57" />
      <rect x="238" y="69" width="58" height="7" fill="#DFF4EC" />
      <rect x="238" y="99" width="46" height="7" fill="#DFF4EC" />
      <rect x="238" y="129" width="60" height="7" fill="#DFF4EC" />
      <rect x="238" y="159" width="50" height="7" fill="#DFF4EC" />
    </svg>
  );
}
