import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('')
export class AppController {
    constructor(private configService:ConfigService){}
    @Get()
    helloWorld():string {
        return this.configService.get('db.type')
    }
}
