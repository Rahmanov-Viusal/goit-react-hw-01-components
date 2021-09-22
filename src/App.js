import Profile from './components/social-profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friend-list/FriendList';
import TransactionsHistory from './components/transaction-history/TransactionsHistory';
import Container from 'components/Container/Container';
import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import transactions from './transactions.json';
import 'modern-normalize/modern-normalize.css';

function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionsHistory items={transactions} />
    </Container>
  );
}

export default App;
