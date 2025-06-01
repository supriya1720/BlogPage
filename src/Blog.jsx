import './Blog.css'
import { useState } from 'react'
import NavBar from './NavBar.jsx'
import AddBlog from './AddBlog.jsx'
import SearchIcon from '/search-img.png'
import Info from './Data.js'
import Arrow from '/down-arrow.png'

function Blog() {
    const dot = "...";
    const List = [];
    const [inputText, setInputText] = useState({ title: "", content: "", theme: "", description: "" });
    const [divList, setDivList] = useState([Info[0], Info[1], Info[2]]);
    const [divListCopy, setDivListCopy] = useState([Info[0], Info[1], Info[2]]);
    const [search, setSearch] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState("Choose one");
    const [options, setOptions] = useState(["All", Info[0].theme, Info[1].theme, Info[2].theme]);

    function handleChange(event) {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        setInputText((prevValue) => {
            if (inputName === 'title') {
                return {
                    title: inputValue,
                    content: prevValue.content,
                    theme: prevValue.theme,
                    description: prevValue.description,
                }
            }
            else if (inputName === 'content') {
                return {
                    title: prevValue.title,
                    content: inputValue,
                    theme: prevValue.theme,
                    description: prevValue.description,
                }
            }
            else if (inputName === 'theme') {
                return {
                    title: prevValue.title,
                    content: prevValue.content,
                    theme: inputValue,
                    description: prevValue.description,
                }
            }
            else if (inputName === 'description') {
                return {
                    title: prevValue.title,
                    content: prevValue.content,
                    theme: prevValue.theme,
                    description: inputValue,
                }
            }
        })
    }

    function handleClick() {
        setDivList((prevList) =>
            [...prevList, inputText]);
        setDivListCopy((prevLists) =>
            [...prevLists, inputText]);
        if (!options.includes(inputText.theme))
            setOptions([...options, inputText.theme])
    }

    function handleSearch(event) {
        setSearch(event.target.value);
    }

    function handleSearchClick(event) {
        setDivList(divListCopy);
        setDivList((prevLists) => {
            return prevLists.filter((info) => { return info.title.includes(search); });
        })
        event.preventDefault();
    }

    return (
        <div className='main1'>
            <NavBar />
            <div className='main2'>
                <div className='mid11'>
                    <div className='textbox'>

                        <label htmlFor="title-input">Title</label><br />
                        <input
                            id="title-input"
                            name='title'
                            placeholder="Title..."
                            type="text"
                            className='first'
                            onChange={handleChange}
                        />
                        <br />

                        <label htmlFor="content-input">Content</label><br />
                        <textarea
                            id="content-input"
                            name='content'
                            placeholder="Content..."
                            type="text"
                            className='second'
                            rows="2"
                            onChange={handleChange}
                        />
                        <br />

                        <label htmlFor="theme-input">Theme</label><br />
                        <input
                            id="theme-input"
                            name='theme'
                            placeholder="Theme..."
                            type="text"
                            className='first'
                            onChange={handleChange}
                        />
                        <br />

                        <label htmlFor="description-input">Description</label><br />
                        <textarea
                            id="description-input"
                            name='description'
                            placeholder="Description..."
                            type="text"
                            className='second'
                            rows="2"
                            onChange={handleChange}
                        />
                        <br />

                        <button className='circular' onClick={handleClick}>+</button>
                    </div>
                </div>

                <div className='mid22'>
                    <div className='search'>
                        <div className='search-bar'>
                            <form className='search-form'>
                                <input placeholder='Search by Title!' onChange={handleSearch} className='search-input'></input>
                                <button className='search-button' onClick={handleSearchClick}>
                                    <img className='search-icon' src={SearchIcon} alt="search" />
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className='dropdown'>
                        <div className='dropdown-btn' onClick={(e) => setIsActive(!isActive)}>
                            {selected}
                            <img className='arrow' src={Arrow} alt="dropdown arrow" />
                        </div>
                        {isActive && (
                            <div className='dropdown-content'>
                                {options.map((option) => {
                                    return (
                                        <div
                                            key={option}
                                            onClick={(e) => {
                                                setDivList(divListCopy);
                                                setSelected(option);
                                                setIsActive(false);
                                                if (option === 'All') {
                                                    setDivList((prevList) => prevList);
                                                } else {
                                                    setDivList((prevList) =>
                                                        prevList.filter((info) => info.theme === option)
                                                    );
                                                }
                                            }}
                                            className='dropdown-item'
                                        >
                                            {option}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className='main3'>
                {divList.map((oneDiv, index) => {
                    return (
                        <div className='infoDisplay' key={index}>
                            <div className='top-left'></div>
                            <AddBlog key={index} comp={oneDiv} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Blog;