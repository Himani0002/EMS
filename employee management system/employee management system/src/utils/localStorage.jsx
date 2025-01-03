const data = {
  employees: [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: "Design Homepage",
          taskDescription: "Create the homepage layout with responsive design.",
          taskDate: "2025-01-03",
          category: "Design",
        },
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          taskTitle: "Fix Login Bug",
          taskDescription: "Resolve the issue with incorrect login validation.",
          taskDate: "2025-01-01",
          category: "Development",
        },
      ],
    },
    // Other employee data...
  ],
  admin: {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
};

console.log(data);

// Corrected functions
export const setLocalStorage = () => {
  localStorage.setItem("data", JSON.stringify(data));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("data"));
  return (employees);
};

