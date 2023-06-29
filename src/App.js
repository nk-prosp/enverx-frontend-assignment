import { styled } from "styled-components";
import HomePage from "./container/HomePage";

function App() {
    return (
        <AppWrapper>
            <HomePage />
        </AppWrapper>
    );
}

export default App;

const AppWrapper = styled.div`
    width: 100%;
    height: 100%;
`;
