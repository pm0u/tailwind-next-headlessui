import React, { useState } from "react"
import { Switch } from "@headlessui/react"

export const SwitchComplex = () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <div>
      <p>arbitrary complicated example</p>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        // just some arbitrary stuff, but the point being there's a number of classes that change
        className="relative inline-flex h-6 w-11 items-center rounded-full ui-checked:bg-blue-600 ui-checked:w-20 ui-checked:h-12 ui-not-checked:bg-gray-200"
      >
        <span className="sr-only">Enable notifications</span>
        {/** and here -- in this case, the order is all over the place further adding confusion */}
        <span className="inline-block h-4 w-4 transform rounded-full bg-white transition ui-checked:translate-x-6 ui-not-checked:translate-x-1 ui-checked:h-8 ui-checked:w-8" />
      </Switch>
    </div>
  )
}
