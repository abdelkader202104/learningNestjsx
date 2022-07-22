import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Get all';
  }

  @Get(':id')
  getHello1(@Param('id') id:string): string {
    if(1 === parseInt(id))
      return 'Get one';
  }

  @Post()
  create(@Body() body): Array<any>{
    return [{nom:"zertyuiop",num:662},{nom:"xcvbn,df",num:9874}];
  }

  @Delete(':id')
  delete():string{
    return 'Deleted';
  }

  @Put(':id')
  put():string{
    return 'yes';
  }













}
