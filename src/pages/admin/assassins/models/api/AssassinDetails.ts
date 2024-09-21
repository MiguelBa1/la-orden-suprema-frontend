export type AssassinDetails = {
  id: number;
  name: string;
  email: string;
  alias: string;
  address: string;
  status: 'active' | 'inactive';
  country: string;
  coins: number;
  profilePicture: {
    _id: string;
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    size: number;
    buffer: string;
  };
}
