import { ReactNode } from "react";
import styles from "./Container.module.scss";

export default function Container({
  children,
}: {
  children: ReactNode | undefined;
}) {
  return <div className={styles.root}>{children}</div>;
}
