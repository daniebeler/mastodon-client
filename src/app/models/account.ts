import { SafeResourceUrl } from "@angular/platform-browser";

export class Account {

  public id: number;
  public username: string;
  public avatar: SafeResourceUrl;

  constructor(data?: any) {
    this.id = data?.id;
    this.username = data?.username;
    this.avatar = data?.avatar;
  }
}
