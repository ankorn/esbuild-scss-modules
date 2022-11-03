import Child from "./Child";

import styles from "./styles.module.scss";

const TestComponent = () => (
  <div className={styles.testComponent}>
    <Child />
  </div>
);

export default TestComponent;
