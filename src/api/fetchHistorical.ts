import { APP_ID } from "../UNSECURE_secrets";
import { fetchOptionsGET, oxrAPIBaseURL } from "./config";
import { FetchHistorical } from "./types";

export const fetchHistorical: FetchHistorical = async (date: string) => {
  try {
    const response = await fetch(
      `${oxrAPIBaseURL}/historical/${date}.json?app_id=${APP_ID}}`,
      fetchOptionsGET,
    );

    const historical = await response.json();

    return historical;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }

  return [];
};
