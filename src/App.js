import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    dailyBoxOfficeList: [],
  };

  getMovies = async () => {
    const {
      data: {
        boxOfficeResult: { dailyBoxOfficeList },
      },
    } = await axios.get(
      "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101"
    );
    this.setState({ dailyBoxOfficeList, isLoading: false });
    console.log(dailyBoxOfficeList);
  };

  componentDidMount() {
    this.getMovies();
  }
  // async componentDidMount() {
  //   const movies = axios.get(
  //     "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101"
  //   );
  // }

  render() {
    const { isLoading, dailyBoxOfficeList } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : dailyBoxOfficeList.map((dailyBoxOfficeList) => {
              console.log(dailyBoxOfficeList);
              return (
                <Movie
                  key={dailyBoxOfficeList.rnum}
                  id={dailyBoxOfficeList.rnum}
                  title={dailyBoxOfficeList.movieNm}
                  date={dailyBoxOfficeList.movieCd}
                />
              );
            })}
      </div>
    );
  }
}

export default App;
