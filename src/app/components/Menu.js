import React from "react";
import { connect } from "react-redux";

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = { open: false }
  }

  render() {
    return (
      <div className={`menu ${this.state.open?'menu--open':''}`}>
        <img src='/static/profile.jpg' className='menu__profile' onClick={()=> this.setState({open:!this.state.open})}/>
        <div className='menu__aside'>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Menu);
