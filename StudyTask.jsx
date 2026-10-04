function StudyTask({ task }) {

  return (

    <article className="task-card">


      {/* CARD HEADER */}

      <div className="card-header">


        <span className="task-id">

          TASK #

          {String(task.id).padStart(2, "0")}

        </span>


        <span className="active-label">

          ACTIVE

        </span>


      </div>



      {/* CARD CONTENT */}

      <div className="card-content">


        <span className="task-category">

          {task.category}

        </span>


        <h3>

          {task.title}

        </h3>


        <p>

          This study task is currently listed
          on your personal learning board.

        </p>


      </div>



      {/* CARD FOOTER */}

      <div className="card-footer">


        <span>
          STATUS
        </span>


        <span className="status-line">

          ● IN PROGRESS

        </span>


      </div>


    </article>

  );
}


export default StudyTask;