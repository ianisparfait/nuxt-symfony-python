type User = {
  id: number;
  name: string;
  firstname: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  nationality: string;
  sociality: string;
  isLicenced: boolean;
  isVerified: boolean;
  isBanned: boolean;
  phone: string;
};

export default User;
