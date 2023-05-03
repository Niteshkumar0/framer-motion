import { motion } from "framer-motion";
import styled from "styled-components";

export let Section = styled.section`
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#131313;

`;


export let Container = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    height:100vh;
    padding:3rem calc((100vw - 1300px) / 2);

    @media screen and (max-width : 768px) {
        grid-template-columns:1fr;
    }
`;  

export let ColumnLeft = styled.div`
    display:flex;
    color:#fff;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:5rem 2rem;

    h1{
        margin-bottom:0.5rem;
        font-size:2rem;
    }

    p{
        margin:2rem 0;
        font-size:4rem;
        line-height:1.1
    }

`;
export let Button = styled(motion.button)`
    padding:1rem 3rem;
    font-size:1rem;
    border:2px solid #fff;
    border-radius:4px;
    outline:none;
    cursor:pointer;
    background:transparent;

`;
export let Image = styled(motion.img)`
    position:absolute;
    width:100%;
    height:100%;
    max-width:250px;
    max-height:250px;
`;
export let ColumnRight = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:2rem;
    positon:relative;

    ${Image}:nth-child(1){
        top:10px;
        right:400px;
    } 
    ${Image}:nth-child(2){
        top:100px;
        right:50px;
    }
    ${Image}:nth-child(3){
        top:350px;
        left:580px;
    }
    ${Image}:nth-child(4){
        bottom:45px;
        right:75px;
    }
`
