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
        className={clsx(styles.switch, { [styles.checked]: enabled })}
      >
        <span className="sr-only">Enable notifications</span>
        <span className="inline-block h-4 w-4 transform rounded-full bg-white transition ui-checked:translate-x-6 ui-not-checked:translate-x-1 ui-checked:h-8 ui-checked:w-8" />
      </Switch>
    </div>
  )
}
