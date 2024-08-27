function Note(props) {
  function handleClick() {
    props.onClick(props.id); // Call the delete function with the note's id
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}
export default Note;
