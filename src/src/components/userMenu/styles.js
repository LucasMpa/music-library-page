import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color:  #040517;
    width: 30%;
    max-width: 350px;
    height: 100vh;
`;

export const UserInformations = styled.div`
    width: 100%;
    height: 90px;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
        width: 85px;
        height: 85px;
        border-radius: 10px;
    }

    & > div{
       margin-left:10px;
       color: #e5e5e5e7;
    }

    & > div > h2 {
        font-size: 20px;
    }

    & > div > h3 {
        font-size: 15px;
        opacity: 0.4;
        transition: 0.3s;
        cursor: pointer;
    }

    & > div > h3:hover {
        opacity: 1;
    }
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 60%;

    & > div > a {
    text-decoration: none;
    }


    & > div{
        display: flex; 
        align-items: center;
        flex-direction: column;
    }

    & > div > div:not(:first-child){
        margin-top: 10px;

    }

    & > div > div{
        cursor: pointer;
        width: 50%;
        transition: 0.3s;
        opacity: 0.4;
        display: flex;
        align-items: center;
        color: #e5e5e5e7;
        
        & > svg{
            margin-right: 10px;
        }
    }

    & > div > div:hover{
        opacity: 1;
    }

`;
