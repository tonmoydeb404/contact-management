import useSWRMutation from "swr/mutation";
import { BACKEND_URL } from "../global.config";

const fetcher = (url, { arg }) => {
  console.log(arg);

  return fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

const useCreateContact = () => {
  const { data, isLoading, trigger } = useSWRMutation(
    `${BACKEND_URL}/api/contacts`,
    fetcher
  );

  return {
    contacts: data,
    isLoading,
    trigger,
  };
};

export default useCreateContact;
