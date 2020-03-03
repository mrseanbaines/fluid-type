import React, { useContext } from 'react'

const FluidContext = React.createContext()

export const useFluidTheme = () => useContext(FluidContext)

export const FluidProvider = ({ theme, children }) => (
  <FluidContext.Provider value={theme}>{children}</FluidContext.Provider>
)
