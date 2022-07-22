import { Controller, Delete, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
    constructor(
        private readonly userService : UserService
    ){}

    @Get()
    async findAll():Promise<UserEntity[]>{
        return await this.userService.findAll();
    }

    @Delete(':id')
    async delet(@Param('id') id:number):Promise<string>{
        return await this.userService.supprimer(id);
    }
}
