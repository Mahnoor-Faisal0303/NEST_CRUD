import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './crud.model';
import ShortUniqueId from 'short-unique-id';

@Injectable()              //why?
export class CrudService {
    private tasks:Task[] = []  //private used for encapsulation

    getAllTask():Task[]
    {
        return this.tasks
    }
    createTask(title:string,description:string):Task{
        const ids = new ShortUniqueId({ length: 10 });
        //const id = ids.toString();
         const id= new Date().toString();
        const task:Task={
            id,
            title,
            description,
            status:TaskStatus.OPEN
        }
        this.tasks.push(task);
        return task
    }
}
