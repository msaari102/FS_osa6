//import { useSelector } from 'react-redux'
import { connect } from 'react-redux'


const Notification = (props) => {
  //const notification = useSelector(state => state.notification)
  const notification = props.notification
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div>
      {notification === null ?
        <div></div> : 
        <div style={style}>
        {notification}
      </div>
}
    </div>
  )
}

//export default Notification


const mapStateToProps = (state) => {
  return {notification: state.notification}
}

export default connect(
  mapStateToProps,
  null
)(Notification)