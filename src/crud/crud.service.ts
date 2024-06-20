import { Injectable } from '@nestjs/common';
import { Task } from './crud.model';
import ShortUniqueId from 'short-unique-id';

@Injectable()              
export class CrudService {
    private tasks:Task[] = []  

    getAllTask():Task[]
    {
        return this.tasks
    }
    getTaskById(id:string):Task{
        return this.tasks.find(task=>task.id===id); 
    }

    createTask(title:string,description:string):Task{
        //const ids = new ShortUniqueId();
        //const id = ids.toString();
        const uid = new ShortUniqueId({ length: 10 });
        const id=uid.rnd();
        //const id= new Date().toString();
        const task:Task={
            id,
            title,
            description,
        }
        this.tasks.push(task);
        return task
    }

    deleteTask(id:string){
       this.tasks = this.tasks.filter(task=>task.id!==id)
    }

    updateTaskTitle(id:string,taskTitle:string,taskDescription:string){
        let task=this.getTaskById(id)
        if (taskTitle) {
            task.title = taskTitle;
        }
        if(taskDescription) {
            task.description = taskDescription;
        }
        return task
    }
    
}
