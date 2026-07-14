import { api } from "@/services/api";
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

// GET DE TODOS OS USUÁRIOS
export async function getPeople() {
  return await handleRequest("/api/person/get-all", "GET PEOPLE");
}

//ADICIONAR NOVO USUÁRIO
export async function postNewPerson(name: string, age: number) {
  try {
    const { data } = await api.post("/api/person/register", { name, age });
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(
        `Failed to fetch ADICIONAR NOVA PESSOA from API: ${error.response?.data || error.message}`,
      );
    }
    if (error instanceof Error) {
      throw new Error(
        `Failed to fetch ADICIONAR NOVA PESSOA from API: ${error.message}`,
      );
    }
    throw new Error("ADICIONAR NOVA PESSOA.");
  }
}

//DELETAR USUÁRIO
export async function deletePerson(id: string) {
  try {
    const { data } = await api.delete(`/api/person/delete/${id}`);
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(
        `Failed to fetch  DELETAR PESSOA from API: ${error.response?.data || error.message}`,
      );
    }
    if (error instanceof Error) {
      throw new Error(
        `Failed to fetch  DELETAR PESSOA from API: ${error.message}`,
      );
    }
    throw new Error("DELETAR PESSOA.");
  }
}
