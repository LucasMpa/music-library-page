import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: rgb(32, 15, 86);
    width: 100vw;
    height: 100vh;
`;

export const SelectLanguage = styled.div`
    display: flex;
    justify-content: space-between;

    @media(min-width: 801px) { 
        & > span{
            display: none;
        }
    }

    & > span{
        display: flex;
        align-items: flex-end;

        & > svg{
            font-size: 32px;
        }

        @media(min-width: 801px) { 
            & > svg{
                display: none;
            }
        }
        

    }
    & > div {
        display: flex;;

         & > div{
        margin-top: 21px;
        opacity: 0.3;
        transition: 0.5s;
        display: flex;
        }

        & > div:hover{
            cursor: pointer;
            opacity: 1;
        }

        & > div:first-child{
            opacity: ${props => props.language === 'portuguese' && 1};
            margin-right: 25px;
        }

        & > div:nth-child(2){
            opacity: ${props => props.language === 'english' && 1};
        }
    }

   
`;

export const FeaturedPlaylists = styled.div`
    flex-direction: row;

    & > h1 {
        color: #e5e5e5e7;
    }
`;


export const ContentProfile = styled.div`

    display: flex;
    width: 60vw;
    margin-top: 30px;
    color: #e5e5e5e7 ;

    @media(max-width: 800px) {
        flex-direction: column;
        width: 80%;
    }


`;
export const ProfileView = styled.div`
    flex-direction: column;
    width: 40%;

    @media(max-width: 800px) {
        width: 80%;
    }

    & > h2 {
        margin-bottom: 30px;
    }
    & > div {
        display: flex;
        margin-bottom: 30px;
        opacity: 0.5;
        @media(max-width: 800px) {
            opacity: 1;
        }
    }

    & > div:hover {
        cursor: pointer;
        opacity: 1;
        transition: 0.3s;
    }

    & > div > div{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 10px;

        & > h5, h4{
        margin: 0;
        }
        
    }
    & > div > img{
        border-radius: 15px;
        width: 80px;
        height: 80px;
    }
`;

export const Tracks = styled.div`
    flex-direction: column;
    width: 60%;

     @media(max-width: 800px) {
        width: 100%;
    }
`;

export const ScrollableContent = styled.div`
    display: flex;
    width: 60vw;
    overflow-x: scroll;

    @media(max-width: 800px) {
        width: 80vw;
    }

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: rgb(47, 18, 140);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
        background-color:rgb(22, 10, 62);
        border-radius: 4px;
    }
    
    & > div {
        margin: 10px 10px 0 10px;
        display: flex;
        flex-direction: column;
        color: #e5e5e5e7;
        cursor: pointer;
        
        & > div > h2{
            margin-top: 12px;
        }

        & > div > h5{
            margin: 10px 0px;
            opacity: 0.5;
        }

        & > img{
            width: 320px;
            height: 230px;
            opacity: 0.5;
            border-radius: 15px;

            @media(max-width: 800px) {
                width: 230px;
                height: 160px;
                opacity: 1;
            }
        } 

        & > img:hover{
            opacity: 1;
            transition: 0.5s;
            transform: scale(1.05);
        }    
    }
    
`;


export const TracksContent = styled.div`
    display: flex;
    overflow-x: scroll;

    @media(max-width: 800px) {
        margin-bottom: 25px;
    }

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: rgb(47, 18, 140);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
        background-color: rgb(22, 10, 62);
        border-radius: 4px;
    }
    
    & > div {
        margin: 10px 10px 0 10px;
        display: flex;
        flex-direction: column;
        color: #e5e5e5e7;
        cursor: pointer;
        
        & > div > h2{
            margin-top: 12px;
        }

        & > div > h5{
            margin: 10px 0px;
            opacity: 0.5;
        }

        & > img{
            width: 350px;
            height: 230px;
            opacity: 0.5;
            border-radius: 15px;

            @media(max-width: 800px) {
                width: 230px;
                height: 160px;
                opacity: 1;
            }
        } 

        & > img:hover{
            opacity: 1;
            transition: 0.5s;
            transform: scale(1.05);
        }    
    }
    
`;

