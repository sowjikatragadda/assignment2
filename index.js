import React, {Component} from 'react';

//var bg=require('http://via.placeholder.com/778x368');

class App extends Component {
    render() {
        return (
            <div>

                <header>
                    <div className="container">
                        <img src="https://www.massmutual.com/global-images/logo_MM-white.svg" alt="MassMutual logo"/>
                    </div>
                </header>

                <main className="container">

                    <div>
                        <h1>MassMutual</h1>
                        <h2>Coding Exercise</h2>
                        <p>Here is a simple coding exercise for front end development at MassMutual.
                            What we are hoping is that you'll take roughly an hour, two max, to style this page
                            to match the image. Please note that some styles on this page will differ
                            slightly from our live site.</p>
                    </div>

                    <div className="row">
                        <div className="mm-card col-md-4">
                            <div className="image">
                                <img src="http://via.placeholder.com/778x368"/></div>
                            <div className="content">
                                <p>CATEGORY</p>
                                <h2>Card Title</h2>
                                <p>The title above should use the same style as the h2 at the top of this page but not
                                    be an H2 itself.</p>
                                <footer>
                                    <input className="btn-primary" type="button" value="A button!"/>
                                </footer>
                            </div>
                        </div>
                        <div className="mm-card col-md-4">
                            <div className="image">
                                <img src="http://via.placeholder.com/778x368"/></div>
                            <div className="content">
                                <p>CATEGORY</p>
                                <h2>Card Title</h2>
                                <p>The title above should use the same style as the h2 at the top of this page but not
                                    be an H2 itself.</p>
                                <footer>
                                    <a href="#" target="_self">A Link!</a>
                                </footer>
                            </div>
                        </div>
                        <div className="mm-card col-md-4">
                            <div className="image">
                                <img src="http://via.placeholder.com/778x368"/></div>
                            <div className="content">
                                <p>CATEGORY</p>
                                <h2>Card Title</h2>
                                <p>The title above should use the same style as the h2 at the top of this page but not
                                    be an H2 itself.</p>
                                <p>This card has extra content in it and so it's content is taller than other cards</p>
                                <footer >
                                    <div>Just text</div>
                                <br/>
                                    <div>legal text</div>
                                </footer>
                            </div>
                        </div>
                    </div>

                </main>


            </div>


        );
    }
}

export default App;