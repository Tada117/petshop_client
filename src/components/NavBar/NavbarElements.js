import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BiSearchAlt, BiUser } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";

export const Nav = styled.nav`
  background: #fe644c;
  height: 80px;
  display: -webkit-box;
  -webkit-box-align: center;
  -webkit-box-pack: justify;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;
export const NavLink = styled(Link)`
  color: var(--color-white);
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
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-white);
  font-size: 2rem;

  &.active {
    color: #15cdfc;
  }

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
  position: relative;
  text-decoration: none;
  outline: none;
  border-radius: 40px;
  padding: 5px;
  height: 30px;
  font-size: 16px;
  margin: auto 0;
`;
export const NavBtnCart = styled(IoCartOutline)`
  margin: 0 5px;
`;
export const NavBtnUser = styled(BiUser)``;
export const NavBtnSearch = styled(BiSearchAlt)`
  color: #fff;
  &.active {
    color: #15cdfc;
  }
`;
