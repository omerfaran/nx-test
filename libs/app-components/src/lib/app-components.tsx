import styled from 'tailwind';

/* eslint-disable-next-line */
export interface AppComponentsProps {}

const StyledAppComponents = styled.div`
  color: pink;
`;

export function AppComponents(props: AppComponentsProps) {
  return (
    <StyledAppComponents>
      <h1>Welcome to AppComponents!</h1>
    </StyledAppComponents>
  );
}

export default AppComponents;
