import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const photoResponse = await uploadPhoto();
    const userResponse = await createUser();

    return {
      photo: photoResponse,
      user: userResponse
    };
  } catch (error) {
    // If any of the async functions fail, return an empty object
    return {
      photo: null,
      user: null
    };
  }
}

export default asyncUploadUser;

