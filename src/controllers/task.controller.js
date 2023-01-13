import Task from "../models/Task";
//render all the task
export const renderTask = async (req, res) => {
    try {
      const tasks = await Task.find().lean() //get tha task from mongodb (array of objects)
      //render is a fuction added for engine views (handlebars)
      res.render("index", {tasks: tasks}); //send the get tasks from mongodb to index page
    } catch (error) {
      console.log(error);
    }
}
//show the form to edit a task 
export const renderEditTask = async(req, res) => {
    try {
      const task = await Task.findById(req.params.id).lean()
      res.render("edit", { task }); //send the task 
    } catch (error) {
      console.log(error)
    } 
}
//delete task 
export const deleteTask = async(req, res) => {
    try {
      const { id } = req.params;
      await Task.findByIdAndDelete(id);
      res.redirect("/") 
    } catch (error) {
      console.log(error)
    }    
}
//toggleDone
export const toggleDone = async(req, res) => {
    try {
      const { id } = req.params;
      const task   = await Task.findById(id); //get task by id
      task.done    = !task.done; //change the status of the task
      await task.save(); //save the task with the new status
      res.redirect("/");
    } catch (error) {
      console.log(error)
    } 
}

export const saveTask = async (req, res) => {
    try {
      const task = Task(req.body) //get data from form 
      await task.save() //save data on mogodb
      res.redirect("/");
    } catch (error) {
      console.log(error.message)
    }    
}

export const editTask = async(req, res) => {
    const { id } = req.params;
    await Task.findByIdAndUpdate(id, req.body);
    res.redirect('/');
}