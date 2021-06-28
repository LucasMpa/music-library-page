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
    justify-content: flex-end;

    & > div{
        margin-top: 21px;
        opacity: 0.3;
        transition: 0.5s;
    }

    & > div:hover{
        cursor: pointer;
        opacity: 1;
    }

    & > div:first-child{
        opacity: ${props => props.theme == 'portuguese' && 1};
        margin-right: 25px;
    }

    & > div:nth-child(2){
        opacity: ${props => props.theme == 'english' && 1};
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

`;
export const ProfileView = styled.div`
    flex-direction: column;
    width: 40%;
    & > h2 {
        margin-bottom: 30px;
    }
    & > div {
        display: flex;
        margin-bottom: 30px;
        opacity: 0.5;
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
`;

export const ScrollableContent = styled.div`
    display: flex;
    width: 60vw;
    overflow-x: scroll;

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: rgb(22, 10, 62);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
        background-color:rgb(47, 18, 140);
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

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: rgb(22, 10, 62);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
        background-color:rgb(47, 18, 140);
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
        } 

        & > img:hover{
            opacity: 1;
            transition: 0.5s;
            transform: scale(1.05);
        }    
    }
    
`;

