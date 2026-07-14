import { getPeople } from '@/actions/server/people'
import { getSummary, getSummaryById } from '@/actions/server/summary'
import { ResponsePeople } from '@/types/person'
import { ResponseSummary, ResponseSummaryById } from '@/types/summary'
import { useQuery } from '@tanstack/react-query'

const fetchData = async () => {
  try {
    const data : ResponsePeople = await getPeople()

    return data

  } catch (error) {
    console.error(error)
  }
}

const fetchSummaryById = async (personId: string) => {
  try {
    const data : ResponseSummaryById = await getSummaryById(personId)

    return data

  } catch (error) {
    console.error(error)
  }
}


const fetchSummary = async () => {
  try {
    const data : ResponseSummary = await getSummary()

    return data

  } catch (error) {
    console.error(error)
  }
}

export function useData() {
  const query = useQuery({
    queryKey: ['people'],
    queryFn: fetchData!,
    refetchInterval: 1000 * 30, // 30 segundos
  })

  return query
}

export function useSummary() {
  const query = useQuery({
    queryKey: ['summary'],
    queryFn: fetchSummary!,
    refetchInterval: 1000 * 30, // 30 segundos
  })

  return query
}
export function useSummaryById(personId: string) {
  const query = useQuery({
    queryKey: ['summaryById', personId],
    queryFn: () => fetchSummaryById(personId),
    refetchInterval: 1000 * 30, // 30 segundos
  })

  return query
}

