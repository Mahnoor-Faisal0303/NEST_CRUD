import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CrudService } from './crud.service';
import { Task } from './crud.model';
import { CreateTaskDTO } from './dto/createCrud.dto';

@Controller('crud')
export class CrudController {
  constructor(private taskService: CrudService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTask();
  }
  @Get('/:id')          // localhost/crud/task/1
  getTaskById(@Param('id') id: string): Task {
    return this.taskService.getTaskById(id);
  }

  @Post()
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  createTask(
    @Body() task:CreateTaskDTO
  ): Task {
    return this.taskService.createTask(task.title, task.description);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string) {
    this.taskService.deleteTask(id);
    return `task ${id} is deleted`;
  }

  @Patch('/:id')
  updateTaskTitle(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    return this.taskService.updateTaskTitle(id, title,description);
  }
}


