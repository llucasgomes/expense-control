import { getPeople } from "@/actions/server/people";
import { ResponsePeople } from "@/types/person";
import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  try {
    const data: ResponsePeople = await getPeople();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export function useDataPeople() {
  const query = useQuery({
    queryKey: ["people"],
    queryFn: fetchData!,
    refetchInterval: 1000 * 30, // 30 segundos
  });

  return query;
}
