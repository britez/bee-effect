import React from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { Redirect } from "react-router";
import RadarCmp from './../components/RadarCmp';
import { fetchUser } from "../stores/users";


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.areas = [
        {name: 'Maxi Britez', stroke: '#e12027', fill:'#e12027'}
      ];
    this.points = ['Management', 'Technology', 'Tools', 'Testing', 'Bussiness', 'Communication'];
    this.state = {};
  }

  componentDidMount( ) {
    if (!this.props.user.id) {
      this.props.fetchUser();
    }
  }

  render() {
    if(this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
        <div className='container home'>
          <Helmet>
              <title>Bee Effect - Home</title>
          </Helmet>
          <div className='row home__header'>
            <div className='col-md-12'>
              <span className='typewriter'> Bienvenido, Maxi!</span>
            </div>
          </div>
          <div className='row  home__content'>
            <div className='col-md-5'>
              <h5 className='home__content__header'>Aquí esta tu resumen</h5>
              <ul className='home__content__items'>
                <li><span><i className="fas fa-award"></i> 6 Objetivos cumplidos!</span></li>
                <li><span><i className="fas fa-handshake"></i> 3 Recomendaciones nuevas!</span></li>
                <li><span><i className="fas fa-medal"></i> Éres el bee-efect del mes!</span></li>
                <li><span><i className="fas fa-star"></i> Tienes 5 nuevos seguidores!</span></li>
              </ul>
            </div>
            <div className='col-md-7 home__chart'>
              <RadarCmp data={this.props.user.stats} stroke='#E12027' fill='#E12027' label={this.props.user.name} dataKey='name' dataKey2='value' data={this.props.user.stats} onClick={(route) => this.setState({redirect: route})}/>
            </div>
          </div>
        </div>
    );
  }
}

Home.serverFetch = fetchUser;

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  fetchUser: fetchUser
};

export default connect( mapStateToProps, mapDispatchToProps )( Home );
