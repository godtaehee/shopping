import React from "react";
import styled from 'styled-components';
import './detail.scss';

let 박스 = styled.div`
    padding: 20px;
    `;

let Font = styled.h4`
  font-size: 200px;
  color: ${ props => props.color};
`;




function Detail() {
    return (
        <div>
            <Font className="red">
                안안녕
            </Font>
            <Font color={'red'}>
                안녕
            </Font>
        </div>
    )
}

export default Detail;

