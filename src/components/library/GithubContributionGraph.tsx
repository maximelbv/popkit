import { useEffect, useState, useMemo, CSSProperties, FC } from "react";

type Contribution = { date: string; count: number; level: number };

const generateTheme = (rgb: string) => [
  `rgba(${rgb}, 0.25)`,
  `rgba(${rgb}, 0.5)`,
  `rgba(${rgb}, 0.75)`,
  `rgba(${rgb}, 1)`,
];

const themes = {
  green: generateTheme("34, 197, 94"),
  blue: generateTheme("59, 130, 246"),
  purple: generateTheme("139, 92, 246"),
  gray: generateTheme("107, 114, 128"),
  red: generateTheme("239, 68, 68"),
  yellow: generateTheme("234, 179, 8"),
  pink: generateTheme("236, 72, 153"),
  orange: generateTheme("249, 115, 22"),
} as const;

type Theme = keyof typeof themes;
type Props = {
  username: string;
  apiBaseUrl?: string;
  rows?: number;
  columns?: number;
  tileStyles?: CSSProperties;
  gridStyles?: CSSProperties;
  theme?: Theme;
  enableTooltip?: boolean;
  displayName?: boolean;
};

const getTileColor = (level: number, theme: Theme) =>
  level === 0
    ? "rgba(107, 114, 128, 0.125)"
    : themes[theme][level - 1] || "transparent";

const fetchContributions = async (url: string): Promise<Contribution[]> => {
  const res = await fetch(url);
  const data = await res.json();
  return data.contributions || [];
};

const padContributions = (
  contributions: Contribution[],
  target: number
): Contribution[] => {
  const missing = target - contributions.length;
  return missing > 0
    ? Array.from({ length: missing }, () => ({
        date: "",
        count: 0,
        level: 0,
      })).concat(contributions)
    : contributions;
};

const generateGrid = (
  contributions: Contribution[],
  rows: number,
  columns: number
): Contribution[][] => {
  const grid: Contribution[][] = [];
  for (let i = 0; i < columns; i++) {
    grid.push(contributions.slice(i * rows, (i + 1) * rows));
  }
  return grid;
};

const Tile: FC<{
  tile: Contribution;
  theme: Theme;
  tileStyles?: CSSProperties;
  enableTooltip: boolean;
}> = ({ tile, theme, tileStyles, enableTooltip }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: 12,
        height: 12,
        backgroundColor: getTileColor(tile.level, theme),
        borderRadius: 2,
        cursor: "pointer",
        position: "relative",
        ...tileStyles,
      }}
    >
      {enableTooltip && hover && tile.date && (
        <div
          style={{
            position: "absolute",
            top: -30,
            left: "50%",
            transform: "translateX(-50%)",
            padding: "4px 8px",
            background: "black",
            color: "white",
            fontSize: 10,
            borderRadius: 4,
            whiteSpace: "nowrap",
            pointerEvents: "none",
            zIndex: 10,
          }}
        >
          {tile.count} contribution{tile.count !== 1 ? "s" : ""} on {tile.date}
        </div>
      )}
    </div>
  );
};

const GithubContributionGraph: FC<Props> = ({
  username,
  apiBaseUrl = "https://github-contributions-api.jogruber.de",
  rows = 7,
  columns = 52,
  tileStyles,
  gridStyles,
  theme = "green",
  enableTooltip = true,
  displayName = false,
}) => {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContributions(`${apiBaseUrl}/v4/${username}?y=last`)
      .then(setContributions)
      .catch((err) =>
        console.error("Failed to fetch GitHub contributions:", err)
      )
      .finally(() => setLoading(false));
  }, [username, apiBaseUrl]);

  const grid = useMemo(() => {
    const today = new Date();
    const currentDayIndex = today.getDay();
    const fullWeeks = columns - 1;
    const expected =
      rows === 7 ? fullWeeks * 7 + currentDayIndex + 1 : rows * columns;
    const padded = padContributions(contributions.slice(-expected), expected);
    return generateGrid(padded, rows, columns);
  }, [contributions, rows, columns]);

  if (loading) return <div>Loading graph...</div>;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <div style={{ display: "flex", gap: 4, ...gridStyles }}>
        {grid.map((column, colIdx) => (
          <div
            key={colIdx}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              ...gridStyles,
            }}
          >
            {column.map((tile, rowIdx) => (
              <Tile
                key={`${colIdx}-${rowIdx}`}
                tile={tile}
                theme={theme}
                tileStyles={tileStyles}
                enableTooltip={enableTooltip}
              />
            ))}
          </div>
        ))}
      </div>
      <div>
        {displayName && (
          <a
            style={{ color: "#A1A1AA" }}
            target="_blank"
            href={`https://github.com/${username}`}
          >
            @{username}
          </a>
        )}
      </div>
    </div>
  );
};

export default GithubContributionGraph;
