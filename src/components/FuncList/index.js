import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles';

class FuncList extends React.Component {
    constructor() {
        super();
        this.state = {
            funcs: ['edit', 'paint', 'effect', 'border', 'group']
        };
    }

    render() {
        let itemClasses = {};
        this.state.funcs.forEach((fun) => {
            if(fun == this.props.func){
                itemClasses[fun] = styles['nav-item-active'];
            }else{
                itemClasses[fun] = styles['nav-item'];
            }
        });
        return (
            <ul className={styles['nav']} onClick={this.activeItem}>
                <li className={styles['nav-header']}>功能导航</li>
                <li data-index='0' className={itemClasses['edit']}><Link to="/edit">图片编辑</Link></li>
                <li data-index='1' className={itemClasses['paint']}><Link to="/paint">图片涂鸦</Link></li>
                <li data-index='2' className={itemClasses['effect']}><Link to="/effect">滤镜效果</Link></li>
                <li data-index='3' className={itemClasses['border']}><Link to="/border">边框选择</Link></li>
                <li data-index='4' className={itemClasses['group']}><Link to="/group">图片组合</Link></li>
            </ul>
        );
    }

}

export default FuncList;