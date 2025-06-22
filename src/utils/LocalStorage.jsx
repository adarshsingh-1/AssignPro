



const employees = [
    {
      "id": 1,
      "firstName": "Aarav",
      "email": "e@e.com",
      "password": "123",
      "taskCount": {
        "active": 2,
        "newTask": 3,
        "completed": 2,
        "failed": 1
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Update website content",
          "description": "Revise landing page copy",
          "date": "2025-06-15",
          "category": "Content Update"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Fix login bug",
          "description": "Resolve error on user login",
          "date": "2025-06-14",
          "category": "Bug Fix"
        },
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Design new logo",
          "description": "Propose logo redesign",
          "date": "2025-06-10",
          "category": "Design"
        },
        {
          "active": false,
          "newTask": true,
          "completed": true,
          "failed": false,
          "title": "Write unit tests",
          "description": "Add test coverage for API endpoints",
          "date": "2025-06-09",
          "category": "Testing"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Client feedback report",
          "description": "Summarize Q2 feedback",
          "date": "2025-06-01",
          "category": "Reporting"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Database migration",
          "description": "Move DB to new server",
          "date": "2025-05-28",
          "category": "Database Migration"
        }
      ]
    },
    {
      "id": 2,
      "firstName": "Ishita",
      "email": "ishita@example.com",
      "password": "123",
      "taskCount": {
        "active": 1,
        "newTask": 2,
        "completed": 3,
        "failed": 1
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Organize meeting",
          "description": "Schedule team sync",
          "date": "2025-06-12",
          "category": "Meeting"
        },
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Prepare slides",
          "description": "Create slides for presentation",
          "date": "2025-06-10",
          "category": "Presentation"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Submit report",
          "description": "Send final copy to client",
          "date": "2025-06-07",
          "category": "Reporting"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Bug fix verification",
          "description": "Check fixed issues",
          "date": "2025-06-05",
          "category": "Testing"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Backup files",
          "description": "Perform cloud backup",
          "date": "2025-06-02",
          "category": "Backup"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Code refactor",
          "description": "Improve readability",
          "date": "2025-05-30",
          "category": "Code Maintenance"
        }
      ]
    },
    {
      "id": 3,
      "firstName": "Devansh",
      "email": "devansh@example.com",
      "password": "123",
      "taskCount": {
        "active": 2,
        "newTask": 2,
        "completed": 2,
        "failed": 0
      },
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "User onboarding",
          "description": "Automate welcome emails",
          "date": "2025-06-11",
          "category": "User Management"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Write blog post",
          "description": "Draft monthly newsletter",
          "date": "2025-06-12",
          "category": "Content Creation"
        },
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Test mobile app",
          "description": "Check for UI bugs",
          "date": "2025-06-08",
          "category": "Testing"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Deploy update",
          "description": "Push new version live",
          "date": "2025-06-06",
          "category": "Deployment"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Clean old files",
          "description": "Delete unused assets",
          "date": "2025-06-03",
          "category": "Maintenance"
        }
      ]
    },
    {
      "id": 4,
      "firstName": "Meera",
      "email": "meera@example.com",
      "password": "123",
      "taskCount": {
        "active": 3,
        "newTask": 2,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "UI review",
          "description": "Review new layout changes",
          "date": "2025-06-14",
          "category": "Design Review"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Data cleanup",
          "description": "Remove redundant entries",
          "date": "2025-06-13",
          "category": "Data Management"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Draft report",
          "description": "Summarize metrics",
          "date": "2025-06-10",
          "category": "Reporting"
        },
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Conduct audit",
          "description": "Security review",
          "date": "2025-06-05",
          "category": "Security"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Customer response",
          "description": "Send thank-you emails",
          "date": "2025-06-01",
          "category": "Customer Service"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Payment reconciliation",
          "description": "Check invoice payments",
          "date": "2025-05-29",
          "category": "Finance"
        }
      ]
    },
    {
      "id": 5,
      "firstName": "Rajeev",
      "email": "rajeev@example.com",
      "password": "123",
      "taskCount": {
        "active": 1,
        "newTask": 1,
        "completed": 2,
        "failed": 1
      },
      "tasks": [
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "SEO Optimization",
          "description": "Improve page speed",
          "date": "2025-06-13",
          "category": "Performance"
        },
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Generate leads",
          "description": "Research target clients",
          "date": "2025-06-10",
          "category": "Lead Generation"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Social media updates",
          "description": "Post weekly content",
          "date": "2025-06-06",
          "category": "Social Media"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "API testing",
          "description": "Validate endpoints",
          "date": "2025-06-04",
          "category": "Testing"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Inventory report",
          "description": "List missing stock",
          "date": "2025-06-01",
          "category": "Customer Service"
        }
      ]
    }
  ]



const admin = [
  {
    id: 1,
    firstName: "Admin",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const admin = JSON.parse(localStorage.getItem("admin")) || [];
  // console.log({ employees, admin });

  return { employees, admin };
};
