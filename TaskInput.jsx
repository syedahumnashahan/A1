import { useState } from "react";


function TaskInput({ onAddTask }) {


  const [taskTitle, setTaskTitle] = useState("");


  const handleSubmit = (event) => {

    event.preventDefault();


    if (taskTitle.trim() === "") {

      return;

    }


    onAddTask(
      taskTitle.trim()
    );


    setTaskTitle("");

  };


  return (

    <form
      className="task-form"
      onSubmit={handleSubmit}
    >


      <div className="input-area">


        <span className="input-symbol">

          +

        </span>


        <input

          type="text"

          value={taskTitle}

          placeholder="ENTER YOUR NEXT STUDY TASK..."

          onChange={(event) =>

            setTaskTitle(
              event.target.value
            )

          }

        />


      </div>



      <button type="submit">

        ADD TASK

      </button>


    </form>

  );
}
export default TaskInput;