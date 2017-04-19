type MenuItem = {
  type: string,
  name: string,
  href: string,
  countLabel?: number,
  icon?: string,
  subItems?: MenuItem[],
};

type Profile = {
  email: string,
  firstName: string,
  lastName: string,
  jobPosition: string,
  photo: string,
  password: string,
  $key?: string
};

type Credentials = {
  email: string,
  password: string
};
