import { FunctionComponent } from "react";

interface SearchBarProps {}

const SearchBar: FunctionComponent<SearchBarProps> = () => {
	return (
		<>
			<form>
				<select className="input-select">
					<option value="0">All Categories</option>
					<option value="1">Category 01</option>
					<option value="1">Category 02</option>
				</select>
				<input className="input" placeholder="Search here" />
				<button className="search-btn">Search</button>
			</form>
		</>
	);
};

export default SearchBar;
