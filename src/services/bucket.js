import * as Bucket from "@spica-devkit/bucket";

export function bucketInit() {
  Bucket.initialize({
    apikey: process.env.REACT_APP_ADMIN_APIKEY,
    publicUrl: process.env.REACT_APP_PUBLIC_URL,
  });
}

class User {
  constructor() {
    this.bucketId = "6517362e20924d002c086b59";
  }

  async getAll() {
    const data = await Bucket.data.getAll(this.bucketId).catch((e) => console.error(e));
    return data;
  }

  async addNew({ username, password }) {
    let newUser = {
      username,
      password,
    };
    const data = Bucket.data.insert(this.bucketId, newUser).catch((e) => console.error(e));
    return data;
  }
}

export const user = new User();
