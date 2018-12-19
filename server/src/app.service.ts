import { Injectable } from "@nestjs/common";


@Injectable()
export class AppService {
  constructor() {
  }

  getHello(): object {
    return { "hello": "Hello World!" };
  }

  root(): void {
    return;
  }
}
