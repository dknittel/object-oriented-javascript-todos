var TodoList = function() {

  this.tasks = [];
  var counter = 0;

  function task(food_item) {
    this.id = ++counter;
    this.description = food_item;
    this.completed = false;
    this.complete = function(){
      this.completed = true;
    }
  }

  this.add = function(food_item){
    this.tasks.push(new task(food_item));
  }


  //   this.tasks.push(function (){
  //     id: ++counter,
  //     description: food_item,
  //     completed: false
  //   });
  // }
//create constructors within the add function so put function inside of add funciton

  this.list = function(){
    for (var i=0; i < this.tasks.length; i++){
      console.log('>', this.tasks[i]);
    }
  }

  this.indexOf = function(food_item){
    return this.tasks.indexOf(food_item)
  }

  this.remove = function(index){
    this.tasks.splice(index, 1)
    console.log(this.list())
  }

  this.get = function(index){
    console.log(this.tasks[index])
  }

  // this.complete = function() {
  //   // this.completed = true;
  //   console.log('yolo');
  // }
};



// Driver code


// var todoList = newTodoList();
var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
console.log(groceryList.tasks); //-> [Task, Task, Task]

groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// getting a task object
var breadTask = groceryList.tasks[0];

breadTask.id //-> 1 (some unique numerical ID)
breadTask.description //-> 'bread'
breadTask.completed //-> false


// This should complete the task
breadTask.complete();

breadTask.completed //-> true

groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
groceryList.remove(breadTask);
console.log("******")
groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}
