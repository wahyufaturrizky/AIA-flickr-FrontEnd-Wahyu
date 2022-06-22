import axios from 'axios'
import { URL } from './config'

const searchAPI = async ({ query, page }) => {
  try {
    const { data } = await axios(`${URL}/${query || 'home'}/30/${page}`)
    return data
  } catch (e) {
    throw new Error(e)
  }
}

export default searchAPI
