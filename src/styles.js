import styled from "styled-components";
import Background from "./assets/background1.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  gap: 50px;
`;

export const H1 = styled.h1`
  color: #ffffff;
  font-size: 2.125rem;
  margin-top: 3.125rem;
  margin-bottom: 5rem;
  text-align: center;
`;

export const Image = styled.img`
  margin-top: 1.875rem;
`;

export const InputContainer = styled.div`
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border-radius: 61px 61px 0 0;
  padding: 50px 40px;

  height: 100vh;

  display: flex;

  flex-direction: column;
`;

export const InputLabel = styled.p`
  line-height: 1.375rem;
  letter-spacing: -0.0255rem;
  text-align: left;
  margin-bottom: 0.0625rem;
  margin-left: 1.5625rem;
  color: #eee;
  font-weight: 700;
  font-size: 1.125rem;

  border: none;
  outline: none;
`;
export const Input = styled.input`
  border-radius: 0.875rem;
  border: none;
  outline: none;
  background: rgba(255, 255, 255, 0.25);

  box-shadow: 0rem 0.25rem 0.25rem 0rem rgba(0, 0, 0, 0.25);
  width: 21.25rem;
  height: 3.75rem;
  margin-bottom: 2.1875rem;
  padding-left: 1.5625rem;
  color: #eee;
  font-weight: 400;
  font-size: 1.5rem;
`;

export const Button = styled.button`
  width: 21.375rem;
  height: 4.625rem;

  border-radius: 0.875rem;
  background: var(--templates-5-color-1, rgba(0, 0, 0, 0.8));

  color: #fff;
  font-size: 1.0625rem;
  font-weight: 700;
  line-height: 1.75rem;
  margin-top: 8.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.9375rem;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.4;
  }
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;

  border-radius: 0.875rem;
  border: none;
  outline: none;
  background: rgba(255, 255, 255, 0.25);

  box-shadow: 0rem 0.25rem 0.25rem 0rem rgba(0, 0, 0, 0.25);
  width: 21.25rem;
  height: 3.75rem;
  margin-top: 30px;

  p {
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #ffffff;
  }

  button {
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
  }
`;
