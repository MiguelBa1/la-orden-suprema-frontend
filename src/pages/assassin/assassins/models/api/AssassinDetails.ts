export type AssassinDetails = {
  _id: string;
  name: string;
  alias: string;
  country: string;
  address: string;
  profilePicture: {
    buffer?: string
    mimetype?: string
  };
}
