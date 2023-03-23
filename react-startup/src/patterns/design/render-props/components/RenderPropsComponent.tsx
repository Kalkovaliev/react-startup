import React from "react";
import { render } from "react-dom";


const Title = (props: any) =>
    <>
        {props.renderFirstComponent()}
        {props.renderSecondComponent()}
        {props.renderThirdComponent()}
    </>


const RenderPropsComponent = () => {
    return (
        <div>
            <Title renderFirstComponent={() => <h1>✨ First render prop! ✨</h1>}
                renderSecondComponent={() => <h2>🔥 Second render prop! 🔥</h2>}
                renderThirdComponent={() => <h3>🚀 Third render prop! 🚀</h3>} />
        </div>
    );
}
export default RenderPropsComponent;
