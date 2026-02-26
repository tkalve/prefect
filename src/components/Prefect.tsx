import { useMemo } from "react";
import styles from "./Prefect.module.scss";

type PrefectProps = {
  content: string;
  wrap?: boolean;
  className?: string;
  mode?: "light" | "dark";
};

const Prefect = ({
  content,
  wrap = true,
  className,
  mode = "light",
}: PrefectProps) => {
  const lines = useMemo(
    () => content.replace(/\r\n/g, "\n").split("\n"),
    [content],
  );

  const classNames = [
    "prefect",
    wrap && styles.wrap,
    mode === "light" && styles.light,
    mode === "dark" && styles.dark,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <pre
      className={classNames}
      aria-label="Pre-formatted code block with line numbers"
    >
      {lines.map((line, i) => (
        <div className={styles.row} key={i}>
          <span className={styles.number} aria-hidden="true">
            {i + 1}
          </span>
          <span className={styles.content}>
            {line.length ? line : "\u200B"}
          </span>
        </div>
      ))}
    </pre>
  );
};

export default Prefect;
