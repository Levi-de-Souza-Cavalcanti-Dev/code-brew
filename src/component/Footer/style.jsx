import styled from "styled-components";

export const StyleFooter = styled.div`
    width: 1024px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    text-align: center;
    display: flex;

    ul{
        display: flex;

        li{
            list-style-type: none;
            margin: 0 10px;
            color: #1d1d1d;
            cursor:pointer;

            a {
                text-decoration: none;
                color: inherit;
            }
        }

        li:hover{
            color:#2b6f7b;
        }
    }
`;