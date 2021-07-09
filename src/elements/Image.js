import styled from 'styled-components';
import React from "react"

const Image = (props) => {
    const {shape, src, size} = props;

    const styles = {
        src: src,
        size: size,
        
    }
    if (shape === "circle"){
        return (
            <ImageCircle {...styles}></ImageCircle>
        )
    }

    if(shape === "rectangle") {
        return (
            <AspectOutter>
                <AspectInner {...styles}></AspectInner>
            </AspectOutter>
        )
    }
    if(shape === "rectangle2") {
        return (
            <AspectOutter2>
                <AspectInner {...styles}></AspectInner>
            </AspectOutter2>
        )
    }
    return (
        <React.Fragment>
            <ImageDefault {...styles}></ImageDefault>
        </React.Fragment>
    )
}

Image.defaultProps = {
    shape: "circle",
    src: "data:image/jpeg;base64,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",
    size: 36,
}

const ImageDefault = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    background-image: url("${(props) => props.src}");
    background-size: cover;
`;

const AspectOutter = styled.div`
    width: 100%;
    min-width: 250px;
`;

const AspectOutter2 = styled.div`
    width: 50%;
    min-width: 250px;
`;

const AspectInner = styled.div`
    position: relative;
    padding-top: 75%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
`;

const ImageCircle = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);
    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin: 4px;
`;

export default Image;