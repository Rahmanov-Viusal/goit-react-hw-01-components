import Profile from "./components/social-profile/Profile";
import Statistics from "./components/statistics/Statistics";
import user from "./user.json";
import statisticalData from "./statistical-data.json";
import "modern-normalize/modern-normalize.css";

function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        // avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
    </div>
  );
}

export default App;
