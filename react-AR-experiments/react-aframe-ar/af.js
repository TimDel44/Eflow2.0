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
                <a-scene embedded artoolkit='sourceType: webcam; sourceWidth: 240; sourceHeight: 180;' render="antialias: true" outline>
                    <a-marker preset="hiro">

                        {/*<a-entity*/}
                        {/*    position="1 0.5 0"*/}
                        {/*    rotation="-90 0 0"*/}
                        {/*    geometry="primitive: plane; width: 4; height: auto"*/}
                        {/*    material="visible: false"*/}
                        {/*    text="value: Ceci est un texte.">*/}
                        {/*</a-entity>*/}
                        <a-text value="droite" rotation="-90 0 0" position="1 0 0" z-offset="1" anchor="align">
                        </a-text>
                        <a-text value={this.state.data} rotation="-90 0 0" position="0 0 0" z-offset="1" anchor="align">
                        </a-text>
                        <a-text value="gauche" rotation="-90 0 0" position="-1 0 0" z-offset="1" anchor="align">
                        </a-text>
                        <a-text value="haut" rotation="-90 0 0" position="0 1 0" z-offset="1" anchor="align">
                        </a-text>
                        <a-text value="bas" rotation="-90 0 0" position="0 -1 0" z-offset="1" anchor="align">
                        </a-text>
                        <a-text value="avant" rotation="-90 0 0" position="0 0 -1" z-offset="1" anchor="align">
                        </a-text>
                        <a-text value="arriere" rotation="-90 0 0" position="0 0 1" z-offset="1" anchor="align">
                        </a-text>
                        <a-text value="*" rotation="-90 0 0" position="1 0 1" z-offset="1" anchor="align">
                        </a-text>
                        <a-text value="*" rotation="-90 0 0" position="-1 0 -1" z-offset="1" anchor="align">
                        </a-text>
                        <a-text value="*" rotation="-90 0 0" position="1 0 -1" z-offset="1" anchor="align">
                        </a-text>
                        <a-text value="*" rotation="-90 0 0" position="-1 0 1" z-offset="1" anchor="align">
                        </a-text>
                        {/*<a-entity  position="1 0.5 0"*/}
                        {/*           rotation="-90 0 0"*/}
                        {/*           geometry="primitive:plane"*/}
                        {/*           material="shader: ocean; color: blue; wave-height: 10">*/}

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


