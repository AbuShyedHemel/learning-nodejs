import { Request, Response, Router } from "express";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

let tasks: Task[] = [];
const router = Router();

// Create
router.post("/", (req: Request, res: Response) => {
  const task: Task = {
    id: Date.now(),
    title: req.body.title,
    completed: false,
  };
  tasks.push(task);
  res.status(201).json(task);
});

// Read
router.get("/", (req: Request, res: Response) => {
  res.json(tasks);
});

// Update
router.put("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  tasks = tasks.map((t) => (t.id === id ? { ...t, ...req.body } : t));
  res.json({ message: "Updated" });
});

// Delete
router.delete("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  tasks = tasks.filter((t) => t.id !== id);
  res.json({ message: "Deleted" });
});

export default router;
