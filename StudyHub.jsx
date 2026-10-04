import { useEffect, useState } from "react";

import StudyTask from "./components/StudyTask";
import TaskInput from "./components/TaskInput";

import "./App.css";

function StudyHub() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Submit Software Engineering Report",
      category: "TASK 1",
    },
    {
      id: 2,
      title: "Complete React Lab Challenge",
      category: "TASK 2",
    },
    {
      id: 3,
      title: "Prepare Final Project Presentation",
      category: "TASK 3",
    },
    {
      id: 4,
      title: "Review Library Research Material",
      category: "TASK 4",
    },
  ]);

  useEffect(() => {
    console.log("Task list updated!");
    console.log("Total number of tasks:", tasks.length);
  }, [tasks]);

  const addTask = (title) => {
    const taskNumber = tasks.length + 1;

    const newTask = {
      id: taskNumber,
      title: title,
      category: `TASK ${taskNumber}`,
    };

    setTasks((previousTasks) => [
      ...previousTasks,
      newTask,
    ]);
  };

  return (
    <div className="app">

      {/* HEADER */}
      <header className="top-bar">

        <div className="brand-area">

          <div className="brand-symbol">
            ST
          </div>

          <div>
            <h1>STUDY TASK HUB</h1>
            <p>STUDENT TASK MANAGEMENT</p>
          </div>

        </div>

        <div className="system-status">
          <span className="status-dot"></span>
          STUDY HUB ONLINE
        </div>

      </header>

      {/* MAIN */}
      <main className="dashboard">

        {/* HERO */}
        <section className="hero-section">

          <div className="hero-content">

            <p className="overline">
              STUDENT WORKSPACE / DAILY PLANNER
            </p>

            <h2>
              ORGANIZE YOUR
              <br />
              STUDY <span>TASKS.</span>
            </h2>

            <p className="hero-text">
              Manage academic work, laboratory
              activities, projects and study
              responsibilities through one organized
              student dashboard.
            </p>

          </div>

          <div className="task-counter">

            <span>TASK LOAD</span>

            <strong>
              {tasks.length}
            </strong>

            <small>
              ACTIVE TASKS
            </small>

          </div>

        </section>

        {/* ADD TASK */}
        <section className="command-panel">

          <div className="panel-heading">

            <p className="overline">
              QUICK ACCESS
            </p>

            <h3>
              ADD NEW TASK
            </h3>

          </div>

          <TaskInput onAddTask={addTask} />

        </section>

        {/* TASK BOARD */}
        <section className="task-board">

          <div className="board-heading">

            <div>

              <p className="overline">
                CURRENT STUDY WORK
              </p>

              <h3>
                STUDY TASK BOARD
              </h3>

            </div>

            <div className="board-count">
              {tasks.length} ACTIVE
            </div>

          </div>

          {/* TASK CARDS */}
          <div className="task-grid">

            {tasks.map((task) => (
              <StudyTask
                key={task.id}
                task={task}
              />
            ))}

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer>

        <span>
          STUDY TASK HUB
        </span>

        <span>
          REACT MINI PROJECT • STUDENT TASK MANAGEMENT
        </span>

      </footer>

    </div>
  );
}

export default StudyHub;