import React from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { fetchAreas } from './../stores/areas';


class Areas extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount( ) {
    if (this.props.areas.length === 0) {
      this.props.fetchAreas();
    }
  }


  render() {
      return (
          <div className='container areas'>
            <Helmet>
                <title>Bee Effect - Areas</title>
            </Helmet>
            <div className='row areas__header'>
              <div className='col-md-12'>
                <span className='typewriter'>Áreas</span>
              </div>
            </div>
            <div className='row areas__content'>
              <div className='col-md-4'>
                <h5>Management</h5>
              </div>
              <div className='col-md-4'>
                <h5>Technology</h5>
              </div>
              <div className='col-md-4'>
                <h5>Tools</h5>
              </div>
              <div className='col-md-4'>
                <h5>Testing</h5>
              </div>
              <div className='col-md-4'>
                <h5>Bussiness</h5>
              </div>
              <div className='col-md-4'>
                <h5>Communication</h5>
              </div>
            </div>
          </div>
      );
  }
}

//Areas.serverFetch = fetchAreas;

const mapStateToProps = (state) => ({
  areas: state.areas,
});

const mapDispatchToProps = {
  fetchAreas: fetchAreas
};

export default connect( mapStateToProps, mapDispatchToProps )( Areas );
