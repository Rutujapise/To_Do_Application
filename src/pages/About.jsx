import React from "react";

const About = () => {
  return (
    <div className="container mt-5">
      {/* Page Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">About This ToDo App</h1>
        <p className="text-muted">
          A simple and powerful task manager built with React and Bootstrap.
        </p>
      </div>

      {/* About Sections */}
      <div className="row g-4">
        {/* App Purpose */}
        <div className="col-md-6">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h4 className="card-title text-primary">🎯 Our Goal</h4>
              <p className="card-text text-secondary">
                This app helps you stay productive and organized by allowing you
                to create, search, filter, and manage tasks easily. Whether you
                are a student, professional, or just managing daily chores —
                this ToDo app makes life easier.
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="col-md-6">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h4 className="card-title text-primary">⚡ Features</h4>
              <ul className="list-unstyled text-secondary">
                <li>✅ Add, edit, and delete tasks</li>
                <li>🔎 Search tasks by name or description</li>
                <li>📂 Filter by Completed / Incomplete</li>
                <li>📱 Responsive and mobile-friendly</li>
                <li>💾 Stores tasks in local storage</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="col-md-6">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h4 className="card-title text-primary">🛠️ Technologies Used</h4>
              <p className="card-text text-secondary">
                This project is built using the latest technologies:
              </p>
              <ul className="list-unstyled text-secondary">
                <li>⚛️ React.js for building UI</li>
                <li>🎨 Bootstrap 5 for styling</li>
                <li>🗄️ Context API for state management</li>
                <li>💡 JavaScript (ES6+) for logic</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Motivation */}
        <div className="col-md-6">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h4 className="card-title text-primary">🚀 Why This Project?</h4>
              <p className="card-text text-secondary">
                This ToDo App was created to practice **React concepts** like
                hooks, context, state management, and reusable components while
                also focusing on building a clean and modern UI. It’s both a
                learning project and a useful daily tool.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Message */}
      <div className="text-center mt-5">
        <h5 className="text-muted">
          Made with ❤️ using React & Bootstrap
        </h5>
      </div>
    </div>
  );
};

export default About;
