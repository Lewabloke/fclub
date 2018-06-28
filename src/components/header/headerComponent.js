import React,{ Component } from 'react';

class Navigation extends Component {
    render() {
   return( 
<header classNameNameName="top-area" id="home">
<div classNameNameName="header-top-area">
<div classNameNameName="mainmenu-area" id="mainmenu-area">
<div classNameNameName="mainmenu-area-bg"></div>
<nav classNameNameName="navbar">
<div classNameNameName="container-fluid">
<div classNameNameName="navbar-header">
<a href="#home" classNameNameName="navbar-brand">FClub DevC</a>
</div>
<div id="main-nav" classNameNameName="stellarnav">
<div classNameNameName="search-and-signup-button white pull-right hidden-md hidden-sm hidden-xs">
<button data-toggle="collapse" data-target="#search-form-switcher"><i classNameNameName="fa fa-search"></i></button>
<a href="#" classNameNameName="sign-up">Log in</a>
</div>
<ul id="nav" classNameNameName="nav">
<li><a href="#home">Get Started</a></li>
</ul>
</div>
</div>
</nav>
<div id="search-form-switcher" classNameName="search-collapse-area collapse white">
<div classNameName="container">
<div classNameName="row">
<div classNameName="col-md-12 col-xs-12">
<div classNameName="white">
<form action="#" classNameName="search-form">
<input type="search" name="search" id="search" placeholder="Search Here.."/>
<button type="submit"><i classNameName="fa fa-search"></i></button>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="welcome-text-area white">
<div className="area-bg"></div>
<div className="welcome-area">
<div className="container">
<div className="row flex-v-center">
<div className="col-md-7 col-lg-7 col-sm-12 col-xs-12">
<div className="welcome-mockup center">
<img src="img/home/watch-mockup.png" alt=""/>
</div>
</div>
<div className="col-md-7 col-lg-7 col-sm-12 col-xs-12">
<div className="welcome-text">
<h1>Welcome To FClub Dev</h1>
<p>Join millions of schools in learning tech courses remotely</p>
<div className="home-button">
<a href="#">Read more</a>
<a href="#">Get started</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>
   )
    }
}

export default Navigation;