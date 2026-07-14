import { getTransactions } from "@/actions/server/transaction";

import { ResponsTransactions } from "@/types/Transaction";
import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  try {
    const data: ResponsTransactions = await getTransactions();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export function useDataTransaction() {
  const query = useQuery({
    queryKey: ["transaction"],
    queryFn: fetchData!,
    refetchInterval: 1000 * 30, // 30 segundos
  });

  return query;
}
