import * as React from 'react'
import Footer from './Footer'
import { connect } from 'react-redux'

class FooterContainer extends React.Component {


changePhoto = () => {
  this.props.dispatch({
    type: 'CHANGE_PHOTO',
    payload: {
      currentIndex: "" //what data type? where to define and store it?
    }
  }
  )
}

render() {
  return <Footer changePhoto={this.changePhoto} />
}
}

export default connect()(FooterContainer);