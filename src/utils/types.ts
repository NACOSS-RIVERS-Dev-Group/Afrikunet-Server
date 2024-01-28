export type CreateUserParams = {
  first_name: string;
  last_name: string;
  international_phone_format: string;
  email_address: string;
  password: string;
};

export type UpdateUserParams = {
  first_name: string;
  last_name: string;
  international_phone_format: string;
  email_address: string;
  password: string;
};

export type CreateUserAddressParams = {
  country: string;
  street: string;
  state: string;
  city: string;
};

export type CreateUserGeoParams = {
  lat: string;
  lon: string;
};
