'use strict';

//import React, {Component } from 'react';
const e = React.createElement;

class AF extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            data: {},
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
                <a-scene embedded artoolkit='sourceType: webcam; sourceWidth: 240; sourceHeight: 180;' render="antialias: true" arjs="debugUIEnabled: false;" vr-mode-ui="enabled: false;">
                    <a-marker preset="hiro">
                        <a-text value="Wh" rotation="-90 0 0" position="0.3 0 0" z-offset="1" anchor="align">
                        </a-text>
                        <a-text value={this.state.data.nombre} rotation="-90 0 0" position="0 0 0" z-offset="1" anchor="align" material="shader: flat">
                        </a-text>
                        <a-text value="Consommation :" rotation="-90 0 0" position="-1.7 0 0" z-offset="1" anchor="align">
                        </a-text>
                        {/*<a-text value="haut" rotation="-90 0 0" position="0 1 0" z-offset="1" anchor="align">*/}
                        {/*</a-text>*/}
                        {/*<a-text value="bas" rotation="-90 0 0" position="0 -1 0" z-offset="1" anchor="align">*/}
                        {/*</a-text>*/}
                        {/*<a-text value="avant" rotation="-90 0 0" position="0 0 -1" z-offset="1" anchor="align">*/}
                        {/*</a-text>*/}
                        {/*<a-text value="arriere" rotation="-90 0 0" position="0 0 1" z-offset="1" anchor="align">*/}
                        {/*</a-text>*/}
                        {/*<a-text value="*" rotation="-90 0 0" position="1 0 1" z-offset="1" anchor="align">*/}
                        {/*</a-text>*/}
                        {/*<a-text value="*" rotation="-90 0 0" position="-1 0 -1" z-offset="1" anchor="align">*/}
                        {/*</a-text>*/}
                        {/*<a-text value="*" rotation="-90 0 0" position="1 0 -1" z-offset="1" anchor="align">*/}
                        {/*</a-text>*/}
                        {/*<a-text value="*" rotation="-90 0 0" position="-1 0 1" z-offset="1" anchor="align">*/}
                        {/*</a-text>*/}
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


