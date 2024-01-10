const List = (props) => {
  { /* Change code below this line */ }
  return <p>{props.tasks.join(', ')}</p>
  { /* Change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Change code below this line */ }
        <List tasks={["Work", "Eat", "Drink"]}/>
        <h2>Tomorrow</h2>
        <List tasks={["Play", "Code", "Dance"]}/>
        { /* Change code above this line */ }
      </div>
    );
  }
};