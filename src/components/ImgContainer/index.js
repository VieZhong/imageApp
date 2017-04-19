import React from 'react';

import exampleImgUrl from '../../asserts/example.jpg'
import styles from './styles';


class ImgContainer extends React.Component {
    constructor({imgData, save, cancel}) {
        super();
        this.state = {
            imgData: imgData
        };
        this.cancelHandler = this.cancelHandler.bind(this);
        this.saveHandler = this.saveHandler.bind(this);
    }

    cancelHandler() {
        if(this.props.orginData.data){
            this.props.cancel(this.props.orginData);
        }
    }

    saveHandler() {
        if(this.props.imgData.data){
            this.setState({
                imgData: this.props.imgData
            });
            this.props.save(this.props.imgData);
        }
    }

    componentWillReceiveProps({imgData}) {
        if(imgData.data){
            this.refs.canvas.getContext('2d').putImageData(imgData, 0, 0);
        }
    }

    componentDidMount () {
        if(!this.state.imgData.data) {
            let img = new Image();
            img.src = exampleImgUrl;
            img.onload = () => {
                let ctx = this.refs.canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, 600, 600);
                this.setState({
                    imgData: ctx.getImageData(0, 0, 600, 600)
                });
                this.props.save(this.state.imgData);
            }
        }
    }

    render() {
        return (<div>
            <div className={styles['image-box']}>
                <canvas width="600" height="600" ref="canvas" className={styles['canvas']}></canvas>
            </div>
            <div className={styles['button-group']}>
                <button onClick={this.cancelHandler}>取消</button>
                <button onClick={this.saveHandler}>保存</button>
            </div>
        </div>);
    }
}


export default ImgContainer;