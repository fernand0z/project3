import React from 'react';
import { connect } from 'react-redux';
import "./showCards.css";

render() {
    const numOfShowsSelected = this.state.selectedShowIds.length;
    const isLoading = this.state.status === 'loading';

    return (
      <Wrapper>
        <Header>
          <Heading>Add New Show</Heading>

          <TextInput
            focusOnMount
            placeholder="eg. Game of Thrones"
            onChange={this.handleSearch}
            changeDebounceTime={300}
          />
        </Header>

        <Flex>
          {isLoading && (
            <Center>
              <Spinner fadeInDuration={100} />
            </Center>
          )}

          <AddShowSearchResults
            status={this.state.status}
            shows={this.state.shows}
            previouslyTrackedShowIds={this.props.previouslyTrackedShowIds}
            onToggleShow={this.handleToggleShow}
            style={{ flex: 1 }}
          />
        </Flex>

        <Button
          fill
          size="large"
          disabled={numOfShowsSelected === 0}
          onClick={this.handleFinishButton}
        >
          {getButtonText(numOfShowsSelected)}
        </Button>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
height: 100%;
`;

const Header = styled.header`
margin-bottom: ${UNITS_IN_PX[3]};
`;

const Flex = styled.div`
flex: 1;
margin-bottom: ${UNITS_IN_PX[2]};
overflow: auto;
`;

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const mapStateToProps = state => ({
    previouslyTrackedShowIds: getTrackedShowIds(state),
  });
  
  const mapDispatchToProps = { addShowsRequest, hideModal };
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddShow);