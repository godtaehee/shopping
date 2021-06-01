import React from "react";
import { useHistory, useParams } from "react-router-dom";

function Detail(props) {
    let history = useHistory();
    const {id} = useParams();

    const shoose = props.shoose.filter((val, idx) => {
        return props.shoose[idx].id === id*1;
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={shoose[0].src} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">상품명</h4>
                    <p>{shoose[0].title}</p>
                    <p>{shoose[0].content}</p>
                    <button className="btn btn-danger">주문하기</button>
                    <button onClick={ () => {
                        history.goBack()
                    }} className="btn btn-danger">뒤로가기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail;