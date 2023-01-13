import { Router } from "express"; //express routes
import {
  deleteTask,
  editTask,
  renderEditTask,
  renderTask,
  saveTask,
  toggleDone,
} from "../controllers/task.controller"; //import the controllers

const router = Router();

//main page

//GET
//show all the tasks
router.get("/", renderTask);
//edit page (show the data from task to update)
router.get("/edit/:id", renderEditTask);
//delete a task
router.get("/delete/:id", deleteTask);
//change status of the tasks
router.get("/toggleDone/:id", toggleDone);
//POST
//save route (save task)
router.post("/tasks/add", saveTask);
//edit a task
router.post("/edit/:id", editTask);

export default router;
