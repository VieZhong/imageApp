import React from 'react';

import styles from './styles';

const EffectList = ({chooseEffect}) => {
    return (<div>
        <ul className={styles['effect-list']}>
            <li onClick={() => {chooseEffect('GRAY')}}>灰度</li>
            <li onClick={() => {chooseEffect('BLACK_WHITE')}}>黑白</li>
            <li onClick={() => {chooseEffect('REVERSE')}}>反色</li>
            <li onClick={() => {chooseEffect('RED')}}>红光</li>
            <li onClick={() => {chooseEffect('GREEN')}}>绿光</li>
            <li onClick={() => {chooseEffect('BLUE')}}>蓝光</li>
            <li onClick={() => {chooseEffect('BROWN')}}>泛黄</li>
            <li onClick={() => {chooseEffect('DARK')}}>暗调</li>
        </ul>
    </div>);
}

export default EffectList;