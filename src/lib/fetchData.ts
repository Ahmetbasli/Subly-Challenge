import axios from 'axios'
import { Media } from '../types/types'

export const fetchData = async (url: string) => {
  try {
    const { data } = await axios.get<Media[]>(url)
    return data
  } catch (error) {
    console.log(error)
  }
}
