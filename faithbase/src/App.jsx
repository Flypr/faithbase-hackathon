import Header from './components/Header';
import UserInfo from './components/UserInfo';
import Chat from './components/Chat';

function App() {
	return (
		<div className="">
			<Header />
			<div className="flex">
				<UserInfo />
				<Chat />
			</div>
		</div>
	);
}

export default App;
