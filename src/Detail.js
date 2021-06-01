import React from "react";
import { useHistory, useParams } from "react-router-dom";

function Detail(props) {
    let history = useHistory();
    const {id} = useParams();
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    {id}
                    <h4 className="pt-5">상품명</h4>
                    <p>{props.shoose[id].title}</p>
                    <p>{props.shoose[id].content}</p>
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