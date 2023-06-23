import { signal } from "@angular/core";

export const user = signal({
  loggedIn: false,
  name: "",
  email: "",
})
