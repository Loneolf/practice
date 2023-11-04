import React, { Suspense, lazy } from "react";
import { Link, Route, Routes } from "react-router-dom";
// import Home from "./page/home/index";
// import Nav from "./page/nav/index";
import { Button, DatePicker } from 'antd'

const Home = lazy(() => import(/* webpackChunkName: 'home' */ "./page/home"));
const Nav = lazy(() => import(/* webpackChunkName: 'nav' */ "./page/nav"));
const Reduce = lazy(() => import(/* webpackChunkName: 'reduce' */ "./page/reduce"));

function App() {
	const onChange = (date: any, dateString: string) => {
		console.log(date, dateString);
	}
	return (
		<div>
			<h2>myApp</h2>
			<Button type="primary">按钮</Button>
			<DatePicker onChange={onChange} />
			<ul>
				<li><Link to="/home">Home</Link></li>
				<li><Link to="/nav">Nav</Link></li>
				<li><Link to="/reduce">Reduce</Link></li>
			</ul>
            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/nav" element={<Nav />}></Route>
                    <Route path="/reduce" element={<Reduce />}></Route>
                </Routes>
            </Suspense>
		</div>
	);
}

export default App;
