import { styled } from '@mui/material';

export const CabecalhoContainer = styled('header')`
    height: 115px;
    background-color: #f6f6f6;
    padding: ${({ theme }) => theme.spacing(2) };
    div {
        height: 100%;
        max-width: 970px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    a{
        font-size: 15px;
        font-weight: bold;
    }
`;

export const Logo = styled('img')`
    width: 150px;
`;

export const LinksContainer = styled('nav')`
    display: flex;
    gap: ${({ theme }) => theme.spacing(2) };
    flex-direction: column;
    justify-content: flex-end;
`;