import { api } from "@/services/api";
import { CreateTransactionDto } from "@/types/Transaction";
import { AxiosError } from "axios";

const handleRequest = async (url: string, errorMessage: string) => {
  try {
    const { data } = await api.get(url);
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(
        `Failed to fetch ${errorMessage} from API: ${error.response?.data || error.message}`,
      );
    }
    if (error instanceof Error) {
      throw new Error(
        `Failed to fetch ${errorMessage} from API: ${error.message}`,
      );
    }
    throw new Error("An unknown error occurred.");
  }
};

// GET DE TODOS AS TRANSAÇÕES
export async function getTransactions() {
  return await handleRequest("/api/transaction/get-all", "GET TRANSACTIONS");
}

//ADICIONAR NOV TRANSAÇÃO
export async function postNewTransaction(
  dataTransaction: CreateTransactionDto,
) {
  try {
    const { data } = await api.post(
      "/api/transaction/register",
      dataTransaction,
    );
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(
        `Failed to fetch REGISTAR NOVA TRANSAÇÃO from API: ${error.response?.data || error.message}`,
      );
    }
    if (error instanceof Error) {
      throw new Error(
        `Failed to fetch REGISTAR NOVA TRANSAÇÃO from API: ${error.message}`,
      );
    }
    throw new Error("REGISTAR NOVA TRANSAÇÃO.");
  }
}
