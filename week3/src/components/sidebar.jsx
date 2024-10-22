// sidebar.jsx

import styled from 'styled-components';
import { IoMdSearch } from "react-icons/io";
import { BiSolidMoviePlay } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <Side>
            <Category>
                <StyledLink to="search">
                    <IoMdSearch />
                    <Text>찾기</Text>
                </StyledLink>
            </Category>
            <Category>
                <StyledLink to="movies">
                    <BiSolidMoviePlay />
                    <Text>영화</Text>
                </StyledLink>
            </Category>
        </Side>
    );
};

export default Sidebar;

const Side=styled.aside`
    margin:0px;
    padding:0px;
    width:200px;
    height:100%;

    display:flex;
    flex-direction:column;
    color:white;
    background-color:#282828;
    
`
const Category=styled.div`
    margin:20px;
    display:flex;
    justify-content:left;
    align-items:center;
    
`
const Text=styled.span`
    margin-left:10px;
    color:white;
`
// Link 스타일을 적용한 StyledLink
const StyledLink = styled(Link)`
    text-decoration: none; /* 밑줄 제거 */
    color: inherit; /* 부모의 색상(흰색)을 상속받음 */
    display: flex;
    align-items: center; /* 아이콘과 텍스트를 세로 정렬 */
`;