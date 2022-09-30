import { Controller,Get,Post,Delete,Put,Patch,Param,Body  } from '@nestjs/common';
import { todoModel } from './todo.model';
import { Updatetodo } from './DTO/updatetodo.dto';
import { AddTodoDto } from './DTO/add-todo.dto';



@Controller('todo')
export class TodoController {
    private todos =[];

    //get the todo list
    @Get()
    getTodos(){
        
        return this.todos;
    }



    //ADD a todo
    @Post()
    Ajoutetodo(@Body() AddTodoDto:AddTodoDto ){
        const todo= new todoModel()
        todo.name=AddTodoDto.name;
        todo.description=AddTodoDto.description;
        this.todos.push(todo)
        return todo;
    }



    //find to do by id
    @Get('/:id')
    gettodobyid(@Param('id') id)
    {
        return this.todos.find((todoitem)=>todoitem.id==id)
    }


    // delete by id
   @Delete (':id')
   deletetodobyid(@Param('id') id)
   {
  this.todos=this.todos.filter(thistodo=>thistodo.id !== id)
   return 'todo item deleted'
   }


  // update 
   @Put(':id')
    update(@Param('id') id : number ,@Body ('todo') todoupdate: Updatetodo)
    {
        const TODO= this.todos.find((todoitem)=>todoitem.id==id);
        if(TODO){
            Object.assign(Updatetodo,TODO);
            this.todos.push(TODO);
        }
        return this.todos;

    }

 


   }
    

   



