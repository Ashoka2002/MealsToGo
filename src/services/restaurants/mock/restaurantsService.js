import camelize from "camelize";
import { mocks } from "./index";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    if (!mocks[location]) reject("Not Found");
    resolve(mocks[location]);
  });
};

restaurantsRequest()
  .then((r) => {
    console.log(camelize(r));
  })
  .catch((error) => {
    console.log(error);
  });
