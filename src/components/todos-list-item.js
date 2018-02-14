import React from 'react';

export default class TodosListItem extends React.Component {
    constructor(props) {
      super(props);

      this.state= {
        isEditing: false
      };
    }

    renderTaskSection() {
      const { task, isCompleted } = this.props;
console.log(this.props);
      const taskStyle = {
        color: isCompleted ? 'green' : 'red',
        cursor: 'pointer'
      };

      return (
        <td style={taskStyle}
            onClick={this.props.toggleTask.bind(this, task)}
          >
            {task}
        </td>
      );
    }

    renderActionsSection() {
      if (this.state.isEditing) {
        return (
        <td>
          <button onClick={this.onSaveClick.bind(this)}>Save</button>
          <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </td>
        );
      }

      return (
        <td>
          <button onClick={this.onEditClick.bind(this)}>Edit</button>
          <button onClick={this.onDeleteClick.bind(this)}>Delete</button>
        </td>
      );
    }

  render() {
    return (
          <tr>
              {this.renderTaskSection()}
              {this.renderActionsSection()}
          </tr>
    );
  }

  onEditClick() {
    this.setState({ isEditing: true});
  }

  onCancelClick(){
    this.setState({ isEditing: false});
  }

  onSaveClick(){
    this.setState({ isEditing: false});
  }

  onDeleteClick(){
    console.log("hi")
  }
}
