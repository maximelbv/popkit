import React, { useEffect, useState } from "react";

type Contribution = {
  date: string;
  count: number;
  level: number;
};

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

type GithubContributionGraphProps = {
  username: string;
  apiBaseUrl?: string;
  rows?: number;
  columns?: number;
  tileStyles?: object;
  gridStyles?: object;
  theme?: Theme;
};

const getTileColor = (level: number, theme: Theme): string => {
  if (level === 0) {
    return "rgba(107, 114, 128, 0.125)";
  }
  const themeColors = themes[theme] || themes.green;
  return themeColors[level - 1] || "transparent";
};

const GithubContributionGraph: React.FC<GithubContributionGraphProps> = ({
  username = "torvalds",
  apiBaseUrl = "https://github-contributions-api.jogruber.de/v4",
  rows = 7,
  columns = 52,
  tileStyles,
  gridStyles,
  theme = "green",
}) => {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/${username}?y=last`);
        const data = await response.json();
        setContributions(data.contributions || []);
      } catch (error) {
        console.error("Failed to fetch GitHub contributions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, [apiBaseUrl, username]);

  if (loading) {
    return <div>Loading graph...</div>;
  }

  const today = new Date();
  const currentDayIndex = today.getDay();
  const fullWeeks = columns - 1;
  const expectedTiles =
    rows === 7 ? fullWeeks * 7 + currentDayIndex + 1 : rows * columns;

  let recentContributions = contributions.slice(-expectedTiles);

  if (recentContributions.length < expectedTiles) {
    const missingTiles = expectedTiles - recentContributions.length;
    const emptyDays: Contribution[] = Array.from(
      { length: missingTiles },
      () => ({
        date: "",
        count: 0,
        level: 0,
      })
    );
    recentContributions = [...emptyDays, ...recentContributions];
  }

  const grid: Contribution[][] = [];

  if (rows === 7) {
    for (let i = 0; i < fullWeeks; i++) {
      grid.push(recentContributions.slice(i * 7, (i + 1) * 7));
    }
    grid.push(recentContributions.slice(fullWeeks * 7));
  } else {
    for (let i = 0; i < columns; i++) {
      grid.push(recentContributions.slice(i * rows, (i + 1) * rows));
    }
  }

  return (
    <div style={{ display: "flex", gap: "4px", ...gridStyles }}>
      {grid.map((column, colIdx) => (
        <div
          key={colIdx}
          style={{ display: "flex", flexDirection: "column", gap: "4px" }}
        >
          {column.map((tile, rowIdx) => (
            <div
              key={`${colIdx}-${rowIdx}`}
              title={`${tile.count} contribution${tile.count !== 1 ? "s" : ""}${
                tile.date ? ` on ${tile.date}` : ""
              }`}
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: getTileColor(tile.level, theme),
                borderRadius: "2px",
                cursor: "pointer",
                ...tileStyles,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GithubContributionGraph;
