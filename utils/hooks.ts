import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
function fetchLocalizedData(endpoint: string, locale: string) {
  return fetch(
    `https://web.chema-foam.com/api/page/${endpoint}/${locale}`,
  ).then((res) => res.json());
}
export function useLocalizedData(endpoint: string) {
  const locale = useLocale();
  return useQuery({
    queryKey: [endpoint, locale],
    queryFn: () => fetchLocalizedData(endpoint, locale),
  });
}