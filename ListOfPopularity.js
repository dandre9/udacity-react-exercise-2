import React, { Component } from 'react';

class ListOfPopularity extends Component {
 render(){
   const favoritedUsersProfile = this.props.profiles.filter(profile => profile.favoriteMovieID === this.props.movieKey)
   
   return(
	<div>
     <h2>{this.props.movies[this.props.movieKey].name}</h2>
     {favoritedUsersProfile.length === 0 ? (
     	<p>None of the current users liked this movie</p>
     ) : (
     	<div>
       		<p>Liked by:</p>
       		<ul>
       			{favoritedUsersProfile.map(userProfile => (
     				<li>{this.props.users[userProfile.userID].name}</li>
     			))}
       		</ul>
       </div>
     )}
    </div>
   )
 }
}

export default ListOfPopularity;