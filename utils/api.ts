import axios from 'axios'

const REST_ENDPOINT = 'https://rest.cosmos.directory/cosmoshub'

export const fetchAtomPrice = async (): Promise<number | null> => {
  try {
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=cosmos&vs_currencies=usd"
    const response = await axios.get(url)
    if (response.status !== 200) {
      throw new Error("Error fetching ATOM price: " + response.status)
    }
    const data = response.data
    return data.cosmos.usd
  } catch (error) {
    console.error("Failed to fetch ATOM price:", error)
    return null
  }
}

export const fetchValidators = async () => {
  try {
    const url = `${REST_ENDPOINT}/cosmos/staking/v1beta1/validators?pagination.limit=1000`
    const response = await axios.get(url)
    if (response.status !== 200) {
      throw new Error(`Error fetching validators data: ${response.status}`)
    }
    return response.data
  } catch (error) {
    console.error("Failed to fetch validators:", error)
    return null
  }
}

export const fetchLatestBlock = async () => {
  try {
    const url = `${REST_ENDPOINT}/cosmos/base/tendermint/v1beta1/blocks/latest`
    const response = await axios.get(url)
    if (response.status !== 200) {
      throw new Error(`Error fetching latest block: ${response.status}`)
    }
    return response.data.block.header.height
  } catch (error) {
    console.error("Failed to fetch latest block:", error)
    return null
  }
}
