import { Container, Header, Segment } from "semantic-ui-react";
import { useStore } from "../../stores/store";

export default function ServerError() {
    const {commonStore} = useStore();

    return (
        <Container>
            <Header as='h1' content='Server Error'/>
            <Header sub as='h5' color="red" content={commonStore.error?.message} />
            {commonStore.error?.details && (
                <Segment>
                    <Header as='h4' content='Stack trace' color="teal"/>
                    <code style={{marginTop: '10 px'}}>{commonStore.error.details}</code>
                </Segment>
            )}
        </Container>
    )
}