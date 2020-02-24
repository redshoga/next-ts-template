import React from "react";
import styles from "./Sample.scss"

export type Props = {
  sample: string
}

export const Sample: React.FC<Props> = (props: Props) => {
  return <div className={styles.container}>Sample: {props.sample}</div>
}
