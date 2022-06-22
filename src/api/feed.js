import axios from 'axios'
import { URL } from './config'

const feedAPI = async () => {
  try {
    const { data } = await axios(`${URL}`)
    return data
  } catch (e) {
    throw new Error(e)
  }
}

export default feedAPI
