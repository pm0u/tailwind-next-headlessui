// @ts-check
import React, { useState } from "react"
import { Switch } from "@headlessui/react"
import clsx from "clsx"
import styles from "./switch-complex-clsx.module.css"

export const SwitchComplexClsx = () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <div>
      <p>arbitrary complicated example</p>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        // this could also read:
        // className={clsx(styles.switch, enabled && styles.checked )}
        className={clsx(styles.switch, { [styles.checked]: enabled })}
      >
        <span className="sr-only">Enable notifications</span>
        <span className={clsx(styles.dot, enabled && styles.dotChecked)} />
      </Switch>
    </div>
  )
}
