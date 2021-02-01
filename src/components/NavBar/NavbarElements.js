import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BiSearchAlt, BiUser } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";

export const Nav = styled.nav`
  background: #fe644c;
  height: 80px;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 999;
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 3rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: var(--color-yellow);
  }
`;
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-white);
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #106606;
  }
`;
export const NavSearchBar = styled.input`
  /* position: relative; */
  text-decoration: none;
  outline: none;
  border-radius: 40px;
  padding: 5px;
  height: 30px;
  font-size: 16px;
  margin: auto 0;
`;
export const NavBtnCart = styled(IoCartOutline)``;
export const NavBtnUser = styled(BiUser)``;
export const NavBtnSearch = styled(BiSearchAlt)`
  color: #fff;
`;
