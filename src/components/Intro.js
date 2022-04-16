import {Wrapper, Title} from 'gatsby-theme-amsterdam/src/components/Intro'

const Intro = props => {
    return (
      <>
        {props.context.humanPageNumber === 1 && (
          <Wrapper {...props}>
            <Title>{props.text}  Hello World </Title>
          </Wrapper>
        )}
      </>
    )
  }
  
  export default Intro