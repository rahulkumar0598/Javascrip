export default function User() {
  return "hello User";
}

export function OtherUser() {
  return "hello OtherUser";
}

export let UserVar = "Hello guys";

export class UserClass {
  test() {
    console.warn("test Function");
  }
}
class UserOtherClass {
  test() {
    console.warn("test Function other");
  }
}
export let UOC = new UserOtherClass();
