import React from "react";

function useToggle(initialValue = false) {
  const [value, setValue] = React.useState(initialValue);
  const toggle = React.useCallback(() => {
    setValue((currentValue) => !currentValue);
  }, []);
  return [value, toggle];
}

export default useToggle;
