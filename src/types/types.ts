export interface Media {
  id: number
  name: string
  cover: string
  languages: string[]
  status: string
  createdAt: string
  updatedAt: string
}

export interface MediaData {
  media: Media[]
}
