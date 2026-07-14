import { api } from "@/services/api"
import { AxiosError } from "axios"

const handleRequest = async (
  url: string,
  errorMessage: string
) => {
  try {
    const { data } = await api.get(url)
    return data
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(
        `Failed to fetch ${errorMessage} from API: ${error.response?.data || error.message}`
      )
    }
    if (error instanceof Error) {
      throw new Error(
        `Failed to fetch ${errorMessage} from API: ${error.message}`
      )
    }
    throw new Error('An unknown error occurred.')
  }
}

// GET DE TODOS OS USUÁRIOS
export async function getPeople() {
  

  return await handleRequest('/api/person/get-all', 'GET PEOPLE')
}