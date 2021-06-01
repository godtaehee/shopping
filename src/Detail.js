import React, { useEffect } from "react";
import styled from 'styled-components';
import './detail.scss';

let 박스 = styled.div`
    padding: 20px;
    `;

let Font = styled.h4`
  font-size: 200px;
  color: ${ props => props.color};
`;



function Detail(){

    useEffect(() => {
        const timer = setTimeout(() => {
            document.querySelector('.my-alert').remove();
        },  2000);

        return  () => clearTimeout(timer);
    })

    return (
        <div>
            <div className="my-alert">
                <p>재고가 얼마 남지 않았습니다</p>
            </div>

            <div className="my-alert2">
                <p>재고가 얼마 남지 않았습니다</p>
            </div>
        </div>
    )
}

export default Detail;

