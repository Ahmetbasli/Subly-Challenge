import React, { useState, createContext } from 'react'
import { Media, MediaContextType } from '../types/types'

// Create context to read and update media data
export const MediaContext = createContext<MediaContextType | null>(null)

// Prepare global context provider so that created context can be used globally
const ContextProvider = ({ children }) => {
  const [mediums, setMediums] = useState<Media[]>([])

  // Function to change mediums' state with media data fetched from API endpoint
  const saveMedia = (fetchedMedia: Media[]) => {
    setMediums(fetchedMedia)
  }

  return (
    <MediaContext.Provider value={{ mediums, saveMedia }}>
      {children}
    </MediaContext.Provider>
  )
}

export default ContextProvider
