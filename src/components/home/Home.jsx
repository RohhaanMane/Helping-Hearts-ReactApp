import { BiSearch } from "react-icons/bi";
import "./Home.css";

const Home = () => {
    return (
        <main>
            <div className="sidebar">
                <div className="search">
                    <form>
                        <div className="search-input">
                            <label htmlFor="search">Search: </label>
                            <input
                                type="text"
                                name="search"
                                id="search"
                                placeholder="Search hospitals..."
                            />
                        </div>
                        <div className="search-btn">
                            <BiSearch />
                        </div>
                    </form>
                </div>
                <hr />
                <div className="sort-by">
                    <label htmlFor="sort-item">Sort-By: </label>
                    <div className="sort-item">
                        <input
                            type="radio"
                            id="html"
                            name="sort_beds"
                            value="Defalt"
                        />
                        <label htmlFor="html">Default</label>
                    </div>
                    <div className="sort-item">
                        <input
                            type="radio"
                            id="beds_asc"
                            name="sort_beds"
                            value="beds_asc"
                        />
                        <label htmlFor="html">Beds↑</label>
                    </div>
                    <div className="sort-item">
                        <input
                            type="radio"
                            id="beds_desc"
                            name="sort_beds"
                            value="beds_desc"
                        />
                        <label htmlFor="html">Beds↓</label>
                    </div>
                    <div className="sort-item">
                        <input
                            type="radio"
                            id="ventilator_asc"
                            name="sort_beds"
                            value="ventilator_asc"
                        />
                        <label htmlFor="html">Ventilators↑</label>
                    </div>
                    <div className="sort-item">
                        <input
                            type="radio"
                            id="ventilator_desc"
                            name="sort_beds"
                            value="ventilator_desc"
                        />
                        <label htmlFor="html">Ventilators↓</label>
                    </div>
                    <div className="sort-item">
                        <input
                            type="radio"
                            id="oxygen_asc"
                            name="sort_beds"
                            value="oxygen_asc"
                        />
                        <label htmlFor="html">Oxygen↑</label>
                    </div>
                    <div className="sort-item">
                        <input
                            type="radio"
                            id="oxygen_desc"
                            name="sort_beds"
                            value="oxygen_desc"
                        />
                        <label htmlFor="html">Oxygen↓</label>
                    </div>
                </div>
            </div>
            <div className="content">
                <b>2 Hospitals found</b>
                {/* Add it in map later*/}
                <div className="card">
                    <h1>CPR Hospital</h1>
                    <div className="bed-counts">
                        <span>Beds: 300 </span><span>|</span>
                        <span>Ventilators: 300 </span><span>|</span>
                        <span>Oxygen: 300</span>
                    </div>
                </div>

                <div className="card">
                    <h1>Apple Saraswati Hospital</h1>
                    <div className="bed-counts">
                        <span>Beds: 250 </span><span>|</span>
                        <span>Ventilators: 400 </span><span>|</span>
                        <span>Oxygen: 120</span>
                    </div>
                </div>
                <div className="card">
                    <h1>Aster Aadhar Hospital</h1>
                    <div className="bed-counts">
                        <span>Beds: 350 </span><span>|</span>
                        <span>Ventilators: 280</span><span>|</span>
                        <span>Oxygen: 190</span>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
