type Mail = {
  owner: string,
  ownerType: string,
  type: string,
  favorite: boolean,
  read: boolean,
  sender: Contact,
  receivers: Contact[],
  topic: string,
  body: string,
  time: number
};
