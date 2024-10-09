const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

let projects = []; // This will store projects in memory (not persistent)

// Routes

// GET /projects: Get all projects
app.get('/projects', (req, res) => {
  res.json(projects);
});

// GET /projects/:id: Get a single project by ID
app.get('/projects/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) return res.status(404).send('Project not found.');
  res.json(project);
});

// POST /projects: Create a new project
app.post('/projects', (req, res) => {
  const { name, description, deadline } = req.body;
  const newProject = {
    id: projects.length + 1, // Simple ID assignment (for demo purposes)
    name,
    description,
    deadline,
  };
  projects.push(newProject);
  res.status(201).json(newProject);
});

// PUT /projects/:id: Update an existing project
app.put('/projects/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) return res.status(404).send('Project not found.');

  const { name, description, deadline } = req.body;
  project.name = name || project.name;
  project.description = description || project.description;
  project.deadline = deadline || project.deadline;

  res.json(project);
});

// DELETE /projects/:id: Delete a project by ID
app.delete('/projects/:id', (req, res) => {
  const projectIndex = projects.findIndex(p => p.id === parseInt(req.params.id));
  if (projectIndex === -1) return res.status(404).send('Project not found.');

  const deletedProject = projects.splice(projectIndex, 1);
  res.json(deletedProject);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
