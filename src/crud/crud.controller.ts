import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CrudService } from './crud.service';
import { Task } from './crud.model';

@Controller('crud')
export class CrudController {
  constructor(private taskService: CrudService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTask();
  }
  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.taskService.getTaskById(id);
  }

  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Task {
    return this.taskService.createTask(title, description);
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
