import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('greeting')
  greeting() {
    return { text: 'Hello from NestJS 👋' };
  }
}
