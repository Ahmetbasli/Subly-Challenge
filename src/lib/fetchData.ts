import axios from 'axios'
import { MediaData } from '../types/types'

export const fetchData = async (url: string) => {
  try {
    const { data } = await axios.get<MediaData>(url)
    return data
  } catch (error) {
    console.log(error)
  }
}
