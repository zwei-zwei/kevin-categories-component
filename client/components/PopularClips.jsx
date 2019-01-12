import React from 'react';
import Carousel from 'nuka-carousel';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  background-size: cover;
  height: 300px;
  overflow: hidden;
`;

const Info = styled.div`
  position: relative;
  background-size: cover;
  height: 220px;
  width: 100%;
  overflow: hidden;
`;

const Slides = styled.div`
  position: relative;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  height: 70%;
  width: 100%;
  overflow: hidden;
`;

const Details = styled.div``;

const GameThumbnail = styled.div`
  display: inline-block;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  height: 80px;
  width: 40px;
  position: relative;
  bottom: -15px;
`;

const VideoTitles = styled.div`
  dispaly: inline-block;
  position: absolute;
  white-space: nowrap;
  bottom: 40px;
  left: 50px;
  font-family: "Verdana", Sans-serif;
  font-size: medium;
  font-weight: bold;
  overflow: hidden;
`;

const GamerName = styled.div`
  dispaly: inline-block;
  position: absolute;
  bottom: 20px;
  left: 50px;
  font-family: "Verdana", Sans-serif;
  font-size: x-small;
  font-weight: normal;
  overflow: hidden;
`;

const GameTitle = styled.div`
  dispaly: inline-block;
  position: absolute;
  white-space: nowrap;
  bottom: 0px;
  left: 50px;
  font-family: "Verdana", Sans-serif;
  font-size: x-small;
  font-weight: normal;
  overflow: hidden;
`;

const Titles = styled.div`
  white-space: nowrap;
  font-family: "Verdana", Sans-serif;
  font-size: medium;
  font-weight: bold;
  padding-bottom: 20px;
  overflow: hidden;
`;

const Duration = styled.div`
  display: inline-block;
  position: absolute;
  top: 10px;
  left: 5px;
  font-family: "Verdana", Sans-serif;
  font-size: xx-small;
  font-weight: normal;
  color: white;
  overflow: hidden;
`;

const Views = styled.div`
  display: inline-block;
  position: absolute;
  top: 130px;
  left: 5px;
  font-family: "Verdana", Sans-serif;
  font-size: xx-small;
  font-weight: normal;
  color: white;
  overflow: hidden;
`;

const TimeStamp = styled.div`
  dispaly: inline-block;
  position: relative;
  white-space: nowrap;
  top: 130px;
  left: 75%;
  font-family: "Verdana", Sans-serif;
  font-size: xx-small;
  font-weight: normal;
  color: white;
`;

export default class PopularClips extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: this.props.videos,
    }
    this.renderCarousel = this.renderCarousel.bind(this);
  };

  renderCarousel = () => {
      return (
        <div>
          <Container>
            <Titles>Popular clips <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0">Expand All ></a></Titles>
            <Carousel slidesToShow={3} wrapAround={false} cellSpacing={30} renderBottomCenterControls={false} initialSlideHeight={220} initialSlideWidth={300}>
              <Info data-testid="video-info">
                <Slides img={this.state.videos[0].thumbnail_url}>
                  <Duration>► {this.state.videos[0].duration}</Duration>
                  <Views>{this.state.videos[0].view_count} views</Views>
                  <TimeStamp>{this.state.videos[0].created_at} hours ago</TimeStamp>
                </Slides>
                <Details>
                  <GameThumbnail img={this.state.videos[0].thumbnail_url}></GameThumbnail>
                  <VideoTitles><a href="">{this.state.videos[0].clip_title}</a></VideoTitles>
                  <GamerName><a href="">{this.state.videos[0].user_name}</a></GamerName>
                  <GameTitle><a href="">{this.state.videos[0].game_name}</a></GameTitle>
                </Details>
              </Info>
              <Info data-testid="video-info">
                <Slides img={this.state.videos[1].thumbnail_url}>
                  <Duration>► {this.state.videos[1].duration}</Duration>
                  <Views>{this.state.videos[1].view_count} views</Views>
                  <TimeStamp>{this.state.videos[1].created_at} hours ago</TimeStamp>
                </Slides>
                <Details>
                  <GameThumbnail img={this.state.videos[1].game_box_art_url}></GameThumbnail>
                  <VideoTitles><a href="">{this.state.videos[1].clip_title}</a></VideoTitles>
                  <GamerName><a href="">{this.state.videos[1].user_name}</a></GamerName>
                  <GameTitle><a href="">{this.state.videos[1].game_name}</a></GameTitle>
                </Details>
              </Info>
              <Info data-testid="video-info">
                <Slides img={this.state.videos[2].thumbnail_url}>
                  <Duration>► {this.state.videos[2].duration}</Duration>
                  <Views>{this.state.videos[2].view_count} views</Views>
                  <TimeStamp>{this.state.videos[2].created_at} hours ago</TimeStamp>
                </Slides>
                <Details>
                  <GameThumbnail img={this.state.videos[2].game_box_art_url}></GameThumbnail>
                  <VideoTitles><a href="">{this.state.videos[2].clip_title}</a></VideoTitles>
                  <GamerName><a href="">{this.state.videos[2].user_name}</a></GamerName>
                  <GameTitle><a href="">{this.state.videos[2].game_name}</a></GameTitle>
                </Details>
              </Info>
              <Info data-testid="video-info">
                <Slides img={this.state.videos[4].thumbnail_url}>
                  <Duration>► {this.state.videos[4].duration}</Duration>
                  <Views>{this.state.videos[4].view_count} views</Views>
                  <TimeStamp>{this.state.videos[4].created_at} hours ago</TimeStamp>
                </Slides>
                <Details>
                  <GameThumbnail img={this.state.videos[4].game_box_art_url}></GameThumbnail>
                  <VideoTitles><a href="">{this.state.videos[4].clip_title}</a></VideoTitles>
                  <GamerName><a href="">{this.state.videos[4].user_name}</a></GamerName>
                  <GameTitle><a href="">{this.state.videos[4].game_name}</a></GameTitle>
                </Details>
              </Info>
              <Info data-testid="video-info">
                <Slides img={this.state.videos[5].thumbnail_url}>
                  <Duration>► {this.state.videos[5].duration}</Duration>
                  <Views>{this.state.videos[5].view_count} views</Views>
                  <TimeStamp>{this.state.videos[5].created_at} hours ago</TimeStamp>
                </Slides>
                <Details>
                  <GameThumbnail img={this.state.videos[5].game_box_art_url}></GameThumbnail>
                  <VideoTitles><a href="">{this.state.videos[5].clip_title}</a></VideoTitles>
                  <GamerName><a href="">{this.state.videos[5].user_name}</a></GamerName>
                  <GameTitle><a href="">{this.state.videos[5].game_name}</a></GameTitle>
                </Details>
              </Info>
              <Info data-testid="video-info">
                <Slides img={this.state.videos[6].thumbnail_url}>
                  <Duration>► {this.state.videos[6].duration}</Duration>
                  <Views>{this.state.videos[6].view_count} views</Views>
                  <TimeStamp>{this.state.videos[6].created_at} hours ago</TimeStamp>
                </Slides>
                <Details>
                  <GameThumbnail img={this.state.videos[6].game_box_art_url}></GameThumbnail>
                  <VideoTitles><a href="">{this.state.videos[6].clip_title}</a></VideoTitles>
                  <GamerName><a href="">{this.state.videos[6].user_name}</a></GamerName>
                  <GameTitle><a href="">{this.state.videos[6].game_name}</a></GameTitle>
                </Details>
              </Info>
              <Info data-testid="video-info">
                <Slides img={this.state.videos[7].thumbnail_url}>
                  <Duration>► {this.state.videos[7].duration}</Duration>
                  <Views>{this.state.videos[7].view_count} views</Views>
                  <TimeStamp>{this.state.videos[7].created_at} hours ago</TimeStamp>
                </Slides>
                <Details>
                  <GameThumbnail img={this.state.videos[7].game_box_art_url}></GameThumbnail>
                  <VideoTitles><a href="">{this.state.videos[7].clip_title}</a></VideoTitles>
                  <GamerName><a href="">{this.state.videos[7].user_name}</a></GamerName>
                  <GameTitle><a href="">{this.state.videos[8].game_name}</a></GameTitle>
                </Details>
              </Info>
              <Info data-testid="video-info">
                <Slides img={this.state.videos[8].thumbnail_url}>
                  <Duration>► {this.state.videos[8].duration}</Duration>
                  <Views>{this.state.videos[8].view_count} views</Views>
                  <TimeStamp>{this.state.videos[8].created_at} hours ago</TimeStamp>
                </Slides>
                <Details>
                  <GameThumbnail img={this.state.videos[8].game_box_art_url}></GameThumbnail>
                  <VideoTitles><a href="">{this.state.videos[8].clip_title}</a></VideoTitles>
                  <GamerName><a href="">{this.state.videos[8].user_name}</a></GamerName>
                  <GameTitle><a href="">{this.state.videos[8].game_name}</a></GameTitle>
                </Details>
              </Info>
              <Info data-testid="video-info">
                <Slides img={this.state.videos[9].thumbnail_url}>
                  <Duration>► {this.state.videos[9].duration}</Duration>
                  <Views>{this.state.videos[9].view_count} views</Views>
                  <TimeStamp>{this.state.videos[9].created_at} hours ago</TimeStamp>
                </Slides>
                <Details>
                  <GameThumbnail img={this.state.videos[9].game_box_art_url}></GameThumbnail>
                  <VideoTitles><a href="">{this.state.videos[9].clip_title}</a></VideoTitles>
                  <GamerName><a href="">{this.state.videos[9].user_name}</a></GamerName>
                  <GameTitle><a href="">{this.state.videos[9].game_name}</a></GameTitle>
                </Details>
              </Info>
              <Info data-testid="video-info">
                <Slides img={this.state.videos[10].thumbnail_url}>
                  <Duration>► {this.state.videos[10].duration}</Duration>
                  <Views>{this.state.videos[10].view_count} views</Views>
                  <TimeStamp>{this.state.videos[10].created_at} hours ago</TimeStamp>
                </Slides>
                <Details>
                  <GameThumbnail img={this.state.videos[10].game_box_art_url}></GameThumbnail>
                  <VideoTitles><a href="">{this.state.videos[10].clip_title}</a></VideoTitles>
                  <GamerName><a href="">{this.state.videos[10].user_name}</a></GamerName>
                  <GameTitle><a href="">{this.state.videos[10].game_name}</a></GameTitle>
                </Details>
              </Info>
              <Info data-testid="video-info">
                <Slides img={this.state.videos[11].thumbnail_url}>
                  <Duration>► {this.state.videos[11].duration}</Duration>
                  <Views>{this.state.videos[11].view_count} views</Views>
                  <TimeStamp>{this.state.videos[11].created_at} hours ago</TimeStamp>
                </Slides>
                <Details>
                  <GameThumbnail img={this.state.videos[11].game_box_art_url}></GameThumbnail>
                  <VideoTitles><a href="">{this.state.videos[11].clip_title}</a></VideoTitles>
                  <GamerName><a href="">{this.state.videos[11].user_name}</a></GamerName>
                  <GameTitle><a href="">{this.state.videos[11].game_name}</a></GameTitle>
                </Details>
              </Info>
            </Carousel>
          </Container>
        </div>
      );
  }

  componentDidUpdate() {
    this.setState((prevState, props) => {
      let prevTopVideo = prevState.videos[0].video_title;
      let newTopVideo = props.videos[0].video_title;
      if (prevState.videos === null || prevTopVideo !== newTopVideo) {
        return { videos: props.videos };
      } else {
        return;
      }
    });
  };

  render() {
    if (this.state.videos === null) {
      return (<div data-testid="loading-div">Loading ...</div>)
    } else {
      return (
        <div data-testid="main-container">
          {this.renderCarousel()}
        </div>
      );
    }
  };

}