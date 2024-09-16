export type ProfileDetails = {
  _id: string;
  name: string;
  alias: string;
  country: string;
  address: string;
  email: string;
  profilePicture:  {
    buffer?: string
    mimetype?: string
  };
}
