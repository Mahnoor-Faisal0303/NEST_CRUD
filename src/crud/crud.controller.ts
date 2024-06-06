import { Body, Controller, Get, Post } from '@nestjs/common';
import { CrudService } from './crud.service';
import { Task } from './crud.model';

@Controller('crud')
export class CrudController {
    constructor(private taskService: CrudService){}  //public, protected

    @Get()
    getAllTasks():Task[]{
    return this.taskService.getAllTask()
    }
    @Post()
    createTask(@Body('title') title:string,
    @Body('description') description:string):Task{
    return this.taskService.createTask(title,description);
        }
    }

