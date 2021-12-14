import styled from 'styled-components';

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 280px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 362px;
`;
const MovieName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MovieInfo = styled.span`
  /* color: #444; */
  font-size: 16px;
  font-weight: 500;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
`;

const Moviecomponent = (props) => {
  const { Title, Year, Type, Poster } = props.movie;

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <MovieContainer
          className="flip-card-front"
          // onClick={() => {
          //   props.onMovieSelect(imdbID);
          // }}
        >
          <CoverImage src={Poster}></CoverImage>
          <MovieName style={{ color: '#fff' }}>{Title}</MovieName>
          <InfoColumn>
            <MovieInfo style={{ color: '#fff' }}>Year: {Year}</MovieInfo>
            <MovieInfo style={{ color: '#fff' }}>Type: {Type}</MovieInfo>
          </InfoColumn>
        </MovieContainer>
      </div>
    </div>
  );
};

export default Moviecomponent;
