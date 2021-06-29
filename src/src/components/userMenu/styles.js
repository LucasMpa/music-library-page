import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color:  #040517;
    width: 30%;
    max-width: 350px;

    @media(max-width: 800px) {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: rgb(4, 5, 23);
        overflow-x: hidden;
        transition: 0.5s;
        display:  ${props => props.showMenu === true ? 'block' : 'none'};
        transition: 0.5s;
        width: 100%;
    }
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

export const ContainerCloseMenu = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    @media(min-width: 801px) { 
        & > svg{
            display: none;
        }
    }
    
    & > svg{
        font-size: 25px;
        margin: 10px; 
        color : #e5e5e5e7 ;
    }
`;

export const Actions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 60%;

    @media(max-width: 800px) { 
        margin-top: 20%;
    }

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
