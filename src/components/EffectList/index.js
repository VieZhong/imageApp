import React from 'react';

import styles from './styles';

const EffectList = ({chooseEffect}) => {
    return (<div>
        <ul className={styles['effect-list']}>
            <li onClick={() => {chooseEffect('GRAY')}}>黑白</li>
            <li onClick={() => {chooseEffect('OTHER')}}>锐化</li>
            <li onClick={() => {chooseEffect('OTHER')}}>反转</li>
        </ul>
    </div>);
}

export default EffectList;