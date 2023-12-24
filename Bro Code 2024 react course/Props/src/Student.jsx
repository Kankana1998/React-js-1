//PropTypes - a maechanism that ensures that the passed value is of the correct datatype. age: PropTypes.number
function Student(props) {
  return (
    <div className='student'>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "Yes": "No"}</p>
    </div>
  )
}

export default Student