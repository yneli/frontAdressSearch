export type payloadValue = {
  data: string,
  unrestricted_value: string,
  value: string,
};
export type AdressState = {
    items: payloadValue[] | null,
    status: string,
};
export type AdressSearch = {
    text?: string,
};


