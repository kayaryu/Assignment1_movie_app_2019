import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movie: [],
  };

  getMovies = async () => {
    const movies = await axios.get(
      "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101"
    );
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
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "Ready"}</div>;
  }
}

export default App;
