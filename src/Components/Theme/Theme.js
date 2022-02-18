import styled from 'styled-components';

const textColor1 = "#fff";

export const Section = styled.div(props => ({
  display: "flex",
  flexDirection: props.row ? "row" : "column",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  position: "relative",
  background: props.background ? props.background : "#0e1624",
}))
export const SectionTitle = styled.p({
  width: "max-content",
  fontWeight: "800",
  fontSize: "65px",
  lineHeight: "65px",
  paddingBottom: "20px",
  background: "linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
})
export const SectionText = styled.p(props => ({
  maxWidth: "800px",
  fontSize: "24px",
  lineHeight: "40px",
  fontWeight: "300",
  color: props.color ? props.color : textColor1,
  padding: "25px",
}))