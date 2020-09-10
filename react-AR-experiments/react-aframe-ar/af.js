'use strict';

//import React, {Component } from 'react';
const e = React.createElement;

class AF extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            data: null,
        }
    }
    fetchData() {


        fetch('http://83.159.212.218')
            .then(response=> response.json())
            .then(data=>
                this.setState ({data
            }))
            .catch()
            .finally()




    }
     componentDidMount() {

         setInterval(() => this.fetchData(), 1000);
         
     }





    render() {


            return (
            <div>
                <p> Donc le nombre est {this.state.data} </p>
                <a-scene embedded artoolkit='sourceType: webcam; sourceWidth: 240; sourceHeight: 180;'
                         render="antialias: true" outline>
                    <a-marker preset="hiro">

                        <a-text value= {this.state.data}  >

                        </a-text>
                        {/*<a-entity*/}
                        {/*    position="1 0.5 0"*/}
                        {/*    rotation="-90 0 0"*/}
                        {/*    geometry="primitive: plane; width: 4; height: auto"*/}
                        {/*    material="visible: false"*/}
                        {/*    text="value: {this.state.data}">*/}
                        {/*</a-entity>*/}
                    </a-marker>
                    <a-entity camera></a-entity>
                </a-scene>
            </div>
        );
    }
}

const domContainer = document.querySelector('#marker');
ReactDOM.render(e(AF), domContainer);


